import {useContext} from "react"
import {PRODUCTS} from "../mocks";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import { ShoppingCart } from '@mui/icons-material'
import {useNavigate} from "react-router-dom";
import {IProduct} from "../interfaces/Interfaces";
import {addToCart} from "../redux/reducers/cartReducer";
import {useDispatch} from "react-redux";
import {CartContext} from "../context/cart/CartContext";


const Store = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {getCartCount} = useContext(CartContext)

    const countProductsInCart = getCartCount()

    const addToBucket = (item: IProduct) => {
        dispatch(addToCart(item))

    }


    return (
        <div className="d-flex gap-4 flex-wrap m-auto">
        {PRODUCTS.map((product) => {
            return (
                <Card sx={{ minWidth: 345}} key={product.id}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={product.image}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom  component="div">
                            <p className="fw-bolder font-sans">{product.name}</p>
                        </Typography>
                        <Typography gutterBottom component="div">
                            <p style={{color: "green"}}>Price - {product.price}</p>
                        </Typography>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-secondary" onClick={() => addToBucket(product)}>Add to Cart</button>
                        </div>
                    </CardContent>
                </Card>
            )
        })}

            <div className='shopping-cart' onClick={() => navigate('/cart')}>
                <ShoppingCart id='cartIcon'/>
                <p>{countProductsInCart}</p>
            </div>
        </div>

    )
}

export default Store
