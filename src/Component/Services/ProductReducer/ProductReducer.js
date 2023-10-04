const initiale = {
    products: [],
    product: [],
    msg: '',
    isLogin: false
}

const productReducer = (state = initiale, action) => {
    // console.log(action);

    switch (action.type) {

        case 'SIGNUP_SUC':
            return {
                ...state
            }

        case 'SIGNUP_ERR':
            return {
                ...state,
                msg: action.payload
            }

        case 'SIGNIN_SUC':
            return {
                ...state,
                isLogin: true
            }

        case 'SIGNIN_ERR':
            return {
                ...state,
                msg: action.payload
            }

        case 'SIGNOUT_SUC':
            return {
                ...state,
                msg: action.payload,
                isLogin: false
            }

        case 'SINGLE_PRODUCT':
            return {
                ...state,
                product: action.payload

            }

        case 'DELETE_PRODUCT':

            let Allproduct = state.product
            let singleProduct = Allproduct.filter((val) => {
                return val.id != action.payload
            })
            return {

                ...state,
                product: singleProduct
            }

        case 'ALL_PRODUCT':
            return {
                ...state,
                products: action.payload
            }

        case 'ADD_CART':

            const SingleCart = state.product.findIndex(item => item.id == action.payload.id);

            if (SingleCart >= 0) {
                return (
                    state.products[SingleCart].data
                )
            }
            else {
                return {
                    ...state,
                    product: [...state.product, action.payload.data]
                }
            }




        default:
            return state;

    }

}

export default productReducer