/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
const Recipies = ({addRecipieToCook}) => {

    const [recipies,setRecipies] = useState([]);
    

    useEffect(()=>{
        fetch('recipies.json')
        .then(res => res.json())
        .then(data => setRecipies(data))
    },[])

    return (
        
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
           {
            recipies.map(recipie => (
                <div className=" shadow-xl border-2 rounded-xl p-2" key={recipie.id}>
                    <div>
                        <img
                        src={recipie.img}/>
                    </div>
                    <div className="py-2">
                        <h3 className="text-2xl font-bold">{recipie.name}</h3>
                        <p className="text-gray-600">{recipie.desc}</p>
                    </div>
                    <hr />
                    <div className="py-2 ">
                        <h4  className="text-xl font-medium">Ingredients: {recipie.ingd.length}</h4>
                        <ul className="ml-8">
                            {
                                recipie.ingd.map((item,idx)=><li className="list-disc text-gray-600" key={idx}>{item}</li>
                            )}
                        </ul>
                    </div>
                    <hr />
                    <div className="py-2 flex gap-2">
                        <p className="flex gap-2 items-center"><IoTimerOutline /> {recipie.time} minutes</p>
                        <p className="flex gap-2 items-center"><FaFire /> {recipie.cal} Calories</p>
                    </div>
                    <div className="text-center justify-center py-2">
                        <button className="btn btn-primary border-none bg-[#0BE58A] text-black" 
                        onClick={()=>addRecipieToCook(recipie)
                        }
                        >Want To Cook</button>
                    </div>
                </div>
            ))
           }
        </div>
    );
};

export default Recipies;