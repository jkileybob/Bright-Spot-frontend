import React from 'react'
import BrightSpot from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/BrightSpot/BrightSpot.js'
import Post from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/Posts/Post.js'

export class PostContainer extends React.Component{


  render(){
    return(
      <div className='post'>
        <React.Fragment>
          {
            this.props.posts.map((post) => {
            return (<Post
                id={`post-${post.id}`}
                key={`post-${post.id}`}
                post={post}
                currentPost={this.props.currentPost}
                brightSpot={this.props.brightSpots}
                onClick={this.props.onClick}
              />)
            }, this)
          }
        </React.Fragment>
      </div>
    )
  }
}

export default PostContainer
