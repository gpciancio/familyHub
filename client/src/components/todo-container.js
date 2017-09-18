import React from 'react';
import TodoList from './todo-list';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoitems: [],
      groceryitems: [],
      todo: true,
      text: "",
    };

    this.chickenRef = null;

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.markItemCompleted = this.markItemCompleted.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  componentDidUpdate() {
    this.saveState();
  }

  componentDidMount() {
    this.loadState();
  }

  saveState = () => {
    var serializedState = JSON.stringify(this.state.todoitems);
    localStorage.setItem('famhub-todo-items', serializedState);
    serializedState = JSON.stringify(this.state.groceryitems);
    localStorage.setItem('famhub-grocery-items', serializedState);
  }

  loadState = () => {
    var serializedState = localStorage.getItem('famhub-todo-items');
    if (serializedState !== null) {

      let storedItems = JSON.parse(serializedState);

      this.setState({todoitems: storedItems});

      serializedState = localStorage.getItem('famhub-grocery-items');
      if (serializedState !== null) {

        let storedItems = JSON.parse(serializedState);

        this.setState({groceryitems: storedItems});
      }

      return;
    }
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  handleAddItem(event) {
    event.preventDefault();

    var newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false
    };

    if (this.state.todo) {
      this.setState((prevState) => ({todoitems: prevState.todoitems.concat(newItem), text: ""}));
    } else {
      this.setState((prevState) => ({groceryitems: prevState.groceryitems.concat(newItem), text: ""}));
    }
  }

  markItemCompleted(itemId) {
    if (this.state.todo) {
      var updatedItems = this.state.todoitems.map(item => {
        if (itemId === item.id){
          item.done = !item.done;
          if(item.done){
            this.props.showChicken();
          }
        }
        return item;
      })
    } else {
      updatedItems = this.state.groceryitems.map(item => {
        if (itemId === item.id)
          item.done = !item.done;

        return item;
      })
    }

    // State Updates are Merged
    if (this.state.todo) {
      this.setState({todoitems: [].concat(updatedItems)})
    } else {
      this.setState({groceryitems: [].concat(updatedItems)})
    }
  }

  handleDeleteItem(itemId) {
    if (this.state.todo) {
      var updatedItems = this.state.todoitems.filter(item => {
        return item.id !== itemId;
      });

      this.setState({todoitems: [].concat(updatedItems)});
    } else {
      updatedItems = this.state.groceryitems.filter(item => {
        return item.id !== itemId;
      });

      this.setState({groceryitems: [].concat(updatedItems)});
    }
  }

  render() {
    return (
      <div id="todo-list-container">
        <div className="row">
          <div className="col-sm-12">
            <button
              className={this.state.todo ? "selected btn btn-default todobutton" : "btn btn-default todobutton"}
              disabled={this.state.todo}
              onClick={(index) => this.setState({todo: !this.state.todo})}
            >To Do</button>
            <button
              className={!this.state.todo ? "selected btn btn-default todobutton" : "btn btn-default todobutton"}
              disabled={!this.state.todo}
              onClick={(index) => this.setState({todo: !this.state.todo})}
            >Grocery</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <TodoList todo={this.state.todo} items={this.state.todo
                ? this.state.todoitems
                : this.state.groceryitems} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <form id="add-form">
              <div className="input-group">

                <input type="text" className="form-control todoText" placeholder="Add an item..." onChange={this.handleTextChange} value={this.state.text}></input>
                <span className="input-group-btn">
                  <button className="btn btn-default addButton" type="submit" onClick={this.handleAddItem} disabled={!this.state.text}>
                    <i className="fa fa-plus"></i>
                </button>
              </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}



export default TodoContainer;
