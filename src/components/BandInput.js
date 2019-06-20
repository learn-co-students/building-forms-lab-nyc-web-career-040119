import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({ name: "" })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
