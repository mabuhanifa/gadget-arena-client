import { useEffect, useState } from "react";

const useItems = () =>{
    
    const [Items, setItems] = useState([]);

    useEffect( () =>{
        fetch('https://gadget-arena-server-production.up.railway.app')
        .then(res => res.json())
        .then(data => setItems(data));
    },[])

    return [Items, setItems];
}

export default useItems;