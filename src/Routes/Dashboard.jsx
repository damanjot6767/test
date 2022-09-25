import {useState,useEffect,useContext} from "react";
import { Navigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import {ContextAPI} from "../Context/AppContext";
import axios from "axios"
import {ProductRequest,ProductSuccess,ProductFailure} from "../Context/actionCreators"

const convert=(val,val1)=>{
val=Number(val);
if(!val || val<1 || val>val1 ){
    val =1
}
return val;
}

function Products(){
 const[search,setSearch]=useSearchParams()
 const{state,dispatch}=useContext(ContextAPI);
 const{data,totalPages,isLoading,token,isAuth}=state;
 const[log,setLog]=useState(isAuth)
 const page1=convert(search.get("page"),totalPages)
 console.log(page1)
 const[page,setPage]=useState(1)
 console.log()
 const fetch=(params={})=>{
     dispatch(ProductRequest(true))
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${params.page}&limit=5`)
    .then((res)=>dispatch(ProductSuccess(false,res.data.data,res.data.totalPages)))
    .catch((err)=>dispatch(ProductFailure("404 ERROR")))
 }

 useEffect(()=>{
   fetch({page:page})
   setSearch({page})
 },[page])
 const logout=()=>{
    setLog(false);
 }
 if(!log){
    return <Navigate to = "/"/>
 }
 return (
    <div>
        <h3>{token}</h3>
        <div>
            {data.map(({name})=><h1>{name}</h1>)}
        </div>
        <div>
            <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>{page }<button disabled={page===totalPages} onClick={()=>setPage(page+1)}>NEXT</button>
        </div>
    </div>
 )

}

export default Products