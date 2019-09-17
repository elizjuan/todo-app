import React, {Component} from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.state={
            titulo:'',
            responsable:'',
            descripcion:'',
            priority:'low'
        }
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            titulo: '',
            responsable: '',
            descripcion: '',
            priority: 'low'
        });
    }
    handleInput(e){
        const{value, name}=e.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            
            <div className="card mt-4">
              <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" name="titulo" className="form-control" placeholder="Titulo" onChange={this.handleInput} value={this.state.titulo}></input>
                </div>
                <div className="form-group">
                    <input type="text" name="responsable" className="form-control" placeholder="Responsable" onChange={this.handleInput} value={this.state.responsable}></input>
                </div>
                <div className="form-group">
                    <input type="text" name="descripcion" className="form-control" placeholder="Descripcion" onChange={this.handleInput} value={this.state.descripcion}></input>
                </div>
                <div className="form-group">
                    <select name="priority" className="form-control" onChange={this.handleInput}  value={this.state.priority}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <button className="mt-3 btn btn-primary btn-sm" type="submit">Guardar</button>
              </form>
            </div>
            
        );
    }
}

export default TodoForm;