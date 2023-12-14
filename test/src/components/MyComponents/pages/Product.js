import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Error from '../../error/Error';
const Product = () => {
    
    const { productId }  = useParams();

    const [prod, setProd] = useState([]);

    useEffect(() => {
        fetch("/iphoneData.json")
        .then((res) => res.json())
        .then((data) => {
            const prodList = data.product;
            const singleProd = prodList.filter(
                (product) => product.product_url === productId
            );
            setProd(singleProd);
            console.log(singleProd);
        })
        .catch(() => {console.log("Data Fetch Error!!!")})
    }, [productId]);

    if(prod.length) {
    return (
        <div className='container'>
        {
            prod?.map((prod, i) =>{
                let name = prod.product_name;
                let desc = prod.description;
                let detail = prod.brief_desc;
                let price = prod.starting_price;
                let range = prod.price_range;
                let image = prod.prod_image;
                let link = prod.prod_link;
                let productWrapper = (
                    <div className='row h-100'>
                        <div className='title-wrapper col-12 text-center'>
                        <p>{name}</p>
                        </div>
                        <div className='description-wrapper col-12 text-center'>
                                <p>{desc}</p>
                        </div>
                    <div className='col-6 text-center my-auto'>
                            <div>
                                <p>Starting at {price}</p>
                                <p>{range}</p>
                                <p>{detail}</p>
                            </div>
                    </div>
                    <div className='col-6 p-3'>
                        <div className='single-image'>
                           <img src={image} alt='product image'/>
                        </div>
                    </div>
                </div>
                );
                return productWrapper;
            })
        }
        </div>
    );
    }
    else
    return<Error/>;
}

export default Product;
