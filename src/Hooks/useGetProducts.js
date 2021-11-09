import {useEffect,useState} from 'react';

const useGetProducts= (API)=>{
    const [products,setProducts]=useState([]);
    useEffect(async ()=>{
      await fetch(`${API}/api/v1/products`)
            .then(response=>response.json())
            .then(data=>setProducts(data))
    },[]);

    return products;
}

export default useGetProducts;