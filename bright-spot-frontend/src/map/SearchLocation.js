import React from 'react'
import FormStyle from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/map/FormStyle.css'
export class SearchLocation extends React.Component {

  render(){
      return(
        <div className='form'>
        <form onSubmit={this.props.onSubmit}>
          <input
            type='text'
            onChange={this.props.onChange}
             />
          <input type='submit' value='Search an Address!' />
        </form>
        </div>
  )}

}

export default SearchLocation
