//Importar modulo
import React from 'react';

//Componente
class Tabela extends React.Component{
     //Render
     render(){
        return(
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
            </table>
        );
     }
}

// Exportar
export default Tabela;