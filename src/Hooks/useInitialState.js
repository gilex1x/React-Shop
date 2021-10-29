import {useEffect,useState} from 'React';

const useInitialState=(API)=>{
    const [items,setItems]=useState({});
    useEffect(()=>{
        fetch(API)
            .then(response=>response.json())
            .then(data=>setItems(data))
    },[]);

    return items;
}

export default useInitialState;