import React from 'react';
import ReactDOM from 'react-dom';
import './splash.scss';

const Splash = ({ isOpen }: any) => {

    const splashRoot = document.getElementById('mainSplash') as HTMLElement;
    if (isOpen)
        return ReactDOM.createPortal(
            <div className="mainSplash">
                <span className="text-orange">Carregando...</span>
            </div>, splashRoot);
    return null;
};

export { Splash };
