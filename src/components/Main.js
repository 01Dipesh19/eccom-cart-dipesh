import { useEffect } from 'react';
import { addToCart} from '../redux/action';
import{productList} from '../redux/productAction'
import { useDispatch,useSelector } from 'react-redux'


function Main() {
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(productList())
  },[])

  return (
    <div>
      {/* <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div> */}
     
      <div className='product-container'> 
      {
        data.map((item)=><div className='product-item'>
        
          <div className='spacing'>Name:{item.name}</div>
          <div  className='spacing' >price:{item.price}</div>
       
          <div>
              <button onClick={() => dispatch(addToCart(item))}class="btn btn-secondary">Add to Cart</button>

              </div>

        </div>)
      }
        
      </div>
    </div>
  );
}

export default Main;
