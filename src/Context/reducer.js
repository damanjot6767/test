function reducer(state,action){
switch(action.type){
    case "GET_PRODUCTS_REQUEST" :
    return {...state,isLoading:action.isLoading}
    case "GET_PRODUCTS_SUCCESS" :
    return {...state,data:action.data,isLoading:action.isLoading,totalPages:action.totalPages}
    case  "GET_PRODUCTS_FAILURE" :
    return {...state,isLoading:action.isLoading}
    case "LOGIN_SUCCESS" :
    return {...state,token:action.token,isAuth:action.isAuth,isLoading:action.isLoading}

    case "LOGIN_REQUEST":
    return {...state,isLoading:action.isLoading}
  
    case "LOGIN_FAILURE":
    return {...state,isLoading:action.isLoading,isAuth:action.isAuth}

    default :
    return state;
}
}
export default reducer