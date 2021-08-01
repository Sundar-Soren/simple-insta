import React, { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import { useAuth } from '../hooks/AuthHooks'

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const { currentUser } = useAuth()

    const imageType = ['image/png', 'image/jpeg']

    const handleChange = (e) => {

        let selected = e.target.files[0]

        if (selected && imageType.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError("Selected invalid file type")
        }


    }

    return (
        <div>
            <form >
                {!currentUser && <h1 className="alert text-primary text-center pt-5">Please Log In To Store your Photos</h1>}
                {currentUser && <input type="file" onChange={handleChange} />}
                {error && (<h5 className="alert alert-danger">{error}</h5>)}
                {file && (<h5 className="alert alert-info">{file.name}</h5>)}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </form>
        </div>
    )
}

export default UploadForm
