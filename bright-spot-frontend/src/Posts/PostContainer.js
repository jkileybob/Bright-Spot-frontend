import React from 'react'
import Post from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/Posts/Post.js'


export class PostContainer extends React.Component{

  // trying to bind bS props for post component
  // constructor(props){
  //   super(props);
  //   this.props.brightSpots = this.brightSpots.bind(this);
  // }

  render(){
    // console.log(this.props.post)
    return(
      <div>
        {this.props.post.map(post =>
          <Post
            id={post.id}
            key={post.id}
            post={post}
            brightSpots={this.props.brightSpots}
          />

        )}
      </div>
    )
  }
}

export default PostContainer
