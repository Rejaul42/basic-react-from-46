import { useState } from "react";

const StateFullForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [validPass, setValidPass] = useState('')
    const handelForm = e => {
        e.preventDefault();
        if(password.length < 6){
            setValidPass('Password must be 6 character or longer')
        }
        else{
            setValidPass('');
            console.log(name, email, password)
        }
        
    };
    const handelName = e => {
        setName(e.target.value)
    };
    const handelEmail = e =>{
        setEmail(e.target.value);
    };
    const handelPassword = e =>{
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handelForm}>
                <input onChange={handelName}
                type="text" name="text" required/>
                <br />
                <input onChange={handelEmail}
                type="email" name="email" required/>
                <br />
                <input onChange={handelPassword}
                type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    validPass && <p>{validPass}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;