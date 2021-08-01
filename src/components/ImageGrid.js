import React, { useState } from 'react'
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {

    const { docs } = useFirestore('images')

    return (
        <div className="container">
            <div className="row">
                {docs && docs.map((doc) => (

                    <div className="col-lg-4 mb-4 mb-lg-0 p-2" key={doc.id}>
                        <img className="h-100 w-100" src={doc.url} alt="image" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGrid








// <!-- Gallery -->
// <div class="row">
//   <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
//     <img
//       src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
//       class="w-100 shadow-1-strong rounded mb-4"
//       alt=""
//     />

//     <img
//       src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
//       class="w-100 shadow-1-strong rounded mb-4"
//       alt=""
//     />
//   </div>

//   <div class="col-lg-4 mb-4 mb-lg-0">
//     <img
//       src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
//       class="w-100 shadow-1-strong rounded mb-4"
//       alt=""
//     />

//     <img
//       src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
//       class="w-100 shadow-1-strong rounded mb-4"
//       alt=""
//     />
//   </div>

//   <div class="col-lg-4 mb-4 mb-lg-0">
//     <img
//       src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
//       class="w-100 shadow-1-strong rounded mb-4"
//       alt=""
//     />

//     <img
//       src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
//       class="w-100 shadow-1-strong rounded mb-4"
//       alt=""
//     />
//   </div>
// </div>
// <!-- Gallery -->