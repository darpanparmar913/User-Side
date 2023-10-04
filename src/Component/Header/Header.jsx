import React from 'react'
import './Header.css'
import img from './Flipkart-logo.png'
import { useNavigate } from 'react-router'
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAsync } from '../Services/ProductAction/ProductAction';


function Header() {

    const allCartData = useSelector(state => state.productReducer.product)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isLogin} = useSelector(state => state.productReducer);

    const logout = () =>{
        dispatch(LogoutAsync());
    }


    return (
        <>

            <section className='bg-header'>
                <header>
                    <div className="container">
                        <div className="row-1 align-items-center d-flex justify-content-between">
                            <div className="logo">
                                <img src={img} alt="" onClick={() => navigate('/')} />
                            </div>

                            <div className='row-1 text-white'>
                                <h6>All Country Delivery Available || Delivery To Surat Signing</h6>
                            </div>

                            <div className='row-1 align-items-center'>
                                <div className="login-btn ms-5">
                                    {
                                        isLogin ? 
                                            <button type="button" onClick={() => logout()}>Log Out</button>
                                            
                                         :
                                         <button type="button" onClick={() => navigate('/signup')}>Sign Up</button>   

                                    }
                                </div>

                                <div className="bcm-sellor ms-4">
                                    <span>User View</span>
                                </div>


                                <div className="more ms-4">
                                    <span>More<i class="fa-solid fa-angle-down ms-2"></i></span>
                                </div>

                                <div className="add-cart">

                                    <h6 onClick={() => navigate('/cart')}><Badge className='bg-danger'>{allCartData.length}</Badge><i class="fa-solid fa-cart-shopping me-2"></i>Cart</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>
            </section>

        </>
    )
}

export default Header