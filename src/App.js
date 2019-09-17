// Importamos react
import React,{Component} from 'react';

// Importamos logo
import logo from './logo.svg';

// Importamos CSS
import './App.css';

// Importamos componentes
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';

// Importamos datos
import {tareas} from './data/todos.json';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      titulo:'Aplicación de tareas',
      tareas:tareas
    };
    this.handleAddTodo=this.handleAddTodo.bind(this);
  }

  handleAddTodo(tarea){
    this.setState({
      tareas:[...this.state.tareas, tarea]
    })
  }
  handleDelete(index){
    if(window.confirm('¿Estas seguro de eliminar?')){
      this.setState({
        tareas:this.state.tareas.filter((e,i)=>{
          return i !==index;
        })
      })
    };
  }
  render(){
    const tareas=this.state.tareas.map((tarea,i)=>{
      return(
        <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{tarea.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {tarea.priority}
              </span>
            </div>
            <div className="card-body">
              {tarea.descripcion}
              <p><mark>{tarea.responsable}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger btn-sm" onClick={this.handleDelete.bind(this,i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <Navigation titulo={this.state.titulo} ntareas={this.state.tareas.length} />
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            {tareas}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
