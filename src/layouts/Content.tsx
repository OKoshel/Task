import { FC, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {IPropsChildren} from "../interfaces/Interfaces";

const Content: FC<IPropsChildren> = ({children})=> {
    const { pathname } = useLocation();
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (pathname && contentRef.current) {
            contentRef.current?.scrollTo(0, 0);
        }
    }, [pathname, contentRef]);

    return (
        <div className={'w-100 content-wrapper'} ref={contentRef}>
            <div className={'content-wrapper-frame'}>
                {children}
            </div>
        </div>
    );
};

export default Content;
