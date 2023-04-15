import { useState} from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Cart from './components/Cart';


function App() {
  const [show, setShow] = useState(false)
  const [cart, setCart] = useState([])


  const addToCart = (item)=>{

    let isPresent = false;
    cart.forEach(product => {
      
      if(item.title === product.title){
        isPresent=true;
      }
        
    })
    if(isPresent){
      // item.txt = "Added"
      return;
    }
      
      setCart([...cart,item])
  }

  const handleRemove = (title)=>{
    const arr = cart.filter(item => item.title != title)
    setCart(arr);
  }
  const handleChange = (item, d)=>{
    let ind = -1;
    cart.forEach((data, index)=>{
      if(data.title === item.title)
        ind = index;
    })

    const tempArr = cart;
    tempArr[ind].qnt += d;

    if(tempArr[ind].qnt === 0)
      tempArr[ind].qnt = 1;
    setCart([...tempArr]);
  }
  return (
    <div className="App">
      <Header size={cart.length} show={show} setShow={setShow}/>
      <Content addToCart={addToCart}/>
      {
        show ?  <Cart cart={cart} setCart={setCart} handleChange={handleChange} handleRemove={handleRemove}/>: ''
      }
     
    </div>
  );
}

export default App;
