import React from 'react';

function Images(props){
	// Map through images

  var image = props.images.map((image, index)=>{
    return(
      <div>
        <img src={image} alt="" width={"100%"}/>
      </div>
    )
  });
	return(
    <div>
      <p>Images go here as props</p>
      {image}
    </div>
	)
}

export default Images;