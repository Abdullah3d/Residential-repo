import { useEffect, useState } from "react";
import ShowEstate from "./ShowEstate";

const Estate = () => {
    const [estates, setEstates] = useState([]);
    useEffect(()=>{
        fetch('estates.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])
    return (
        <div>
           <div className="text-5xl font-bold text-center mb-5">
           <h2>All Estate Are here</h2>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-7">
            {
                estates.map(estate => <ShowEstate key={estate.id}estates ={estate}></ShowEstate>)
            }
            </div>
        </div>
    );
};

export default Estate;