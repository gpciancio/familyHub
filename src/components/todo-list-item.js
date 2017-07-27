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


  render() {
    return (
      <div>
        <i
          className={"fa " + (this.props.completed ? 'fa-dot-circle-o' : 'fa-circle-o')}
          onClick={this.markCompleted}
          >
        </i>{' '}
        <span className={this.props.completed ? 'line':''}>
          {this.props.text}
        </span>
        <i
          className="fa fa-times pull-right"
          onClick={this.deleteItem}>
        </i>
      </div>
    );
  }

}

export default TodoListItem;
