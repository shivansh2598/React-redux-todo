import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import img from './logo.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className = "App-logo" src = {img}/>
          <h1>Enter your Todos here !!</h1>
          <input
            style = {{height : '50px', width : '500px', fontSize : 'larger', borderRadius : '10%'}}
            type="text"
            onChange={(event) => {
              this.props.OnTodoChange(event);
            }}
            value={this.props.todo}
          />
          <button className="button" onClick={this.props.OnTodoAdd}>
            Add
          </button>
          <ul>
            {this.props.todoLst.map((elem) => {
              return (
                  <li onClick = {()=>{this.props.OnTodoDelete(elem.id)}} key={elem.id}>{elem.text}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
    todoLst: state.todoLst,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnTodoChange: (event) =>
      dispatch({ type: "CHANGE", value: event.target.value }),
    OnTodoAdd: () => dispatch({ type: "ADD" }),
    OnTodoDelete: (id) => dispatch({ type: "DELETE", value: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
