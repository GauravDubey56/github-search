import React, { Component } from 'react'

export class User extends Component {
     componentDidMount(){
          this.props.getUser(this.props.match.params.login)
     }
     render() {
          const {name, 
                login, 
                html_url,
                followers,
                following,
                bio, blog, public_repos,
                hireable
               } = this.props.user;
          return (
               <div>
                    <h6>User</h6>
                    <h3>{name}</h3>
                    <h4>{login}</h4>
                    <a href={html_url}>Visit Profile</a>
                    <h4>Followers : {followers}</h4>
                    <h4>Following : {following}</h4>
               </div>
          )
     } 
}

export default User
