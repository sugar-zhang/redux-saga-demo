import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './saga/sagas';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getList () {
    this.props.dispatch({ type: 'userList/init' })
  }

  removeUser (id) {
    this.props.dispatch({ type: 'userList/remove', id })
  }

  render () {
    const { list, count } = this.props.users

    return (
      <div>
        <button onClick={() => { this.props.dispatch({ type: 'increment', num: 1 }) }}>increment</button>
        <span>{count}</span>
        <button onClick={() => { this.props.dispatch({ type: 'reduce', num: 1 }) }}>reduce</button>
        <button onClick={this.getList.bind(this)}>list</button>
        <ul>
          {
            list.map(u => (
              <li key={u.id} onClick={this.removeUser.bind(this, u.id)}>
                {u.name}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStatesToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStatesToProps)(App)