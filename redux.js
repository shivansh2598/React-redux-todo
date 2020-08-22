const redux = require('redux')
const createStore = redux.createStore;
const initialState = {
    counter : 0
}

//reducer
const reducer = (state = initialState, action)=>{
    if(action.type === 'INCREMENT')
    {
        return {
            counter : state.counter + action.value
        }
    }
    return state;
}

//store
const store = createStore(reducer);

console.log(store.getState())

//subscription
store.subscribe(()=>{
    console.log('value = ', store.getState())
})


//dispatcher/action
store.dispatch({type: 'INCREMENT', value: 1})
store.dispatch({type: 'INCREMENT', value: 10})

