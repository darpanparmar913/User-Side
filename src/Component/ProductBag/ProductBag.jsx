import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCart, getProductacync } from '../Services/ProductAction/ProductAction';
import './ProductBag.css'

function ProductBag() {

    const adminProduct = useSelector(state => state.productReducer.products);
    const isLogin = useSelector(state => state.productReducer.isLogin);

    
    const Pro_Bag = adminProduct.filter((ch) => {
        if (ch.category == "bag") {
            return ch;
        }
    })
    console.log(Pro_Bag, "dklkdnksnlknkn");

    const [ProductData, SetProductData] = useState(Pro_Bag);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Searchdata, setSearchData] = useState({
        search: ''
    })

    const handleSearch = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setSearchData({ [name]: value })

        const ChainProduct = Pro_Bag;

        let Searaachdata = ChainProduct.filter((data) => {
            return data.product.toLowerCase().indexOf(value.toLowerCase()) > -1;
        })
        SetProductData(Searaachdata);
    }

    const getData = () => {
        dispatch(getProductacync());
    }

    useEffect(() => {
        getData();
    },[])

    const handleCart = (id, data) => {
        dispatch(addCart(id, data));
        // navigate('/cart');
    }

    return (
        <>
            <div class="input-group w-50 mt-3 ms-3">
                <input type="text" class="form-control" placeholder="Search for products, brands and more" onChange={(e) => handleSearch(e)} />
                <button class="btn bg-primary text-white" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <section className='mt-5'>
                <div class="container">
                    <div class="row d-flex justify-content-evenly">
                        {
                            ProductData.map((val) => {
                                return (
                                    <div class="col-12 col-sm-8 col-md-6 col-lg-3 shadow">
                                        <div class="card border-0 rounded">

                                            <div style={{ width: "260px", height: "300px" }} >
                                                <img class=" mt-2" src={val.image} alt="Vans" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title">{val.product}</h4>
                                                <h6 class="card-subtitle mb-2 text-muted pt-3">Available: {val.qty}</h6>
                                                <p class="card-text">{val.describtion.slice(0, 50)}</p>

                                                <div class="buy d-flex justify-content-between align-items-center">
                                                    <div class="price text-success">
                                                        <h5 class="mt-4">₹{val.price}</h5>
                                                    </div>
                                                    <div className="button">

                                                    {
                                                        isLogin ? <button class="btn btn-danger mt-3 addcart" onClick={() => handleCart(val.id, val)}><i class="fas fa-shopping-cart"></i></button> :

                                                            <>
                                                                <button class="btn btn-danger  addcart1" onClick={() => handleCart(val.id, val)} disabled><i class="fas fa-shopping-cart"></i></button>
                                                                <br />
                                                        
                                                                <span className='text-danger'>Please login First !!</span>

                                                            </>
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductBag