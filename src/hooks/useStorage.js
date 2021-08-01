import { useEffect, useState } from "react";
import { projectStorage, projectStore, timestamp } from "../firebase/config";
import { useAuth } from "./AuthHooks";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    const { currentUser } = useAuth()

    useEffect(() => {

        //reference
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectStore.collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            if (currentUser) {
                const createdAt = timestamp()
                const userID = currentUser.uid
                collectionRef.add({ url, createdAt, userID })
                setUrl(url)
            }

        })
    }, [file])
    return { progress, error, url }
}

export default useStorage