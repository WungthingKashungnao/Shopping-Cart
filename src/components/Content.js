import React from 'react'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'

import pants1 from '../assets/pants1.webp'
import pants2 from '../assets/pants2.jpg'
import pants3 from '../assets/pants3.jpg'
import pants4 from '../assets/pants4.jpeg'

function Content(props) {
    // const [cart, setCart] = useState(0);
    
    const itemList = [
        {
            Itmimg: product1,
            title: 'T-shirt  1',
            price: 200,
            txt: "Add to Cart",
            qnt: 1
        },
        {
            Itmimg: product2,
            title: 'T-shirt  2',
            price: 300,
            txt: "Add to Cart",
            qnt: 1
        },
        {
            Itmimg: product3,
            title: 'T-shirt  3',
            price: 150,
            txt: "Add to Cart",
            qnt: 1
        },
        {
            Itmimg: product4,
            title: 'T-shirt  4',
            price: 100,
            txt: "Add to Cart",
            qnt: 1
        },
        {
            Itmimg: pants1,
            title: 'Pants 1',
            price: 300,
            txt: "Add to Cart",
            qnt: 1
        },
        {
            Itmimg: pants2,
            title: 'Pants 2',
            price: 400,
            txt: "Add to Cart",
            qnt: 1
        },
        {
            Itmimg: pants3,
            title: 'Pants 3',
            price: 200,
            txt: "Add to Cart",
            qnt: 1
        },
        {
            Itmimg: pants4,
            title: 'Pants 4',
            price: 500,
            txt: "Add to Cart",
            qnt: 1
        },
    ]
  return (
    <>
      <div className="contents">
        {
            itemList.map((data,index)=>{
                return(
                    <div className="cBox" key={index}>
                        <div className="boxImg">
                            <img src={data.Itmimg} alt="" />
                        </div>
                        <h3>{data.title}</h3>
                        <h4> &#x20b9; {data.price}</h4>
                        <button onClick={()=>props.addToCart(data)} className='cartbtn'>{data.txt}</button>
                        
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Content
