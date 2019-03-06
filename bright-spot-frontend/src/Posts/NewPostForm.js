import React from 'react'
import RealMap from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/map/RealMap.js'

export class NewPostForm extends React.Component{
  render(){
    return (
    <div>
      <h1>Add a Bright Spot!</h1>
      <form class='form'>
        <input class='input'
          type='text'
          placeholder='Name of BrightSpot'
          onChange={this.props.inputName}
        />
      <input class='input'
          type='text'
          placeholder='Description'
          onChange={this.props.inputDescription}
        />
      <input class='input'
        type='text'
        placeholder='Latitude'
        onChange={this.props.inputLatitude}
        />
      <input class='input'
        type='text'
        placeholder='Longitude'
        onChange={this.props.inputLongitude}
        />
      <input class='input'
        type='file'
        onChange={this.props.fileSelect}
        />

        <button
          onClick={this.props.fileUpload}
          onSubmit={this.props.submitPostForm}
        >Submit</button>
      </form>
    </div>
  )}
}

export default NewPostForm
