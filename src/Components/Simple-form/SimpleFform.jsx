
const SimpleForm = () => {

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target.name.value);
      console.log(e.target.email.value);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" /> <br />
                <input type="email" name="email" id="" /> <br />
                <input type="submit" value="Submit" />
                {/* <button>Submit</button> */}
            </form>
            
        </div>
    );
};

export default SimpleForm;
