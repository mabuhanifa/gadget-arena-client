import { useEffect, useState } from "react";

const useItems = () =>{
    
    const [Items, setItems] = useState([]);

    useEffect( () =>{
        fetch('https://protected-sands-09387.herokuapp.com/user')
        .then(res => res.json())
        .then(data => setItems(data));
    },[])

    return [Items, setItems];
}

export default useItems;