import React, { Component, Fragment } from 'react'
import { Navbar, Users, Search, Alert, About, User} from './component/exports'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export class App extends Component {
  state = {
    users : [],
    loading : false,
    showClear: false,
    alert : null,
    user: {}
  }
  // async componentDidMount() {
    
  //   this.setState({loading: true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users: res.data, loading: false})
   
  // }  

  // Search github users and pass this func as prop to lift state up.
  searchUsers = async text => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading: false, showClear: true})
  }

  //Fetch a single suser
  getUser = async username => {
 
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(username);
    this.setState({user: res.data});
  }
  //Clear users from state
  onClear = () => {
    this.setState({users: [], loading: false, showClear: false})
  }

  //set alert
  setAlert = ({msg, type}) => {
    this.setState({alert : {msg, type}});
    setTimeout(() => {this.setState({alert: null})}, 3000)
  }

  render() {
    return (
      <Router>
      <Navbar />
      <div className="container">
      <Alert alert = {this.state.alert} />
      <Switch>
      <Route exact path="/" render = {props => (
        <Fragment>
        <Search searchUsers = {this.searchUsers} onClear = {this.onClear} showClear = {this.state.showClear} setAlert = {this.setAlert}/>
        <Users users={this.state.users} loading={this.state.loading}/>
        </Fragment>
      )} />

        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
      <Route exact path="/user/:login" render = {props => (
        <User {...props} getUser = {this.getUser} user={this.state.user} loading = {this.state.loading}/>
      )} />
      
      </div>
      </Router>
    )
  }
}

export default App
