import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/signup.css';
 const  Signup = () => {


  const [data, setData] = useState({
    name: "",
    email: "",  
    password: "",  
    confirmpass: "",

  });

  const [nameerror,setnameError]=useState(false);

  const [passError,setpassError]=useState(false);
  const [passvalidation, setPassValidation]= useState("");
  const [showpassword,setshowPassword]=useState(false);

  const [emailError,setemailError]=useState(false);
  const[emailvalidation,setemailValidation]=useState("");
  
  const [cpasserror, setcpassError]=useState(false);
  const [cpassvalidation, setcpassValidation]=useState("");
  const [showconfirmpassword,setshowconfirmPassword]=useState(false);


 
  
  const handleName = (event) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value.trimStart()});
    if(event.target.value!=="")
    {
      setnameError(false);
    }
    
  }

  const handleEmail = (event) => {

    setData({ ...data, [event.target.name]: event.target.value });
    const emailvalue=event.target.value;
    const email_pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    if(event.target.value!=="")
    {
     setemailError(false);
    }
    if(!email_pattern.test(emailvalue))
    {
      setemailValidation("Please enter correct Email");
    }
    else {
      setemailValidation("");
    }

  }

  const handlePassword = (event) => {

    setData({...data, [event.target.name]: event.target.value});
    const passvalue=event.target.value;
    const password_pattern= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
    if(passvalue!=="")
    {
     setpassError(false);
    }
    if(!password_pattern.test(passvalue))
    {
      setPassValidation("Please enter correct password");
    }
    else 
    {
      setPassValidation("");
    }
  }
  const myFunction= (event)=> {
    event.preventDefault();
      setshowPassword(true);
     
      if(showpassword)
      {
        setshowPassword(false);
      }
  }
  const myFunction2=(event)=> {
    event.preventDefault();
    setshowconfirmPassword(true);
     
    if(showconfirmpassword)
    {
      setshowconfirmPassword(false);
    }
  }

  const handleConfirmPass = (event) => {
   
    setData({ ...data, [event.target.name]: event.target.value });
    if (event.target.value!=="")
    {
      setcpassError(false);
    }
     if (event.target.value!==data.password)
    {
      setcpassValidation("Password must be same");
    }
    else 
     {
      setcpassValidation("");
     }
     event.preventDefault();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    if(data.name==="")
    {
      setnameError(true);
    }
    if (data.email==="")
    {
      setemailError(true);
    }
    if(data.password==="")
    {
      setpassError(true);
    }
    if(data.confirmpass==="")
    {
      setcpassError(true);
    }
  }

  return (
    <div className='signUpMainContaier'>
      <div className='main-container'>
        <div className='left-container'>

          <div className='signin-card'>
            <form onSubmit={handleSubmit}>
              <input type='text' onChange={handleName} id='name' placeholder='Username' name='name' value={data.name} />
             
              {nameerror && <p style={{ color:'red', fontSize:'10px', textAlign:'left', marginTop:'0px'}}>Name is required</p>}

              <input type='text' onChange={handleEmail} id='mail' placeholder='Email' name='email' value={data.email} />
              {emailError && <p style={{color:'red', fontSize:'10px', textAlign:'left', marginTop:'0px'}}>Email is Required</p>}
              <p style={{color:'red', fontSize:'10px', textAlign:'left', marginTop:'0px'}}>{emailvalidation}</p>
              
              <div className='showinput'>
              <input type={(showpassword)?'text':'password'} onChange={handlePassword} id='pass' name='password' placeholder='password' value={data.password}/>
              <button className='showbutton' onClick={myFunction}>{(!showpassword)? 'Show': 'Hide'}</button>
              </div>


              {passError && <p style={{ color:'red', fontSize:'10px', textAlign:'left', marginTop:'0px'}}>Password is Required</p>}
              <p style={{color:'red', fontSize:'10px',textAlign:'left',marginTop:'0px'}}>{passvalidation}</p>

              <div className='showinput'>
              <input className='showinput' type={(showconfirmpassword)?'text':'password'} onChange={handleConfirmPass} id='confirmpass' name='confirmpass' placeholder='Confirm password' value={data.confirmpass}/>
              <button className='showbutton' onClick={myFunction2}>{(!(showconfirmpassword)?'Show':'Hide')}</button>
              </div>

              

               {cpasserror && <p style={{color:'red', fontSize:'10px', textAlign:'left',marginTop:'0px'}}>Password is Required</p>}
               <p style={{color:'red', fontSize:'10px', textAlign:'left',marginTop:'0px'}}>{cpassvalidation}</p>

              <input type='submit' value={'Sign Up'} id='btn' />
            </form>
            <p>Already have an account?<Link to={-1}><span>Sign in here</span></Link></p>
          </div>
        </div>
        <div className='right-container'>
          <h1>Join With Us</h1>
        </div>
      </div>
    </div>
  )
}

export default Signup;
