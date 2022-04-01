import {useState} from 'react';

const initialState = {
    cart:[]
}

const useInitialState = () => {
    const [State, setState] = useState(initialState)

    const addToCart = (product) => {
        const cart = [...State.cart, product]
        setState({
            ...State,
            cart
        })
    }
    const removeItem = (product) => {
        
        setState({
            ...State,
            //devuelve todos los items que sean diferentes al id
            cart:State.cart.filter(item => item.id !== product.id)
        })
    }


    return {State, addToCart, removeItem}
    
}

export default useInitialState;