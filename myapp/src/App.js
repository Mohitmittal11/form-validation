import React, { createContext,useState } from "react";
import Navigation from "./Navigation/Navigation";


export const CreateContext=createContext(null);
const App=() => {
  const [name, setName] = useState("");
  return (

    <div className="App">
    <CreateContext.Provider value={{  
      name,
      setName
    }}>
    <div>
    <Navigation/>
   </div>

    </CreateContext.Provider>



    </div>
    
  );
}

export default App;

