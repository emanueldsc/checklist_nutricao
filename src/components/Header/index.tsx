import firebase from 'firebase/app';
import React, { useContext, useEffect, useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Link, useHistory } from 'react-router-dom';
import { DataContext } from '../../context/data';
import { Splash } from '../Modal';
import './style.scss';

const Header = () => {

    const [dateNowHeader, setDateNowHeader] = useState(Date.now());
    const history = useHistory();
    const { dateNow, setDate } = useContext(DataContext);

    useEffect(() => {
        setDate(Intl.DateTimeFormat('pt-Br').format(dateNowHeader));
    }, [dateNow, dateNowHeader, setDate]);

    const setDay = (next: number) => {
        const hoje = new Date(dateNowHeader);
        const changeDay = hoje.setDate(hoje.getDate() + next);
        const strdt = Intl.DateTimeFormat('pt-Br').format(changeDay);
        setDate(strdt);
        setDateNowHeader(changeDay);
    }

    const handleSair = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evt.preventDefault();
        firebase.auth().signOut().then(() => {
            history.push('/login');
        });
    }

    return (
        <section className="header">

            <div className="containerDay">
                <FiArrowLeftCircle size={ 24 } color="#fe7d1a" className="btn" onClick={ () => setDay(-1) } />

                <h1 className="pointer hover-orange" onClick={ () => setDateNowHeader(Date.now()) }>{ dateNow }</h1>

                <FiArrowRightCircle size={ 24 } color="#fe7d1a" className="btn" onClick={ () => setDay(1) } />
            </div>

            <Link to="/historico" >
                <button className="historico pointer">
                    Ver Histórico
                </button>
            </Link>

            <button className="btnSair pointer" onClick={ handleSair }>
                Sair
            </button>

        </section>
    )
};

export default Header;