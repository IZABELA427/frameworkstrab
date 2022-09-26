import './App.css';
import { Component } from 'react';
import {Buscar} from './components/Buscar'
import {Cabecalho} from './components/Cabecalho'
import { Listar } from './components/Listar';
import { Rodape } from './components/Rodape';


class App extends Component{
  state = {
      busca: '',
      odas: []
  }

  componentDidMount() {
    this.carregaODAS();
  
  }

  carregaODAS() {
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value})
    this.carregaODAS()
  }

  render(){
    const {odas} = this.state;
    return(
      <section>

        <Cabecalho />
        <Buscar 
        busca = {this.state.busca}
        buscaODA = {this.buscaODA}
        />

      <Listar
      odas = {odas}
      />
      <Rodape/>
      </section>
    )
  }

}

export default App;