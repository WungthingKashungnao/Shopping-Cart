import React,{useState, useEffect} from 'react'

function Cart(props) {
    const [price, setPrice] = useState(0);
    const handlePrice = ()=>{
        let ans = 0;
        props.cart.map( item => {
            ans += item.qnt*item.price;
        })
        setPrice(ans);
    }

    useEffect(()=>{
        handlePrice()
    })
  return (
    <article className='cart-res'>
        {
            props.cart.map((data,index)=>{
                return(
                    <div className="cartBox" key={index}>
                        
                        <div className="cartImg">
                            <img src={data.Itmimg} alt="" />
                        </div>
                        <div className="cartDetails">
                            <h3>{data.title}</h3>
                            <h4> &#x20b9; {data.price}</h4>
                            <div className='cartQuant'>
                                <button onClick={()=> props.handleChange(data, -1)}>-</button>
                                <span>{data.qnt}</span>
                                <button onClick={()=> props.handleChange(data, +1)}>+</button>
                            </div>
                            <button className='removeBtn' onClick={()=> props.handleRemove(data.title)}>Remove</button>
                        </div>
                        
                    </div>
                )
            })
        }
        <div className='totalCart'>
            <span>Total Price of your cart: </span>
            <span>&#x20b9; {price}</span>
        </div>
    
    </article>
    
  )
}
export default Cart;
