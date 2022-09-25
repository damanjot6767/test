import { useReducer,createContext } from "react";
import { useSearchParams } from "react-router-dom";
import reducer from "./reducer";
export const ContextAPI=createContext()
function Context({children}){
    const[search,setSearch]=useSearchParams();
    const val=search.get("token");
    const val1=search.get("isAuth")
    const[state,dispatch]=useReducer(reducer,{isAuth:val1 ||false,token:val||null,isError:false,isLoading:false,data:[],totalPages:1});
    const{isAuth,token}=state
    if(!isAuth && token!=null){
        setSearch({token,isAuth})
     }
    return (<ContextAPI.Provider value={{state,dispatch}}>{children}</ContextAPI.Provider>)
}
export default Context
