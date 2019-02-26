import React from 'react'

// props consist of an id, a post obj, and a brightSpot obj
export class Post extends React.Component {


  render(){
    // console.log(this.props.post.bright_spot_id)
  return(
    <div className='post'>
      {this.props.brightSpot.map(spot =>{
        if (spot.id === this.props.post.bright_spot_id){
          return <h1>{spot.name}</h1>
          }
        }
      )}
    <img
        class='img'
        src={this.props.post.photo}
        onClick={this.props.onClick}
        />
    </div>
  )}
}

export default Post
