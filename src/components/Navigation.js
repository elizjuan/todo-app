import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a className="nav-link active text-white" href="#">
                    {this.props.titulo}
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.ntareas}
                    </span>
                </a>
            </nav>
        )
    }
}

export default Navigation;