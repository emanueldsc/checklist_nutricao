import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';
import frutas from '../../assets/apple.svg';
import vegetais from '../../assets/broccoli.png';
import exercise from '../../assets/exercise.svg';
import legumes from '../../assets/vegetables.svg';
import cup from '../../assets/watercup.svg';
import { Day } from '../../models/Day';
import './style.scss';
import { Carregando } from '../Modal';


const Historico = () => {

    const [listDays, setListDays] = useState<Day[]>([]);


    useEffect(() => {
        const uid = firebase.auth().currentUser?.uid;
        if (uid) {
            const checklist = firebase.firestore().collection('ChekLists').where("uid", "==", uid).get();
            checklist.then(list => {
                const docs: Day[] = list.docs.map((doc) => doc.data()) as Day[];
                setListDays(docs);
            });
        }
    }, []);

    return (
        <div className="box-container-historico">
            <header className="container-header-historico">
                <Link to="/" className="header-historico" >
                    <FiArrowLeftCircle size={ 24 } color="#fe7d1a" className="btn" />
                    CheckList
                </Link>
                <h1 className="text-orange">Histórico</h1>
            </header>

            {
                listDays.length ? (
                    <table className="tbl">
                        <thead>
                            <tr>
                                <th className="border-1 border-orange">
                                    <span className="text-orange">Data</span>
                                </th>
                                <th>
                                    <img src={ cup } className="imgLabel" alt="copos d'&aacute;gua" />
                                </th>
                                <th>
                                    <img src={ frutas } className="imgLabel" alt="Frutas Consumidas" />
                                </th>
                                <th>
                                    <img src={ vegetais } className="imgLabel" alt="Vegetais Consumidos" />
                                </th>
                                <th>
                                    <img src={ legumes } className="imgLabel" alt="Legumes Consumidos" />
                                </th>
                                <th>
                                    <span className="text-orange">
                                        <img src={ exercise } className="imgLabel" alt="Tempo se Exercitando" />
                                    </span>
                                </th>
                                <th className="border-1 border-orange">
                                    <span className="text-orange">Di&aacute;rio Alimentar</span>
                                </th>
                            </tr>
                        </thead>

                        { listDays.sort((a, b) => {
                            const [diaA, mesA, anoA] = a.date?.split('/') as string[];
                            const [diaB, mesB, anoB] = b.date?.split('/') as string[];

                            const dateA = new Date(parseInt(anoA), parseInt(mesA), parseInt(diaA));
                            const dateB = new Date(parseInt(anoB), parseInt(mesB), parseInt(diaB));

                            return dateB > dateA ? 1 : -1;
                        }).map((day, i) => {
                            const { date, checklist } = day;
                            const { consumedFruit, consumedLegumen, consumedVegetable, exerciseTime, waterCups } = checklist;
                            return (
                                <>
                                    <tbody key={ day.date } className={ i % 2 === 0 ? 'bg-orange-alpha' : '' }>
                                        <tr  >
                                            <td className="border-1 border-orange">{ date }</td>
                                            <td>{ waterCups }</td>
                                            <td>{ consumedFruit ? <FaCheck size={ 20 } color="#5cb85c" /> : <ImCross size={ 20 } color="#d9534f" /> }</td>
                                            <td>{ consumedLegumen ? <FaCheck size={ 20 } color="#5cb85c" /> : <ImCross size={ 20 } color="#d9534f" /> }</td>
                                            <td>{ consumedVegetable ? <FaCheck size={ 20 } color="#5cb85c" /> : <ImCross size={ 20 } color="#d9534f" /> }</td>
                                            <td>
                                                <h3 className={ exerciseTime > 0 ? 'text-green' : 'text-red' }>{ exerciseTime }</h3>
                                            </td>
                                            <td className="border-1 border-orange">
                                                <span className="link-diario">
                                                    Visualizar di&aacute;rio
                                        </span>
                                            </td>
                                        </tr>
                                    </tbody>

                                </>
                            )
                        }) }
                    </table>
                ) : <Carregando />
            }

        </div>
    );
};

export default Historico;