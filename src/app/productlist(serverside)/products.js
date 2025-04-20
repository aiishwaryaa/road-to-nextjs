//using client component in server component
'use client'

export default function Products({price}){
    return(
        <div>
            <button onClick={()=>alert("Rs." + price)}>
               Check Price
            </button>
        </div>
    )
}