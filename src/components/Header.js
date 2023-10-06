
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {productSearch} from "../redux/productAction"


const Header =()=>{
    const result = useSelector((state)=>state.cartData);
    console.warn("data in header", result);

    const dispatch=useDispatch()
    // console.warn("data in header", result);
    return(
        <div className="header">
            <Link to={"/"}>
            <h1 className='logo'>D CREATION</h1>
            </Link>
            <Link to={"/"} className='home'>Home</Link>
            <Link to={"/cart"}>
            <div className="cart-div">
            <span>{result.length}</span>
               <p>cart</p>
            </div>
            </Link>
        </div>
    )
}

export default Header;