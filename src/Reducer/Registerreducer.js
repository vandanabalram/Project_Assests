const initialState={
    Firstname:'',
    Lastname:'',
    email:'',
    password:'',
    Confirmpassword:'',
    Mobnum:''
    }
    
    export default(state = initialState,action)=>{
    debugger
    switch(action.type){
    
    case "REGISTER":{
    return{...state,Firstname:action.payload.Firstname,
    Lastname:action.payload.Lastname,
    email:action.payload.email,
    password:action.payload.password,
    Confirmpassword:action.payload.Confirmpassword,
    Mobnum:action.payload.Mobnum
    }
    }
    default:
    return state;
    }
    
    }