import { combineReducers, createStore } from "redux";

const userReducer = (state = {}, action) =>{
    switch(action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload}
            break;
        }
        case "CHANGE_AGE": {
            state.age = {...state, age: action.payload}
            break;
        }
    }
    
    return state;   
} 


const tweetsReducer = (state = [], action) => {  
    return state;
};

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer,
});

const reducer = function(state, action) {
    if (action.type === "INC"){
        return state+ action.payload;
    }
    if (action.type === "DEC"){
        return state - action.payload;
    }
    return state;
    
}

const store = createStore(reducers, {
    user: {
       
    },
    tweets: [
        
    ]
});

store.subscribe(() => {
    console.log("store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "Will"}); 
store.dispatch({type: "CHANGE_AGE", payload: "35"}); 
store.dispatch({type: "INC", payload: 2}); 
store.dispatch({type: "DEC", payload: 3}); 
store.dispatch({type: "INC", payload: 2}); 
