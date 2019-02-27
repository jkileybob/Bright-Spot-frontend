

<Route exact path='/posts/:id'

/>


<Route exact path='/brightSpots/:id' render={()=>{
    return(  ) } }
/>


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


  {this.props.brightSpots.map(spot => {
  return  <h1 id={spot.id} >{spot.name}</h1>
  })}


    // getPosts(){
    //   fetch('http://localhost:3001/api/v1/posts')
    //   .then(response => response.json())
    //   .then(posts => {
    //     console.log(posts)
    //     this.setState({
    //       posts: posts
    //     })
    //   })
    // }
