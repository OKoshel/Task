import React, {useContext, useEffect} from 'react';
import Total from "./Total";
import {useNavigate} from "react-router-dom";
import {CartContext} from "../../context/cart/CartContext";
import {IProduct} from "../../interfaces/Interfaces";
import {useDispatch} from "react-redux";
import {deleteProductFromCart} from "../../redux/reducers/cartReducer";


const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {getSelectedProducts, getCartCount} = useContext(CartContext)
    const selectedProducts  = getSelectedProducts()

    const selectedProductsCount = getCartCount()

    const deleteProduct = (product: IProduct)=> {
        dispatch(deleteProductFromCart(product))

    }


    return (
        <>
        <h4 onClick={() => navigate(-1)} className="fw-bolder cursor-pointer" >Back</h4>
        <div className="cart">
            <div className="cart__left">
                <div>
                    <h3>Shopping Cart</h3>
                    <div className="d-flex gap-3">
                    {selectedProducts.map((product) => {
                        return(
                            <div className="card d-flex justify-content-between" key={product.id}>
                                <div>
                                    <div>Name: {product.name}</div>
                                    <div>Price: {product.price}</div>
                                </div>
                                <button className="btn btn-outline-primary" onClick={() =>deleteProduct(product) }>Delete from Cart</button>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>

            <div className="cart__right">
                <Total count={selectedProductsCount}/>
            </div>

        </div>
        </>
    );
};

export default Cart;