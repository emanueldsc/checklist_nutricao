import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

const Modal = ({ children, isOpen, onClickClose }: any) => {

    const modalRoot = document.getElementById('mainModal') as HTMLElement;

    if (isOpen)
        return ReactDOM.createPortal((
            <div className="uiModalOverlay">
                <div className="uiModal">
                    <span className="close" onClick={ onClickClose }>&times;</span>
                    { children }
                </div>

            </div>
        ), modalRoot);
    else return null;

}

export { Modal };
