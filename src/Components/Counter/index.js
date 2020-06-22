import React from "react"

export default class Contador extends React.Component {
  state = {
    contador: 1,
  }

  incrementaContador = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  decrementaContador = () => {
    this.setState({ contador: this.state.contador - 1 })
  }

  render() {
    return (
      <>
        <h1>{this.state.contador}</h1>
        <button onClick={this.incrementaContador}>Incrementar</button>
        <button onClick={this.decrementaContador}>Decrementar</button>
      </>
    )
  }
}
