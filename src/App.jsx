import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './Component/Header/Header.jsx'
import ProductCart from './Component/ProductCart/ProductCart.jsx'
import HomePage from './Component/HomePage/HomePage.jsx'
import ProductBag from './Component/ProductBag/ProductBag.jsx'
import ProductAcc from './Component/ProductAcc/ProductAcc.jsx'
import ProductChain from './Component/EleProduct/ProductChain.jsx'
import SignUp from './Component/SignUp/SignUp.jsx'
import SingIn from './Component/SingIn/SingIn.jsx'
// import Slider from './Component/Slider/Slider.jsx'






function App() {
  return (
	<>
		<Header />	

		<Routes>
			{/* <Route path='/' element={<Slider/>}></Route> */}
			<Route path='/' element={<HomePage/>}></Route>
			<Route path='/chain' element={<ProductChain/>}></Route>
			<Route path='/bag' element={<ProductBag/>}></Route>
			<Route path='/acc' element={<ProductAcc/>}></Route>
			<Route path='/cart' element={<ProductCart/>}></Route>
			<Route path='/signup' element={<SignUp/>}></Route>
			<Route path='/signin' element={<SingIn/>}></Route>
		</Routes>
	</>
  )
}

export default App