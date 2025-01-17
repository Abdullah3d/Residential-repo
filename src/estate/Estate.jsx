
import { useEffect, useState } from "react";
import ShowEstate from "./ShowEstate";
import 'animate.css';



const Estate = () => {
    const [estates, setEstates] = useState([]);
    useEffect(()=>{
        fetch('/estates.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])
    return (
        <div className="animate__animated animate__fadeIn"> 
            <div className="text-5xl font-bold text-center mb-5">
               <h2 className="animate__animated animate__bounce">All Estate Are here</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-7 ">
                {
                    estates.map(estate => (
                        <div key={estate.id} className="animate__animated animate__fadeIn">
                            <ShowEstate estates={estate}></ShowEstate>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Estate;
