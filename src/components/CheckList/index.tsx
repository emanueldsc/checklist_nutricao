import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react';
import apple from '../../assets/apple.svg';
import broccoli from '../../assets/broccoli.png';
import cupempy from '../../assets/emptycup.svg';
import exercises from '../../assets/exercise.svg';
import vegetables from '../../assets/vegetables.svg';
import cup from '../../assets/watercup.svg';
import { DataContext } from '../../context/data';
import { Day } from '../../models/Day';
import { Modal } from '../Modal';
import './style.scss';

const CheckList = () => {

    const [did, setDid] = useState('');
    const [waterCups, setWaterCups] = useState(new Array(12).fill(false));
    const [cFruta, setFruta] = useState(false);
    const [cVerdura, setVerdura] = useState(false);
    const [cVegetal, setVegetal] = useState(false);
    const [exercise, setExercise] = useState(false);
    const [exerciseTime, setExerciseTime] = useState(0);
    const { dateNow } = useContext(DataContext);
    const [alert, setShowAlert] = useState(false);

    useEffect(() => {
        (function () {
            setDid('');
            const uid = firebase.auth().currentUser?.uid;
            const dt = dateNow;
            console.log(dt, uid)
            const history = firebase.firestore().collection('ChekLists').where("date", "==", dt).where('uid', '==', uid);
            history.get()
                .then(snapshot => {
                    if (snapshot.size === 1) {
                        const doc = snapshot.docs[0].data() as Day;
                        const d_id = snapshot.docs[0].id;
                        setDid(d_id);
                        setWaterCups(new Array(12).fill(true).fill(false, doc.checklist.waterCups));
                        setFruta(doc.checklist.consumedFruit);
                        setVerdura(doc.checklist.consumedVegetable);
                        setVegetal(doc.checklist.consumedLegumen);
                        if (doc.checklist.exerciseTime) {
                            setExercise(true);
                            setExerciseTime(doc.checklist.exerciseTime);
                        } else {
                            setExercise(false);
                            setExerciseTime(0);
                        }
                    } else {
                        setWaterCups(new Array(12).fill(false));
                        setFruta(false);
                        setVerdura(false);
                        setVegetal(false);
                        setExercise(false);
                        setExerciseTime(0);
                    }
                })
                .catch(console.error);
        })()
    }, [dateNow]);

    const drinkWater = (i: number) => {
        const cups = waterCups.map((c, index) => {
            return i === index ? !c : c
        });
        setWaterCups(cups);
    }

    const salvar = () => {
        const btnSalvar = document.getElementById('btnSalvar');
        btnSalvar?.setAttribute('disabled', 'disabled');
        const waterCounts = waterCups.reduce((count, cup) => cup ? count + 1 : count, 0);
        const uid = firebase.auth().currentUser?.uid;
        if (uid) {
            const day: Day = {
                uid,
                date: dateNow,
                checklist: {
                    waterCups: waterCounts,
                    consumedFruit: cFruta,
                    consumedVegetable: cVerdura,
                    consumedLegumen: cVegetal,
                    exerciseTime: exercise ? exerciseTime : 0
                }
            }

            const checklist = firebase.firestore().collection('ChekLists');
            if (did) {
                checklist.doc(did).set(day)
                    .then(() => {
                        setShowAlert(true);
                        console.info('Alteração realizada com sucesso!');
                    })
                    .catch(console.error)
                    .finally(() => {
                        btnSalvar?.removeAttribute('disabled');
                    });
            } else {
                checklist.add(day)
                    .then(docRef => {
                        setDid(docRef.id);
                        setShowAlert(true);
                        console.info('Cadastro realizado com sucesso!');
                    })
                    .catch(console.error)
                    .finally(() => {
                        btnSalvar?.removeAttribute('disabled');
                    });
            }

        }
    }

    return (
        <>
            <h2>Beber 10 à 12 copos de água por dia</h2>
            <div className="cups">
                {
                    waterCups.map((c, index) => (
                        <img onClick={ () => drinkWater(index) } key={ index } src={ c ? cup : cupempy } className="cup" alt="cup" />
                    ))
                }
            </div>
            <h2>Consumir Futas, verduras e legumes Todos os dias</h2>
            <div className="fruts">
                <figure>
                    <img onClick={ () => setFruta(!cFruta) } src={ apple } alt="fruta" className={ `fruit ${!cFruta && 'uncheck'}` } />
                    <figcaption>Fruta</figcaption>
                </figure>
                <figure>
                    <img onClick={ () => setVerdura(!cVerdura) } src={ broccoli } alt="verdura" className={ `fruit ${!cVerdura && 'uncheck'}` } />
                    <figcaption>Verdura</figcaption>
                </figure>
                <figure>
                    <img onClick={ () => setVegetal(!cVegetal) } src={ vegetables } alt="vegetal" className={ `fruit ${!cVegetal && 'uncheck'}` } />
                    <figcaption>Vegetal</figcaption>
                </figure>
            </div>
            <h2>Check Aividades físicas</h2>
            <div className="exercises">
                <img src={ exercises } alt="exercicios" className="exerciseImg" id="exerciseImg" />
                <label htmlFor="exerciseSim">
                    <input type="radio" name="exercise" checked={ exercise } value="sim" id="exerciseSim" onChange={ () => setExercise(true) } />
                        Sim
                    </label>
                <label htmlFor="exerciseNao">
                    <input type="radio" name="exercise" checked={ !exercise } value="nao" id="exerciseNao" onChange={ () => setExercise(false) } />
                        Não
                    </label>
                <div className="input-group-tempo">
                    <span>Tempo em min:</span>
                    <input type="number" name="tempo" id="exerciseTempo" value={ exerciseTime } onChange={ e => setExerciseTime(parseInt(e.target.value)) } />
                </div>
            </div>

            <button className="btnSalvar" id="btnSalvar" onClick={ salvar }>
                Salvar
            </button>

            <Modal isOpen={ alert } onClickClose={ () => setShowAlert(false) }>
                Checkin Salvo com sucesso!
            </Modal>

        </>
    )
}

export default CheckList;