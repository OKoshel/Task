import {CartContext} from "./CartContext";
import {useAppSelector} from "../../redux/hooks/redux";


export const CartState = ({ children }: any) => {
    const getSelectedProducts = () => {
        return useAppSelector((state) => state.cart.selectedProducts)
    };


    const getCartCount = (): number => {
        return useAppSelector((state) => state.cart.selectedProducts.length)
    };

    const getCartSummary = (): number => {
        return useAppSelector((state) => state.cart.summaryPrice)
    };


    return (
        <CartContext.Provider
            value={{
                getCartCount,
                getSelectedProducts,
                getCartSummary
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
