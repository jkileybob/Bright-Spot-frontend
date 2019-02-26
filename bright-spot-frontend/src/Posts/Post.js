import React from 'react'

// props consist of an id, a post obj, and a brightSpot obj
export class Post extends React.Component {


  render(){
    // console.log(this.props.post.bright_spot_id)
  return(
    <div className='post'>
      <img
        className='img'
        key={`post-img-${this.props.post.id}`}
        id={this.props.post.id}
        src={this.props.post.photo}
        onClick={this.props.onClick}
        />
      {this.props.brightSpot.map(spot =>{
        // console.log(spot.description)
        if (spot.id === this.props.post.bright_spot_id){
          return (
            <div class='post'>
              <h1 key={`post-name-header-${spot.id}`}>{spot.name}</h1>
              <h3 key={`post-description-${spot.id}`}>{spot.decription}</h3>
            </div>
          )}
        }
      )}
    </div>
  )}
}

export default Post
