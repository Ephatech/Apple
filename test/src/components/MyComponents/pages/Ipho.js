import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link } from 'react-router-dom'; 

const Ipho = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("/iphoneData.json")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.product);
        })
        .catch(() => {console.log("Data Fetch Error!!!")})
    },[]);

    console.log(products);
    return (
        <div className='container'>
            <div className='title-wrapper text-center'>
                                <p>iPhone</p>
                            </div>
            <h2 className='text-center'>The best for the brightest</h2><br></br>
        {
            products?.map((singleProd, i) =>{
                let name = singleProd.product_name;
                let desc = singleProd.description;
                let price = singleProd.starting_price;
                let range = singleProd.price_range;
                let image = singleProd.prod_image;
                let url = "/iphone/" + singleProd.product_url;
                let productWrapper = (
                    <div className='row h-100'>

                    <div className={`col-6 text-center my-auto order-${i % 2 === 0 ? "1" : "2" }`}>
                            <div className='title-wrapper'>
                                <p>{name}</p>
                            </div>
                            <div className='description-wrapper'>
                                <p>{desc}</p>
                                <p>Starting at {price}</p>
                                <p>{range}</p>
                            </div>
                            <div className='links-wrapper'>
                            <ul>
                                <li>
                            <Link to={url}>Learn More</Link></li></ul>
                            </div>
                    </div>
                    <div className={`col-6 p-3 order-${i % 2 === 0 ? "2" : "1" }` }>
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

export default Ipho;
