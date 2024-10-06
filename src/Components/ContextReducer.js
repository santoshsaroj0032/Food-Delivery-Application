// import React, { createContext, useContext, useReducer } from 'react'
// const CartStateContext = createContext();

// const CartDispatchContext = createContext();

// const reducer  = (state , action)=>{

// switch(action.type){
//     case "ADD":
//         return [...state,{}]
//         default:
//             console.log("Error in Reducer");
// }


// }
// export const CartProvider = ({children})=>{
   
//     const[state ,dispatch] = useReducer(reducer , []) 
   
   
//     return (
// <CartDispatchContext.Provider value={dispatch}>
//     <CartDispatchContext.Provider value={state}>
//         {children}
//     </CartDispatchContext.Provider>
// </CartDispatchContext.Provider>
//     ) 
// }


// export const useCart = ()=> useContext(CartStateContext);
// export const useDispatchCart = ()=> useContext(CartDispatchContext);



import React, { createContext, useContext, useReducer } from 'react';

// Create the contexts
const CartContext = createContext();
const CartDispatchContext = createContext();

// Custom hooks to use the Cart state and dispatch
export const useCart = () => useContext(CartContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

// Reducer to manage the cart actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: action.id,
                name: action.name,
                price: action.price,
                qty: action.qty,
                size: action.size
            }];
        default:
            return state;
    }
};

// Initial state of the cart (can be an empty array)
const initialState = [];

// Context provider to wrap the components
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
};
