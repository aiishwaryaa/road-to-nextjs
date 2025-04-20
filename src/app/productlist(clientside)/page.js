//fetching data using client component

'use client'
import { useState, useEffect } from "react"

 export default function Page(){
    const [product, setProduct] = useState([])

    useEffect(()=>{
    const fetchData = async()=>{
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    // console.log(data)
    setProduct(data.products)
    }
    fetchData();
    },[])

    return(
        <div>
            <h1>Products List</h1>
            {
                product.map((item)=>(
                   <div style={{border:"2px solid black", padding:"20px",marginBottom:"10px"}}>
                    <h3 key={item.id}>Product No.: {item.id}</h3>
                    <h3 key={item.id}>Name: {item.title}</h3>
                    <h4>Category: {item.category}</h4>
                    <h4>Price: {item.price}</h4>
                    <h4>Rating: {item.rating}</h4>
                   </div>

                ))
            }
        </div>
    )
 }