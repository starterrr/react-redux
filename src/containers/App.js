import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as pageActions from '../actions/PageActions'

class App extends Component {
  componentDidMount() {
    this.props.pageActions.fetchPokemons(0)
  }

  render() {
    let { isFetched, pokemons } = this.props.page

    pokemons = pokemons.map((pokemon, index) => {
      return <li key={index}>{pokemon.name}</li>
    })

    return (
      isFetched
      ?
      <p>Loading...</p>
      :
      <ul>
        {pokemons}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
