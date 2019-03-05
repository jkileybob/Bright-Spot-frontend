import React from 'react'
import { Link } from 'react-router-dom'

export class Post extends React.Component {

  render(){
    // console.log(this.props)
  return(
    <div className='post'>

      <Link to={`/bright-spots/${this.props.post.id}`} >
        <img
          className='img'
          spot={this.props.brightSpot}
          key={`post-img-${this.props.post.id}`}
          id={this.props.post.id}
          src={this.props.post.photo}
          onClick={this.props.onClick}
          />
      </Link>

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

// get rid of onClick, replace with encompassing
// <Link to=`/bright-spots/${this.props.currentPost.id}`></Link>
// tags that trigger <Route path='/bright-spots/:id' />
