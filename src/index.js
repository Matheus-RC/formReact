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
    //Construtor
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            idade: '',
            vetor: []
        }
    }

    //Function ao digitar
    aoDigitar = (campo) => {
        this.setState({[campo.target.name]: campo.target.value});
    }

    //Function click
    aoClicar = (botao) => {
        botao.preventDefault();
        var copiaVetor = [...this.state.vetor];
        copiaVetor.push({
            'nome' : this.state.nome,
            'idade' : this.state.idade
        });
        this.setState({vetor: copiaVetor});

        this.setState({
            nome:  '',
            idade: ''
        });
    }

    //Render 
    render(){
        return(
            <div>
                <Formulario campoNome={this.state.nome} campoIdade={this.state.idade} funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar}/>
                <Tabela dados={this.state.vetor}/>
            </div>
        );
    }
}

// Render
ReactDOM.render(<Principal/>, document.getElementById('root'));