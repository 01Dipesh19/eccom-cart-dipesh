import { ADD_TO_CART } from "./constant"

export const addToCart = (data) => {
    console.warn("action is called add data", data)
    return {
        type: ADD_TO_CART,
        data
    }
}
