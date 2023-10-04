import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { SignInasync } from '../Services/ProductAction/ProductAction';

function SingIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        
        setInputValue({...inputValue,[name]: value});
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputValue,"oihhh");
        dispatch(SignInasync(inputValue))
        navigate('/')
    }


    return (
        <>

            <div className="signup-form">
                <form class="signup" onSubmit={(e) => handleSubmit(e)}>
                    <h2>Welcome Back !!</h2>
                    <h5 className='my-3'>Create New Account? <a href='' onClick={() => navigate('/signup')}>Sign Up</a></h5>

                
                    <div className="signup__field">
                        <input className="signup__input" type="text" name="email" onChange={handleChange}  value={inputValue.email} id="email" required />
                        <label className="signup__label" for="email">Email</label>
                    </div>

                    <div className="signup__field">
                        <input className="signup__input" type="password" name="password" onChange={handleChange} value={inputValue.password} id="password" required />
                        <label className="signup__label" for="password">Password</label>
                    </div>

                    <button className='signup-btn' type='submit'>Sign In</button>
                </form>

            </div>

        </>
    )
}

export default SingIn