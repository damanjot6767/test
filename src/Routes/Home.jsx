import {useState,useEffect,useContext} from "react";
import {ContextAPI} from "../Context/AppContext";
import axios from "axios"
import{Navigate} from "react-router-dom";
function Home(){
const{state,dispatch} = useContext(ContextAPI);
const{token,isAuth,isLoading}=state
const[details,setDetails]=useState({email:"",password:""});

const login=(data={})=>{
    dispatch({type:"LOGIN_REQUEST",isLoading:true})
    axios.post(`https://reqres.in/api/login`,{
         email:data.email,
         password:data.password
    })
    .then((res)=>dispatch({type:"LOGIN_SUCCESS",token:res.data.token,isAuth:true,isLoading:false}))
    .catch((err)=>dispatch({type:"LOGIN_FAILURE",isAuth:false,isLoading:false}))
}

const handle=(e)=>{
 const{value,name}=e.target;
 setDetails({...details,[name]:value})
}
const submit=(el)=>{
    el.preventDefault();
    login(details)
}
console.log(token)
if(isLoading){
    return <h1>loading....</h1>
}
if(isAuth  && token!=null){
return <Navigate to ="/dashboard"/>
}
return (
    <div>
        <input type="email" name="email" placeholder="email" value={details.email} onChange={handle}/>
        <input type="password" name="password" placeholder="password" value={details.password} onChange={handle}/>
        <button onClick={submit}>Submit</button>
    </div>
)
}
export default Home