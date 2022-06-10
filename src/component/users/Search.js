import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../App.css'
export class Search extends Component {
     staticProptypes = {
          searchUsers: PropTypes.func.isRequired,
          onClear: PropTypes.func.isRequired,
          showClear: PropTypes.bool.isRequired,
          setAlert: PropTypes.func.isRequired,
     }
     state = {
          text : ''
     }
     
     onSubmit = e => {
          
          e.preventDefault();
          if(this.state.text === ''){
               this.props.setAlert({msg: "Please enter a value", type: 'light'})
          }
          else{
          this.props.searchUsers(this.state.text);
          this.setState({text: ''});
          }
     }

     onChange = (e) => {this.setState( { [e.target.name] : e.target.value})}


     render() {
          const { onClear, showClear} = this.props;
          return (
               <div>
                    <form className="form" onSubmit={!showClear ? this.onSubmit: onClear}>
                         <input type="text" name="text" placeholder="Search Users..." onChange = {this.onChange} value={this.state.text}/>
                         <input type="submit" className="btn btn-dark btn-block" />
                         {showClear &&<input type="submit" className="btn btn-light btn-block" value="Clear" onClick={onClear}/>}
                    </form>
               </div>
          )
     }
}

export default Search

