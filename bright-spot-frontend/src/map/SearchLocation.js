import React from 'react'

export class SearchLocation extends React.Component {

  render(){
      return(

        <form onSubmit={this.props.onSubmit}>
          <input
            type='text'
            className='form'
            onChange={this.props.onChange}
             />
          <input type='submit' value='Search an Address!' />
        </form>

  )}

}

export default SearchLocation
