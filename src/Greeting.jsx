import { useState } from "react";
function Greeting(){
    const [name, setName] = useState("");
    return(
        <div>
            <h2>Enter your name: </h2>
            <br/>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {name && <h2>Hello, {name}!</h2>}
        </div>
    );
}
export default Greeting;
