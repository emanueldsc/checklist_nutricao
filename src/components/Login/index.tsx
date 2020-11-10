import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Splash } from '../Modal';
import './style.scss';

firebase.auth().languageCode = 'pt';

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
            setMsgErro(errMsg(err));
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
        }).catch((err: any) => {
            setMsgErro(errMsg(err));
            setIsOpenModal(true);
            console.error(err);
        }).finally(() => {
            setSplahs(false);
        });
    }

    const restaurarSenha = () => {
        setSplahs(true);
        firebase.auth().sendPasswordResetEmail(login).then(() => {
            setMsgErro(`Um email de alteração de senha foi enviado para ${login}`);
            setIsOpenModal(true);
        }).catch(err => {
            setMsgErro(`Erro com o email Informado. Por favor informe um email no campo login.`);
            setIsOpenModal(true);
        }).finally(() => {
            setSplahs(false);
        });
    };

    function errMsg(err: { code: string }): string {
        switch (err.code) {
            case "auth/too-many-requests":
                return 'O acesso a esta conta foi temporariamente desativado devido a muitas tentativas de login malsucedidas. Você pode restaurá-la imediatamente redefinindo sua senha ou pode tentar novamente mais tarde.';
            case "auth/wrong-password":
                return 'A senha é inválida ou o usuário não possui uma senha.';
        }
        return '';
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

            <button className="googlelogin" type="button" onClick={ restaurarSenha }>
                restaurar senha
            </button>

            <Splash isOpen={ splash } />

            <Modal isOpen={ isOpenModal } onClickClose={ () => setIsOpenModal(false) }>
                { msgErro }
            </Modal>

        </div>
    );
}

export default Login