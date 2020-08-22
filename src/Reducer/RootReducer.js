
const initialState = {
    todo : '',
    todoLst : []
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
        default : return state
    }
}

export default RootReducer