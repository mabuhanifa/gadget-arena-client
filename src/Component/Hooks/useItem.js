import { useEffect, useState } from "react";

const useItems = () =>{
    
    const [Items, setItems] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setItems(data));
    },[])

    return [Items, setItems];
}

export default useItems;