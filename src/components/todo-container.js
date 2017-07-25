import React from 'react';
import TodoList from './todo-list';

class TodoContainer extends React.Component {
  constructor(props) {
     super(props);

     this.state = {
       items: [],
       text: ""
     };

     this.handleTextChange = this.handleTextChange.bind(this);
     this.handleAddItem = this.handleAddItem.bind(this);
     this.markItemCompleted = this.markItemCompleted.bind(this);
     this.handleDeleteItem = this.handleDeleteItem.bind(this);
   }

   componentDidUpdate(){
     this.saveState();
   }

   componentDidMount(){
     this.loadState();
   }


   saveState = () => {
     const serializedState = JSON.stringify(this.state.items);
     localStorage.setItem('famhub-todo-items', serializedState);
   }

   loadState = () => {
    const serializedState = localStorage.getItem('famhub-todo-items');
    if (serializedState !== null) {

      let storedItems = JSON.parse(serializedState);

      this.setState({
        items: storedItems
      });
    }

    return;
  }

   handleTextChange(event) {
     this.setState({
       text: event.target.value
     });
   }

   handleAddItem(event) {
     event.preventDefault();

     var newItem = {
       id: Date.now(),
       text: this.state.text,
       done: false
     };

     this.setState((prevState) => ({
       items: prevState.items.concat(newItem),
       text: ""
     }));
   }
   markItemCompleted(itemId) {
     var updatedItems = this.state.items.map(item => {
       if (itemId === item.id)
         item.done = !item.done;

       return item;
     });

     // State Updates are Merged
     this.setState({
       items: [].concat(updatedItems)
     });
   }

   handleDeleteItem(itemId) {
     var updatedItems = this.state.items.filter(item => {
       return item.id !== itemId;
     });

     this.setState({
       items: [].concat(updatedItems)
     });
   }


  render() {
    return (
      <div id="todo-list-container">
        <h3 className="apptitle shake">MY TO DO LIST</h3>
        <div className="row">
          <div className="col-md-3">
            <TodoList
              items={this.state.items}
              onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem}
            />
          </div>
        </div>

        <form
          id="add-form"
          className="row">
          <div className="col-sm-12">
            <div className="inline">


            <input type="text"
              className="form-control todoform"
              placeholder="Add an item..."
              onChange={this.handleTextChange}
              value={this.state.text} ></input>

              <button
                className="addButton"
                type="submit"
                onClick={this.handleAddItem}
                disabled={!this.state.text}
              >
                <i
                  className="fa fa-plus"
                >
                </i>
              </button>

            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default TodoContainer;
