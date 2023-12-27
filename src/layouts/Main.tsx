import React from 'react';
import {IPropsChildren} from "../interfaces/Interfaces";
import Content from "./Content";

const Main = (props: IPropsChildren) => {
    return (
        <div className={'main-wrapper'}>
        {/*//     <Sidebar />*/}
            <Content>{props.children}</Content>
        </div>
    );
};

export default Main;