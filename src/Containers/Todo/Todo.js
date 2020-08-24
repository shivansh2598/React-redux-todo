import React, { Component } from "react";
import { connect } from "react-redux";
import './Todo.css'
import { Link } from 'react-router-dom';

class Todo extends Component {
  render() {
    return (
      <div className = "Todo">
        <h1>Enter your Todos here !!</h1>
        <input
          style={{
            height: "50px",
            width: "500px",
            fontSize: "larger",
            borderRadius: "10%",
          }}
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
              <li
                onClick={() => {
                  this.props.OnTodoDelete(elem.id);
                }}
                key={elem.id}
              >
                {elem.text}
              </li>
            );
          })}
        </ul>
        <button className="back-button"><Link style={{textDecoration : 'none'}} to = "/">Back</Link></button>
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

  export default connect(mapStateToProps, mapDispatchToProps)(Todo);