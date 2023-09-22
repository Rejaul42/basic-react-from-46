import { useState } from "react"

const UseInputHook = (defaultValue = null) => {
    const [name, setName] = useState(defaultValue);

    const handelChange = e =>{
        setName(e.target.value)
    }
    return {
        name,
        handelChange,
    }
}
export default UseInputHook;