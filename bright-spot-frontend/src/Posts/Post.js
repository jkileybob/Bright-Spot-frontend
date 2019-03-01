import React from 'react'

// props consist of an id, a post obj, and a brightSpot obj
export class Post extends React.Component {

  render(){
    // console.log(this.props.brightSpot)
  return(
    <div className='post'>
      <img
        className='img'
        spot={this.props.brightSpot}
        key={`post-img-${this.props.post.id}`}
        id={this.props.post.id}
        src={this.props.post.photo}
        onClick={this.props.onClick}
        />
      {this.props.brightSpot.map(spot =>{
        if (spot.id === this.props.post.bright_spot_id){
          return (
            <div className='post' key={`post-${spot.id}`}>
              <p className='post' key={`post-name-header-${spot.id}`}>{spot.name}</p>
            </div>
          )}
        }
      )}
    </div>
  )}
}

export default Post
