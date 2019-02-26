import React from 'react'
import PostStyle from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/Posts/PostStyle.css'


const Post = (props) => {
  console.log(props)
  // props consist of an id, a post obj, and a brightSpot obj

  // console.log(props.brightSpots.forEach(brightSpot=> console.log(brightSpot)))
  // console.log(props.post.bright_spot_id)


// props within this function are currently undefined, need them to get header name to render
  // let getBrightSpotName = (props) => {
  //   props.brightSpots.forEach((spot) => {
  //     if (spot.id === props.post.bright_spot_id){
  //       // return spot.name
  //       console.log(spot.name)
  //     }
  //   })
  // }
  // <h1>{getBrightSpotName()}</h1>

  return(
    <div className='post'>
      <img class='img' src={props.post.photo}/>
    </div>
  )
}

export default Post

// {id: 2, bright_spot_id: 2, photo: "https://assets.urbanturf.com/dc/images/blog/2010/10/ledroit_park_gate.jpg", bright_spot: {…}}
// bright_spot: {id: 2, name: "LeDroit Park", description: "Historic neighborhood park, surrounded by beautiful houses.", latitude: 38, longitude: -77}
// bright_spot_id: 2
// id: 2
// photo: "https://assets.urbanturf.com/dc/images/blog/2010/10/ledroit_park_gate.jpg"
