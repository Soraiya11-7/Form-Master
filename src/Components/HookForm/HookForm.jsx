import useInState from "../../Hooks/useInState";

const HookForm = () => {
    // use hook to handle states ans submit and error. ex: react hook form
//   const [name, handleNameChange] = useInState('abcde');
const emailSate = useInState('a@gmail.com')
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        console.log(emailSate.value);
          
      }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /> <br /> */}
                <input {...emailSate} type="email" name="email" id="" /> <br />
                <input type="submit" value="Submit" />
                {/* <button>Submit</button> */}
            </form>
        </div>
    );
};

export default HookForm;