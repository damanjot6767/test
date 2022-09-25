 
 export const  ProductRequest=(value)=>{
    
    return {type:"GET_PRODUCTS_REQUEST",
            isLoading:value
            }
 }

 export const  ProductSuccess=(value,data,totalPages)=>{
    
    return {type:"GET_PRODUCTS_SUCCESS",
            isLoading:value,
            data:data,
            totalPages:totalPages
            }
 }
 export const  ProductFailure=(value)=>{
    
    return {type:"GET_PRODUCTS_FAILURE",
            isLoading:value
            }
 }

