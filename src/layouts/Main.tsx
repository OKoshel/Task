import React from 'react';
import {IPropsChildren} from "../interfaces/Interfaces";
import Content from "./Content";
import Sidebar from "./sidebar/Sidebar";

const Main = (props: IPropsChildren) => {
    return (
        <>
        <Sidebar />
        <div className='main-wrapper'>
            <Content>{props.children}</Content>
        </div>
        </>
    );
};

export default Main;