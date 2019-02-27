import React from 'react'
import BrightSpot from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/BrightSpot/BrightSpot.js'
import Post from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/Posts/Post.js'
import PostStyle from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/Posts/PostStyle.css'


export class PostContainer extends React.Component{


  render(){
    // console.log(this.props)
    // console.log(this.props.posts.map(post => console.log(post)))

    return(
      <div>
        <React.Fragment>
          {this.props.posts.map((post) => {
            return (<Post
                id={`post-${post.id}`}
                key={`post-${post.id}`}
                post={post}
                brightSpot={this.props.brightSpots}
                onClick={this.props.onClick}
              />)
          }, this) }
        </React.Fragment>
      </div>
    )
  }
}

export default PostContainer
