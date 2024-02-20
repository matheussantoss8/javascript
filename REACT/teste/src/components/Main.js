import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa'

//tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './Main.css'

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, novaTarefa } = this.state;
    const trimmedTarefa = novaTarefa.trim();
  
    if (tarefas.indexOf(trimmedTarefa) !== -1) return;
  
    this.setState({
      tarefas: [...tarefas, trimmedTarefa],
      novaTarefa: '', // Limpa a novaTarefa após adicionar à lista
    });
  }
  

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className='form'>
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefas}>
              {tarefa}
              <span>
                <FaEdit className='edit' />
                <FaWindowClose className='delete' />
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}