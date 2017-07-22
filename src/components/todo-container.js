import React from 'react';
import TodoList from './todo-list';

class TodoContainer extends React.Component {


  render() {
    return (
      <div>
        <h3 className="apptitle">MY TO DO LIST</h3>
        <div className="row">
          <div className="col-md-3">
            <TodoList
              items={this.props.items}
              onItemCompleted={this.props.markItemCompleted} onDeleteItem={this.props.handleDeleteItem}
            />
          </div>
        </div>
        <form className="row">
          <div className="col-md-3">
            <input type="text"
              className="form-control"
              onChange={this.handleTextChange}
              value={this.props.text} />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-primary"
              onClick={this.handleAddItem}
              disabled={!this.props.text}>{"Add #" + (this.props.items.length + 1)}
            </button>
          </div>
        </form>
      </div>
    )
  }

}

export default TodoContainer;
