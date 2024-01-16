import React from 'react';
import Total from "./Total";
import {Link} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
    return (
        <>
        <h4 onClick={() => navigate(-1)} className="fw-bolder cursor-pointer" >Back</h4>
        <div className="cart">
            <div className="cart__left">
                <div>
                    <h3>Shopping Cart</h3>
                </div>
            </div>

            <div className="cart__right">
                <Total/>
            </div>

        </div>
        </>
    );
};

export default Cart;