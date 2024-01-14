import React from 'react'

const ProductCard = ({state,dispatch}) => {
    const {cart , products} = state;
    console.log(products);
  return (
    <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        width:"80%"
    }}>
        {
            products?.map((prod)=>(
                <div key={prod.id}
                style={{
                    display:"flex",
                    flexDirection:"column",
                    padding:10,
                    border:"1px solid grey",
                    width:"30%",
                    marginTop:10,
                    gap:10
                }}
                >
                    <img src = {prod.thumbnail} alt={prod.title} style={{height:200,objectFit:"cover"}}/>
                 <div style={{display:"flex",justifyContent:"space-between"}}>
                 <span>{prod.title}</span>
                    <p>${prod.price}</p>
                 </div>

                 {
                    cart.some(c=>c.id===prod.id)?
                    <button
                 style={{
                    padding:5,
                    border:0,
                    borderRadius:5,
                    backgroundColor:"red",
                    color:"white"
                 }}
                 onClick={()=>
                 dispatch({
                    type:"REMOVE_FROM_CART",
                    payload:prod
                 })
                 }
                 >REMOVE FROM CART</button> :
                      <button
                 style={{
                    padding:5,
                    border:0,
                    borderRadius:5,
                    backgroundColor:"green",
                    color:"white"
                 }}
                 onClick={()=>
                 dispatch({
                    type:"ADD_TO_CART",
                    payload:{
                        id:prod.id,
                        price:prod.price,
                        image:prod.thumbnail,
                        qty:1,
                        title:prod.title
                    }
                 })
                 }
                 >ADD TO CART</button>
                 }
            
            
                </div>
            ))
        }
    </div>
  )
}

export default ProductCard