export const product = "product"
const produtAction = (products)=>{
return {
    type: product,
    payload: products
}
}

export default produtAction;