class Tabela extends React.Component{
  constructor(props){
    super(props);
    this.state={
      componentes: [
        {id: "1", disc: "Sistemas Operacionais", carga: "66.7", periodo: "Noturno"},
        {id: "2", disc: "Inglês", carga: "33.3", periodo: "Noturno"},
        {id: "3", disc: "Laboratorio de Estruturas de Dados e Programação", carga: "33.3" , periodo: "Noturno"},
        {id: "4", disc: "Introdução a Banco de Dados", carga: "66.7", periodo: "Noturno"}
      ]
    }
  }

    render(){
      return (
        <div>
          <h2>Componentes Curriculares</h2>
          <table id="componentes">
            <tbody>
              <tr id="header">
                <th>DISCIPLINA</th>
                <th>CARGA</th>
                <th>PERIODO</th>
              </tr>

              <tr id="l1">
                <td>{this.state.componentes[0].disc}</td>
                <td>{this.state.componentes[0].carga}</td>
                <td>{this.state.componentes[0].periodo}</td>
              </tr>

              <tr id="l2">
                <td>{this.state.componentes[1].disc}</td>
                <td>{this.state.componentes[1].carga}</td>
                <td>{this.state.componentes[1].periodo}</td>
              </tr>

              <tr id="l3">
                <td>{this.state.componentes[2].disc}</td>
                <td>{this.state.componentes[2].carga}</td>
                <td>{this.state.componentes[2].periodo}</td>
              </tr>

              <tr id="l4">
                <td>{this.state.componentes[3].disc}</td>
                <td>{this.state.componentes[3].carga}</td>
                <td>{this.state.componentes[3].periodo}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      );
    
  }
}

ReactDOM.render(<Tabela />, document.getElementById("tabela"));