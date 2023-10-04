import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import './HomePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProductacync } from '../Services/ProductAction/ProductAction';

function HomePage() {

    const adminProduct = useSelector(state => state.productReducer.products);

    const dispatch = useDispatch();

    const getData = () => {
        dispatch(getProductacync());
    }

    useEffect(() => {
        getData(adminProduct);
    })

    const navigate = useNavigate();

    return (
        <>

            <section className='mt-3'>
                <div className="d-flex align-items-center">

                    <div class="card border-0 text-center" style={{ width: '15rem' }}>
                        <div class="card-body">
                            <h3 class="card-title">best of Chain</h3>
                            <button className='btn btn-outline-primary' onClick={() => navigate('/chain')}>View All</button>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/0/2/p/8435/330/808/2/w/315/8435330808_6_1_1.jpg?ts=1692350271581" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Chain With Pendent</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/0/2/p/8435/305/910/2/w/315/8435305910_6_1_1.jpg?ts=1689941559216" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Gold Link Chain</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/0/2/p/8435/304/808/2/w/315/8435304808_6_1_1.jpg?ts=1689939255908" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Metal Chain</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/0/2/p/8435/340/808/2/w/315/8435340808_6_1_1.jpg?ts=1694427179849" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Silver Chain</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/0/2/p/1012/300/808/2/w/315/1012300808_6_1_1.jpg?ts=1688111365136" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Silver Pendal Chain</h6>
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-center mt-3">
                    <div class="card border-0 text-center" style={{ width: '15rem' }}>
                        <div class="card-body">
                            <h3 class="card-title">Best Of Zara Bag</h3>
                            <button className='btn btn-outline-primary' onClick={() => navigate('/bag')}>View All</button>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/1/2/p/3216/220/202/2/w/292/3216220202_6_1_1.jpg?ts=1690447591389" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Mini Cressbody Bag</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/1/2/p/3622/220/202/2/w/292/3622220202_6_1_1.jpg?ts=1690450057610" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Tie-Dye Tote Bag</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/1/2/p/3916/220/120/2/w/292/3916220120_6_1_1.jpg?ts=1694075421917" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Mini Fational Bag</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/1/2/p/3916/220/800/2/w/292/3916220800_6_1_1.jpg?ts=1694075421550" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Printed Canvas Bag</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/1/2/p/3916/220/800/2/w/292/3916220800_6_2_1.jpg?ts=1694075421956" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">black Bag</h6>
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-center mt-3">
                    <div class="card border-0 text-center" style={{ width: '15rem' }}>
                        <div class="card-body">
                            <h3 class="card-title">Best Of Accessories</h3>
                            <button className='btn btn-outline-primary' onClick={() => navigate('/acc')}>View All</button>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/0/2/p/4566/300/800/2/w/288/4566300800_6_1_1.jpg?ts=1694420389426" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Short Wool Cap</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/0/2/p/0348/327/251/2/w/288/0348327251_6_1_1.jpg?ts=1694427447103" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Ribbed Cotten Cap</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/0/2/p/6907/401/800/2/w/288/6907401800_6_1_1.jpg?ts=1694080830993" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Black Leadher Belt</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/0/2/p/6907/401/700/2/w/288/6907401700_6_1_1.jpg?ts=1694080832849" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Brown Leadher Belt</h6>
                        </div>
                    </div>
                    <div class="card p-1 me-3" style={{ width: '15rem' }}>
                        <img src="https://static.zara.net/photos///2023/I/0/2/p/9065/330/807/2/w/288/9065330807_6_1_1.jpg?ts=1693924261556" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">Short Knit Beanie</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage