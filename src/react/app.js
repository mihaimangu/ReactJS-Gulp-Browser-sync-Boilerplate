import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
 
import reducers from './reducers';
import {createStore, applyMiddleware, combineReducers} from 'redux';


var maresteCifra = () => {
    return function(dispatch){
        dispatch({
            type: 'INCREMENT',
            payload: '1',
        });
    }
};

var counter = (state = {cifra: 0}, action) => {
    const INCREMENT = 'INCREMENT';
    
    console.log('state inainte de swithc este ', state);
    switch(action.type){
        case INCREMENT:
            return action.payload;
    }
    console.log('state dupa increment este ', state);
    return state + 1;
    
};

var combinedReducers = combineReducers({
    counter
});

const customMiddleWare = store => next => action => {
    console.log('Middleware triggered:', action);
    next(action);
};

const store = createStore(combinedReducers, applyMiddleware(customMiddleWare));




class Wrapper extends Component {
    constructor(props){
        super(props);
        
        var valoare = this.props.value;
        console.log('valoare este ', valoare);
    }
    

    render(){
        return (
            <div>
                <p>Salut</p>
                <p 
                onClick={() => {
                        store.dispatch({type:'INCREMENT', payload: '1'});
                    }}>Mareste</p>
               
            </div>
        );
        
    }
}


ReactDom.render(
    <Wrapper store = {store} value = {store.getState()}>
        <p>Salut React!</p>
    </Wrapper>,
    document.getElementById('react-main')

);