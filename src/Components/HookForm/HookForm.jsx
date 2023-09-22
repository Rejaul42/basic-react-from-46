import UseInputHook from "../../Hooks/UseInputHook";

const HookForm = () => {
    const {name, handelChange} = UseInputHook('ami.tumi');

    const handelForm = e =>{
        e.preventDefault()
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={handelForm}>
                <input value={name} onChange={handelChange}
                 type="text" name="text" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;