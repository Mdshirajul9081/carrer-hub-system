import { useEffect, useState } from "react";
import Catagori from "../Catagori/Catagori";


const JobCatagoris = () => {
    const[catagoris,setCatagories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCatagories(data))
    },[])
    return (
        <div className=" text-center">
            <h2 className="text-5xl ">Job Category List:{catagoris.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex max-w-6xl mx-auto gap-5 text-center">
                {
                    catagoris.map(catagori=><Catagori catagori={catagori} key={catagori.id}></Catagori>)
                }
            </div>

        </div>
        
    );
};

export default JobCatagoris;