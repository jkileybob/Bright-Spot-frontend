import React from 'react'

export class NewPostForm extends React.Component{

  handler = (e) => {
    e.preventDefault();
    this.props.submitPostForm();
    // eventually file selct photo uploader will go here
  }

  render(){
    return (
    <div>
      <h1>Add a Bright Spot!</h1>
      <form
        class='form'
        onSubmit={this.handler}>

        <input class='input'
          value={this.props.name}
          type='text'
          placeholder='Name of BrightSpot'
          onChange={this.props.inputName}
        />
      <input class='input'
        value={this.props.description}
          type='text'
          placeholder='Description'
          onChange={this.props.inputDescription}
        />
      <input class='input'
        value={this.props.lat}
        type='text'
        placeholder='Latitude'
        onChange={this.props.inputLatitude}
        />
      <input class='input'
        value={this.props.long}
        type='text'
        placeholder='Longitude'
        onChange={this.props.inputLongitude}
        />

      <button class='button' type='submit'>Submit</button>
      </form>

      <input class='input'
        type='text'
        placeholder='add a link to a photo'
        value={this.props.img}
        onChange={this.props.inputInternetImage}
        />
      <button class='button' type='submit' onClick={this.props.submitInternetImage}>Submit</button>

    </div>
  )}
}

export default NewPostForm
