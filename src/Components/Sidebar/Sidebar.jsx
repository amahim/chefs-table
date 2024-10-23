/* eslint-disable react/prop-types */
import { GiCampCookingPot } from "react-icons/gi";
const Sidebar = ({recipieCook,handleRemove,cooked,calculateTotal,totalTime,totalCal}) => {
    return (
        <div className="space-y-4 p-2">
            {/* Want to cook */}
            <div>
                <h1 className="text-xl text-center mb-2">Want to cook : {recipieCook.length} </h1>
                <hr />
                        <div className="overflow-x-auto" >
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>
                                    {/* <th></th> */}
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Cals</th>
                                    <th>Cooking</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row */}
                                {
                                    
                                    recipieCook.map((recipie)=>(
                                        <tr className="hover" key={recipie.id}>
                                            {/* <th>{index + 1}</th> */}
                                            <th>{recipie.name}</th>
                                            <th>{recipie.time}</th>
                                            <th>{recipie.cal}</th>
                                            <th><button className="btn btn-primary border-none bg-[#0BE58A] text-white" onClick={()=> {
                                                handleRemove(recipie.id)
                                                calculateTotal(recipie.time,recipie.cal)
                                            }}><GiCampCookingPot className="text-2xl" />
                                                </button></th>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
            </div>
            {/* Currently cooking */}
            <div>
                <h1 className="text-xl text-center mb-2" >Currently Cooking : {cooked.length}</h1>
                <hr />
                    
                <div className="overflow-x-auto" >
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>
                                    {/* <th></th> */}
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Cals</th>
                            
                                </tr>
                                </thead>
                                <tbody>
                                {/* row */}
                                {
                                    
                                    cooked.map((recipie)=>(
                                        <tr className="hover" key={recipie.id}>
                                            <th>{recipie.name}</th>
                                            <th>{recipie.time}</th>
                                            <th>{recipie.cal}</th>
                                        </tr>
                                    ))
                                }
                                </tbody>
                                <tfoot >
                                    <tr>
                                        <th></th>
                                        <th>Total time :  <br /> {totalTime} mnts</th>
                                        <th>Total Cals : <br /> {totalCal} Cals</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

            </div>
        </div>
    );
};

export default Sidebar;