///////////////////////////local image upload////////////////////////////

// will fetch to post backend
  fileUploadHandler = (e) => {
    e.preventDefault();
    const fileData = new FormData();
    fileData.append('image', this.state.selectedFile, this.state.selectedFile)
    //
    // fetch() post to  backend
    console.log('photo stuff', fileData)
  }

// create form:
  <input class='input'
    type='file'
    onChange={this.props.fileSelect}
    />
//state:
selectedFile: null,   //photo upload selector status

// <NewPostForm
 fileSelect={this.fileSelectHandler}
 fileUpload={this.fileUploadHandler}

 //handler
 fileSelectHandler = (e) => {
   this.setState({
     selectedFile: e.target.files[0]
   })
 }


////////////////////////////////////////////////////////////////////////////////
///////////////////////////CurrentLocation InfoWindow//////////////////////////////////////////////
<Marker
  position={this.state.center}
  icon='http://maps.google.com/mapfiles/kml/paddle/grn-blank.png'
  onClick={this.onClickCurrentLocationHandler}
 />

{this.state.visible ?
 <InfoWindow
   postion={this.state.center}
   map={this.props.map}
   google={this.props.google}
   visible={this.state.visible} >
    <div>
      <h1>you are here.</h1>
    </div>
 </InfoWindow>
 : null }

//////////////////////////////////////////////////////////////////////////////
