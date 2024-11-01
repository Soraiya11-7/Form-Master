
const ReusableForm = ({formTitle, submitBtnText='Submit', handleSubmit, children}) => {

    const handleLocalSubmit  = e => {
        e.preventDefault();  
        const data ={
            name: e.target.name.value,
            email: e.target.name.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            <h2>{children}</h2>
             <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" id="" /> <br />
                <input  type="email" name="email" id="" /> <br />
                <input type="submit" value={submitBtnText} />
                {/* <button>Submit</button> */}
            </form>
        </div>
    );
};

export default ReusableForm;