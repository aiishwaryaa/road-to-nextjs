//fetching api using server side 
import Products from "./products";
async function productList(){
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products;

}

export default async function Page(){
 let products =  await productList();
//  console.log(products);
 const styles={
    text:{
        color:"blue",
        fontSize:"40px"
    
    }
 }
    return(
        <div>
            <h1 style={styles.text}>Product List</h1>
            {
                products.map((item)=>(
                    <div style={{border:"2px solid blue", padding:"20px",marginBottom:"10px"}}>
                    <h2 key={item.id}>Product No.:  {item.id}</h2>
                    <h2 key={item.id}>Name:  {item.title}</h2>
                    <h2>Category:  {item.category}</h2>
                    {/* <h2>Price:  {item.price}</h2> */}
                    <h2>Rating:  {item.rating}</h2>
                    {/* if we want to add event for button to check price we simply call this component */}
                    <Products price={item.price}/>
                   </div>
                ))
            }
        </div>
    )
}