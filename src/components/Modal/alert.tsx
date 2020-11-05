import React, { useEffect, useState } from 'react';
import { PropsWithChildren } from "react";
import { Node } from 'typescript';

import './alert.scss';

const Alert = ({ children }: any) => {

    return (
        <span className="alert-modal" >
            <span className="text-orange"> { children }</span>
        </span>
    );
}



export { Alert };
