class AddTodoToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTodo: false
    };

    // binders
      
  }
  // hooks
  
  // methods
  

  toggleAddTodo() {
    this.setState(prevState => ({
      addTodo: !this.state.addTodo
    }));
  }
  
  render() {
    return (
      <div>
      {/* td: input*/}
      <button onClick={() => { this.toggleAddTodo() }}>
        { this.state.addTodo ? 'Cancel': 'Add Todo' }
      </button>
        
      </div>
    );
  }
}

class TodoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    // binders
    
  }
  // hooks
  
  // methods
  
  render() {
    return (
      <div>
        {this.props.pr_todoList.map((i) =>
          <p>{i.todo}</p>
        )}
      </div>
    );
  }
}

export default class RkCrud1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          todo: "todo1",
          edit: false
        }
      ]
    };

    // binders
    
  }
  // hooks
  
  // methods
  
  render() {
    return (
      <div>
        <TodoDisplay 
        pr_todoList={this.state.todos} />
        <AddTodoToggle />
      </div>
    );
  }
}