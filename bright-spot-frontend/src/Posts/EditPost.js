import React from 'react'
import { Link } from 'react-router-dom'

export class EditPostForm extends React.Component{
  render(){
    return (
    <div>
      <h1>Edit a Bright Spot!</h1>
      <form class='form' onSubmit={this.props.submitEdit} >

        <input class='input'
          placeholder={this.props.currentPost.name}
          type='text'
          value={this.props.name}
          onChange={this.props.inputName}
        />
      <input class='input'
          type='text'
          placeholder={this.props.currentPost.description}
          value={this.props.description}
          onChange={this.props.inputDescription}
        />

      <button class='btn' type='submit'>Submit</button>
      </form>
    <Link class='link' to={`/bright-spots/${this.props.currentPost.id}`}>go back.</Link>
    </div>
  )}
}

export default EditPostForm
