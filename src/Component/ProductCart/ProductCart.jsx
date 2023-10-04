
import { DeleteProduct } from '../Services/ProductAction/ProductAction';
import './ProductCart.css'
import { useDispatch, useSelector } from 'react-redux'


function ProductCart() {
    
    const allCartProduct = useSelector(state => state.productReducer.product)
    
    console.log(allCartProduct, "kshdhshh");
    
    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        dispatch(DeleteProduct(id))
    }
    
    let totalCost = 0;



    return (
        <>

            <div className="container mt-5 bg-light p-4">

                <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                        <h4 class="modal-title" id="exampleModalLabel">
                            Your Shopping Cart
                        </h4>

                    </div>
                    <div class="modal-body">
                        <table class="table table-image">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    {/* <th scope="col">Total</th> */}
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {


                                    allCartProduct.map((val) => {

                                        totalCost += val.price * val.qty;

                                        return (
                                            <tr>
                                                <td>
                                                    <div style={{ width: "100px", height: "100px" }}>
                                                        <img src={val.image} alt="" srcset="" style={{ width: "100%", height: "110%", objectFit: "contain" }} />

                                                    </div>
                                                </td>
                                                <td>{val.product}</td>
                                                <td>{val.category}</td>
                                                <td>{val.qty}</td>
                                                <td>{val.price}</td>
                                                <td>
                                                    <button className="delete" type='submit' onClick={() => handleDelete(val.id)}><i class="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-end">
                            <h5>Total: <span class="price text-success">₹ {totalCost}</span></h5>
                        </div>
                    </div>
                    <div class="modal-footer border-top-0 d-flex justify-content-between">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success">Pay Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCart