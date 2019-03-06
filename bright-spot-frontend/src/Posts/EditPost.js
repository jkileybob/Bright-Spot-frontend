import React from 'react'

export class EditPostForm extends React.Component{
  render(){
    return (
    <div>
      <h1>Edit a Bright Spot!</h1>
      <form class='form' onSubmit={this.props.submitEdit} >

        <input class='input'
          type='text'
          placeholder={this.props.currentPost.name}
          onChange={this.props.inputName}
        />
      <input class='input'
          type='text'
          placeholder={this.props.currentPost.description}
          onChange={this.props.inputDescription}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )}
}

export default EditPostForm
