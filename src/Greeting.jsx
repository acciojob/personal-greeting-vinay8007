import { useState } from "react";
function Greeting(){
    const [name, setName] = useState("");
    return(
        <div>
            <label>Enter your name: </label>
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
