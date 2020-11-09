import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useState } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import './style.scss';

import { Modal, Splash } from '../Modal';


const Login = () => {
    const [login, setLogin] = useState('');
    const [passwd, setPasswd] = useState('');
    const [splash, setSplahs] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [msgErro, setMsgErro] = useState('');

    const history = useHistory();

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        setSplahs(true);
        evt.preventDefault();
        firebase.auth().signInWithEmailAndPassword(login, passwd).then(u => {
            history.push('/');
        }).catch(err => {
            setMsgErro(err);
            setIsOpenModal(true);
            console.error(err);
        }).finally(() => {
            setSplahs(false);
        });
    }

    const handleRegister = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSplahs(true);
        evt.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(login, passwd).then(user => {
            history.push('/');
        }).catch(err => {
            setMsgErro(err);
            setIsOpenModal(true);
            console.error(err);
        }).finally(() => {
            setSplahs(false);
        });
    }

    return (
        <div className="login-container">
            <h1 className="text-orange">Login / Registre-se</h1>

            <form onSubmit={ handleSubmit }>
                <input className="field" type="email" id="login" placeholder="Login" onChange={ e => setLogin(e.target.value) } />
                <input className="field" type="password" id="passwd" placeholder="Senha" onChange={ e => setPasswd(e.target.value) } />
                <div className="btnBox">
                    <button type="button" className="btn-orange pointer" onClick={ handleRegister }>Registrar</button>
                    <input type="submit" className="btn-orange pointer" value="Login" />
                </div>
            </form>

            <hr className="separator" />

            <button className="googlelogin" type="button">
                login com <AiFillGoogleCircle size={ 24 } className="pointer" color="#fe7d1a" />
            </button>

            <Splash isOpen={ splash } />

            <Modal isOpen={ isOpenModal } onClickClose={ () => setIsOpenModal(false) }>
                { msgErro }
            </Modal>

        </div>
    );
}

export default Login