import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import './modal.scss';

const Modal = ({ children, isOpen, onClickClose }: any) => {

    const modalRoot = document.getElementById('mainModal') as HTMLElement;

    if (isOpen)
        return ReactDOM.createPortal((
            <div className="uiModalOverlay">
                <div className="uiModal">
                    <FaTimes size={ 24 } color="#d9534f" onClick={ onClickClose } className="close" />
                    { children }
                </div>

            </div>
        ), modalRoot);
    else return null;

}

export { Modal };
