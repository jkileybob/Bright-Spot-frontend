import React from 'react'
import RealMap from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/map/RealMap.js'

export class NewPostForm extends React.Component{
  render(){
    return (
    <div>
      <h1>Add a Bright Spot!</h1>
      <form>
        <input id='input-name'
          type='text'
          placeholder='Name of BrightSpot'
          onChange={this.props.inputName}
        />
        <input id='input-description'
          type='text'
          placeholder='Description'
          onChange={this.props.inputDescription}
        />
        <input id='input-photo'
          type='file'
          onChange={this.props.fileSelect}
          />
//still needs location selector from map
        <button
          onClick={this.props.fileUpload}
          onSubmit={this.props.submitPostForm}
        >Submit</button>
      </form>
    </div>
  )}
}

export default NewPostForm
