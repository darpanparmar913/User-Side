import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { SignUpasync } from '../Services/ProductAction/ProductAction';

function SignUp() {
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
        dispatch(SignUpasync(inputValue))
        navigate('/signin')
    }

    return (
        <>

            <div className="signup-form">
                <form class="signup" onSubmit={(e) => handleSubmit(e)}>
                    <h2>Create New account</h2>
                    <h5 className='my-3'>Already have an account? <a href='' onClick={() => navigate('/signin')}>Sign in</a></h5>

                    <div className="signup__field">
                        <input className="signup__input" type="text" name="email" onChange={handleChange}  value={inputValue.email} id="email" required />
                        <label className="signup__label" for="email">Email</label>
                    </div>

                    <div className="signup__field">
                        <input className="signup__input" type="password" name="password" onChange={handleChange} value={inputValue.password} id="password" required />
                        <label className="signup__label" for="password">Password</label>
                    </div>

                    <button className='signup-btn' type='submit'>Sign up</button>
                </form>

            </div>

        </>
    )
}

export default SignUp