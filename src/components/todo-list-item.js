import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
     super(props);
     this.markCompleted = this.markCompleted.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
   }
   markCompleted(event) {
     this.props.onItemCompleted(this.props.id);
   }
   deleteItem(event) {
     this.props.onDeleteItem(this.props.id);
   }
   // Highlight newly added item for several seconds.
   componentDidMount() {
     if (this._listItem) {
       // 1. Add highlight class.
       this._listItem.classList.add("highlight");

       // 2. Set timeout.
       setTimeout((listItem) => {
         // 3. Remove highlight class.
         listItem.classList.remove("highlight");
       }, 500, this._listItem);
     }
   }

  render() {
    return (
      <li
        onClick={this.markCompleted}
        className={"todo" + (this.props.completed === "done" ? " todo-completed" : "")}
        ref={li => this._listItem = li }
      >
        <i
          className={"fa " + (this.props.completed === "done" ? 'fa-dot-circle-o' : 'fa-circle-o')}>
         {this.props.text}
        </i>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={this.deleteItem}>X
        </button>
      </li>
    );
  }

}

export default TodoListItem;
