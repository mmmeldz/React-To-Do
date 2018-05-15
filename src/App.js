import React, { Component } from 'react';
 import './App.css';
 import ToDo from './components/ToDo.js';

 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
      todos: [
        { description: 'Feed the kittens', isCompleted: true },
        { description: 'Take Kittens for a walk', isCompleted: false },
        { description: 'Give kittens a bubble bath', isCompleted: false }
      ],
       newTodoDescription: ''
    };
       this.deleteTodo = this.deleteTodo.bind(this);
}

deleteTodo(description) {
          const filteredTodos = this.state.todos.filter((todo, index) =>  todo.description !== description);
            this.setState({
              todos: filteredTodos
            });
          }

   handleChange(e) {
       this.setState({ newTodoDescription: e.target.value })
     }

   handleSubmit(e) {
        e.preventDefault();
         if (!this.state.newTodoDescription) { return }
        const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
        this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
      }

   toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

   render() {
     return (
       <div className="App">
        <ul>
        { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteToDo={this.deleteTodo} />
           )}
         </ul>
          <form onSubmit={ (e) => this.handleSubmit(e) }>
           <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
       </div>
     );
   }
 }


 export default App;
