import {useEffect,useState} from 'react';

const useInitialState= (API)=>{
    const [items,setItems]=useState([]);
    useEffect(async ()=>{
      await fetch(`${API}/api/v1/products`)
            .then(response=>response.json())
            .then(data=>setItems(data))
    },[]);

    return items;
}

export default useInitialState;