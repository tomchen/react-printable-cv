import React, { Component } from 'react'
import formCls from './Form.scss'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { value } = event.target
    this.setState(() => {
      return {
        value,
      }
    })
  }

  render() {
    const {value} = this.state
    return (
      <form className={formCls.abc}>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form
