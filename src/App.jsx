import { useState } from "react"
import Header from "./Components/Header/Header"
import Recipies from "./Components/Recipies/Recipies"
import Sidebar from "./Components/Sidebar/Sidebar"

function App() {
    const [recipieCook,setRecipieCook] = useState([]);
    const [cooked,setCooked] = useState([]);
    const [totalTime,setTotalTime] = useState(0);
    const [totalCal,setTotalCal] = useState(0);

    const addRecipieToCook = (recipie) =>{
      const isExist = recipieCook.find(prevRecipie => prevRecipie.id === recipie.id)
      if(!isExist){
        setRecipieCook([...recipieCook,recipie])
      }else{
        alert('Already added')
      }
    }

    const handleRemove = id => {
      // find which rcp to dlt
      const removeRecipie = recipieCook.find(recipie => recipie.id === id)
      
      // rmv to want to cook table

      const updatedTable = recipieCook.filter(recipie => recipie.id !== id)
      setRecipieCook(updatedTable)
      setCooked([...cooked,removeRecipie])
    }

    const calculateTotal = (time,cal) =>{
        setTotalTime(totalTime + time)
        setTotalCal(totalCal + cal);
    }
    
  return (
    <>
      <Header/>
      {/* main */}
      <main className="flex md:flex-row flex-col gap-4 mx-auto w-4/5 ">
        {/* cards */}
        <div className="md:w-2/3 w-full ">
            <Recipies addRecipieToCook={addRecipieToCook}/>
        </div>
        {/* sidebar */}
        <div className="md:w-1/3 rounded-xl w-full border-2">
            <Sidebar recipieCook={recipieCook}
            handleRemove={handleRemove}
            cooked={cooked}
            calculateTotal={calculateTotal}
            totalTime={totalTime}
            totalCal={totalCal}/>
        </div>
      </main>
    </>
  )
}

export default App
