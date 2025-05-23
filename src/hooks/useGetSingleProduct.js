import { PRODUCTS_API } from "../helpers/constants";
import { useEffect } from "react";
function useGetSingleProduct(id){
    console.log(id)
      useEffect(()=>{
                 fetchProducts();
          },[])
          async function fetchProducts(){
              let data=await fetch(`${PRODUCTS_API}+/+${id}`)
              let json=await data.json();
              console.log(json,'json')
              return json;
          }
}
export default useGetSingleProduct;