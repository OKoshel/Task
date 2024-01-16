import React, {FC, useContext} from 'react';
import {IProduct} from "../../interfaces/Interfaces";
import {addToCart} from "../../redux/reducers/cartReducer";
import {CartContext} from "../../context/cart/CartContext";

interface Props{
    count: number
}

const Total: FC<Props> = ({count}) => {
    const {getCartSummary} = useContext(CartContext)
    const summary = getCartSummary()


    return (
        <div className="total">
            <h2>ORDER SUMMARY</h2>
            <div>
                <p className="total__p">
                    total ({count} items) : <strong>${summary}</strong>
                </p>
            </div>
        </div>
    );
};

export default Total;