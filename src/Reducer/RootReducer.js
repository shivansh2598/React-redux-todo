
const initialState = {
    todo : '',
    todoLst : [],
    counter : 0,
    counterLst : []
}

const RootReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'CHANGE' : {
            return {
                ...state,
                todo : action.value
            }
        }
        case 'ADD' : {
            return {
                ...state,
                todo : '',
                todoLst : state.todoLst.concat({id : new Date(), text : state.todo}),
            }
        }
        case 'DELETE' : {
            return {
                ...state,
                todoLst : state.todoLst.filter((elem) => elem.id !== action.value)
            }
        }
        case 'INCREMENT' : {
            return {
                ...state,
                counter : state.counter + 1
               
            }
        }
        case 'DECREMENT' : {
            return {
                ...state,
                counter : state.counter - 1
            }
        }
        case 'ADD-COUNTER' : {
            return {
                ...state,
                counterLst : state.counterLst.concat({key : new Date(), value : state.counter})
            }
        }
        case 'DELETE-COUNTER' : {
            return {
                ...state,
                counterLst : state.counterLst.filter((elem) => elem.key !== action.value)
            }
        }
        
        default : return state
    }
}

export default RootReducer