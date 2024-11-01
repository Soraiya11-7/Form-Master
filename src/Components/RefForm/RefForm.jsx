import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
    // uncontrolled element: useRef to create a ref to the element and access value by using like: nameRef.current.value
    const nameRef = useRef(null);
    
    useEffect(() =>{
        nameRef.current.focus();
    },[])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
          
      }
      return (
          <div>
              <form onSubmit={handleSubmit}>
                  <input ref={nameRef} type="text" name="name" id="" /> <br />
                  <input type="email" name="email" id="" /> <br />
                  <input type="submit" value="Submit" />
                  {/* <button>Submit</button> */}
              </form>
              
          </div>
      );
};

export default RefForm;