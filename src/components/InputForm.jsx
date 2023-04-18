import { useState } from "react";
import { motion } from "framer-motion"
const InputForm = (props) => {

    const [names, setName] = useState("");
    const [lastName, setLastname] = useState("");
    const [position, setPosition] = useState("")


    const handleName = (event) => {
        console.log(event.target.value)
        setName(event.target.value);
    }

    const handleLast = (event) => {
        console.log(event.target.value)
        setLastname(event.target.value);
    }

    const handlePosition = (event) => {
        console.log(event.target.value)
        setPosition(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const newEmployee = {
            id: props.data.length === 0 ? 1 : props.data[props.data.length - 1].id + 1,
            name: names,
            lastname: lastName,
            position: position,
        }
        props.addEmployee(newEmployee);
        setName("")
        setLastname("")
        setPosition("")
    }

    

    

    return(
        <div className="form-container">
            <form 
            onSubmit={handleSubmit}
            >
                <div className="container">
                    <h3>Create User Here</h3>
                </div>
                <div className="input-group">
                    <input placeholder="Name" value={names} onChange={handleName}/>
                    <input placeholder="Last Name"  value={lastName} onChange={handleLast}/>
                    <input placeholder="Position" value={position} onChange={handlePosition}/>
                    <button type="submit">Save</button>
                </div>
                

        </form>
        </div>
        
            
        
    );
}

export default InputForm;