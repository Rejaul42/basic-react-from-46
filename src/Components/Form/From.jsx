
const From = () => {
    const handelForm = e =>{
        e.preventDefault()
        console.log(e.target.text.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('submit')
    }
    return (
        <div>
            <form onSubmit={handelForm}>
                <input type="text" name="text" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default From;