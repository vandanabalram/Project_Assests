const initialState={
    
    Asset_Number :'',
    MAC_Address:'',
    Comment :''
    }
    
    export default(state = initialState,action)=>{
    debugger
    switch(action.type){
    
    case "REGISTER":{
    return{...state,
   
    Asset_Number :action.payload.Asset_Number ,
    MAC_Address :action.payload.MAC_Address ,
    Comment:action.payload.Comment   
    }
    }
    default:
    return state;
    }  
    }

    
