import React from 'react'
import { Link } from 'react-router-dom'

export class EditPostForm extends React.Component{
  render(){
    return (
    <div>
      <h1>Edit a Bright Spot!</h1>
      <form class='form' onSubmit={this.props.submitEdit} >

        <input class='input'
          type='text'
          value={this.props.currentPost.name}
          onChange={this.props.inputName}
        />
      <input class='input'
          type='text'
          value={this.props.currentPost.description}
          onChange={this.props.inputDescription}
        />

        <button type='submit'>Submit</button>
      </form>
    <Link to={`/bright-spots/${this.props.currentPost.id}`}>go back.</Link>
    </div>
  )}
}

export default EditPostForm
