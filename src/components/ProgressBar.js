import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'


const ProgressBar = ({ file, setFile }) => {
    const { progress, url } = useStorage(file)
    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url])
    return (
        <div className="progress-bar"
            style={{ width: progress + "%", height: "5px" }}
        ></div>
    )
}

export default ProgressBar
