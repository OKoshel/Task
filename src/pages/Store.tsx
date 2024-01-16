import {useLayoutEffect, useRef, useState} from "react"
import gsap from "gsap"
import Home from "./Home";
import {PRODUCTS} from "../mocks";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import { ShoppingCart } from '@mui/icons-material'
import {useNavigate} from "react-router-dom";

const Store = () => {

    const navigate = useNavigate()

    const [selectedItems, setSelectedItems] = useState([])

    const addToBucket = (item: any) => {
      setSelectedItems(prev => [...prev, item] )

    }

    console.log(selectedItems)


    // const comp = useRef(null)

    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //         const t1 = gsap.timeline()
    //         t1.from("#intro-slider", {
    //             xPercent: "-100",
    //             duration: 1.3,
    //             delay: 0.3,
    //         })
    //             .from(["#title-1", "#title-2", "#title-3"], {
    //                 opacity: 0,
    //                 x: "+=100",
    //                 stagger: 0.5,
    //             })
    //             .to(["#title-1", "#title-2", "#title-3"], {
    //                 opacity: 0,
    //                 y: "-=20",
    //                 delay: 0.3,
    //                 stagger: 0.5,
    //             })
    //             .to("#intro-slider", {
    //                 xPercent: "-100",
    //                 duration: 1.3,
    //             })
    //             .from("#welcome", {
    //                 opacity: 0,
    //                 duration: 0.5,
    //             })
    //     }, comp)
    //
    //     return () => ctx.revert()
    // }, [])
    return (
        <div className="d-flex gap-4 flex-wrap m-auto">
        {PRODUCTS.map((product) => {
            return (
                <Card sx={{ minWidth: 345}}>
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
                <p>0</p>
            </div>
        </div>
        // <div className="relative" ref={comp}>
        //     <div
        //         id="intro-slider"
        //         className="h-screen p-10 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col tracking-tight"
        //     >
        //         <h1 className="text-3xl" id="title-1">
        //             Software Engineer
        //         </h1>
        //         <h1 className="text-3xl" id="title-2">
        //             Designer
        //         </h1>
        //         <h1 className="text-3xl" id="title-3">
        //             Freelancer
        //         </h1>
        //     </div>
        // </div>
    )
}

export default Store
