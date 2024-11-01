import { useState } from "react";

const StatefulForm = () => {
    //controlled element: use individual field state for each in.. field
    const [name, setName] = useState('abcde');
    const [email, setEmail] = useState(null);
    const [key, setKey] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(error.length < 6){
            setError('Keys must be 6 characters or longer');
        }
        else{
            setError('');
        }
        console.log(name);
        console.log(email);
        console.log(key);

    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handleKeyChange = e =>{
        setKey(e.target.value);
    }
    const handleNameChange = e =>{
        setName(e.target.value);
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input
                   onChange={handleNameChange} 
                   value={name}
                 type="text" name="name" id="" /> <br />
                <input
                onChange={handleEmailChange}
                 type="email" name="email" id="" /> <br />
                 <input
                   onChange={handleKeyChange}
                 type="text" name="password" id="" required/> <br />
                <input type="submit" value="Submit" />
                {/* <button>Submit</button> */}
                
            </form>
            {
                    error && <h2>{error}</h2>
                }
            
        </div>
    );
};

export default StatefulForm;