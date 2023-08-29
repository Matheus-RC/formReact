//Importar mósulos
import React from 'react';
import ReactDOM from 'react-dom';

//IMportar CSS
import './estilo.css';

//Importar Formulário
import Formulario from './Formulario';
import Tabela from './Tabela'; 

// Componente
class Principal extends React.Component{
    //Render 
    render(){
        return(
            <div>
                <Formulario/>
                <Tabela/>
            </div>
        );
    }
}

// Render
ReactDOM.render(<Principal/>, document.getElementById('root'));