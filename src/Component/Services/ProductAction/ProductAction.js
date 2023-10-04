import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../MyFireStore/MyFireStore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const addCart = (id, data) => {

    return {
        type: 'ADD_CART',
        payload: { id, data }
    }
}


export const productLive = (data) => {

    // console.log(data,'hhj');
    return {
        type: 'ADD_PRODUCT',
        payload: data
    }

}
export const getdata = (data) => {

    return {
        type: 'ALL_PRODUCT',
        payload: data
    }

}

export const singleProduct = (data) => {
    return {
        type: 'SINGLE_PRODUCT',
        payload: data
    }
}

export const DeleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: id
    }
}

export const SignupSuc = () => {
    return {
        type: 'SIGNUP_SUC'
    }
}

export const SignupErr = (msg) => {
    return {
        type: 'SIGNUP_ERR',
        payload: msg
    }
}

export const SigninSuc = () => {
    return {
        type: 'SIGNIN_SUC'
    }
}

export const SigninErr = (msg) => {
    return {
        type: 'SIGNIN_ERR',
        payload: msg
    }
}

export const SignOutSuc = () => {
    return {
        type: 'SIGNOUT_SUC',
    }
}

export const productLiveacync = (data) => {

    return async dispatch => {
        await addDoc(collection(db, "products"), data);

        // // console.log(data);
        dispatch(productLive(data));
    }

}

export const getProductacync = () => {

    return async dispatch => {

        let Allproduct = [];

        let firestoreproduct = await getDocs(collection(db, "products"));
        firestoreproduct.forEach((doc) => {
            let d = { ...doc.data(), id: doc.id };
            Allproduct = [...Allproduct, d];

        });

        dispatch(getdata(Allproduct));

    }

}

export const SignUpasync = (data) => {

    return async dispatch => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                dispatch(SignupSuc())
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                dispatch(SignupErr(errorCode))
                // ..
            });
    }

}

export const SignInasync = (data) => {

    return async dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch(SigninSuc());
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(SigninErr(errorCode));
            });
    }

}

export const LogoutAsync = () => {

    return async dispatch => {
        signOut(auth).then(() => {
            dispatch(SignOutSuc());
        }).catch((error) =>{

        })
    }

}




