import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return( 
    <div className="App">
      <input
        type = "text"
        onChange = {(event)=>{this.props.OnTodoChange(event)}}
        value = {this.props.todo}   
      />
      <button className = "Button" onClick = {this.props.OnTodoAdd}> Add </button>
      <hr/>
      <ul>
       {this.props.todoLst.map((elem)=>{
         return(
           <>
           <li style = {{display : 'inline-block'}} key = {elem.id}> {elem.text + "  "} </li>
           <button className = "Button" onClick = {()=>{this.props.OnTodoDelete(elem.id)}}>Delete</button>
          </>
         )
       })}
       </ul>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo : state.todo,
    todoLst : state.todoLst
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    OnTodoChange : (event)=>dispatch({type : 'CHANGE', value : event.target.value}),
    OnTodoAdd : ()=>dispatch({type : 'ADD'}),
    OnTodoDelete : (id) => dispatch({type : 'DELETE', value : id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
