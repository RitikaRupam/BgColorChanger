import { useState } from "react"
import "./index.css"
function App() {
  
  const [color, setColor] =useState('olive')

  return (
    
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}> 
    <div className="flex gap-2 fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-4 rounded shadow-lg bottom-20" style={{backgroundColor:'white'}}>
    <button onClick={()=>setColor("red")} className="border-none bg-red-500 rounded-3xl px-4 py-1 hover:bg-red-700">Red</button>
    <button onClick={()=>setColor("green")} className="border-none bg-green-500 rounded-3xl px-4 py-1 hover:bg-green-700">Green</button>
    <button onClick={()=>setColor("yellow")} className="border-none bg-yellow-500 rounded-3xl px-4 py-1 hover:bg-yellow-700">Yellow</button>
    <button onClick={()=>setColor("blue")} className="border-none bg-blue-500 rounded-3xl px-4 py-1 hover:bg-blue-700">Blue</button>
    <button onClick={()=>setColor("pink")} className="border-none bg-pink-500 rounded-3xl px-4 py-1 hover:bg-pink-700">Pink</button>
    <button onClick={()=>setColor("purple")} className="border-none bg-purple-500 rounded-3xl px-4 py-1 hover:bg-purple-700">Purple</button>
    <button onClick={()=>setColor("violet")} className="border-none bg-violet-500 rounded-3xl px-4 py-1 hover:bg-violet-700">Violet</button>
    </div>
    
    </div>

  )
}

export default App
