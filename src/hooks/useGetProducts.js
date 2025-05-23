import { useEffect } from "react";
import { PRODUCTS_API } from "../helpers/constants";
import { useDispatch } from "react-redux";
import { addProducts } from "../slices/productSlice";
function useGetProducts(){
    let dispatch=useDispatch();
    useEffect(()=>{
           fetchProducts();
    },[])
    async function fetchProducts(){
        let data=await fetch(PRODUCTS_API)
        let json=await data.json();
        console.log(json)
        dispatch(addProducts(json))
    }
}
export default useGetProducts;