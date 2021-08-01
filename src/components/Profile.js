import React from 'react'
import { useAuth } from '../hooks/AuthHooks'
import UploadForm from '../uploadImage/UploadForm'
import Base from './Base'
import ImageGrid from './ImageGrid'

const Profile = () => {


    return (
        <Base>

            <div className="d-flex align-items-center justify-content-center w-100 flex-column pt-5">
                <h1>Your Picture</h1>
                <h4>Upload your photos to store for live time</h4>
            </div>
            <UploadForm />
            <ImageGrid />
        </Base>
    )
}

export default Profile
