import React from 'react';
import {ACCOUNT_PAGE_ROUTE, HOME_PAGE_ROUTE, TEST_PAGE_ROUTE} from "../../constants";

export const SIDEBAR_ITEMS=
[
        {
            name: 'Home',
            id: 1,
            icon:'',
            href: HOME_PAGE_ROUTE,
        },
        {
            name: "Account",
            id: 2,
            icon: "",
            href: ACCOUNT_PAGE_ROUTE,
        },
    {
        name: "Test",
        id: 3,
        icon: "",
        href: TEST_PAGE_ROUTE,
    },
]


const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="d-flex gap-3 align-items-center">
            { SIDEBAR_ITEMS.map((item) => {
                  return <a href={item.href}  key={item.id} className="text-decoration-none pointer-event">{item.name}</a>
              })}

        </div>
        </div>
    );
};

export default Sidebar;