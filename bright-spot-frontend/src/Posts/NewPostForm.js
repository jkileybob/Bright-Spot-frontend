import React from 'react'
import MapContainer from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/map/MapContainer.js'

const NewPostForm = (props) => {
  return(
    <div>
      <h1>Add a Bright Spot!</h1>
      <MapContainer />
      <form>
        <input id='input-name'
          type='text'
          placeholder='Name of BrightSpot'
          onChange={props.inputName}
        />
        <input id='input-description'
          type='text'
          placeholder='Description'
          onChange={props.inputDescription}
        />
        <input id='input-photo'
          type='file'
          onChange={props.fileSelect}
          />
//still needs location selector from map
        <button
          onClick={props.fileUpload}
          onSubmit={props.submitPostForm}
        >Submit</button>
      </form>
    </div>
  )
}

export default NewPostForm
