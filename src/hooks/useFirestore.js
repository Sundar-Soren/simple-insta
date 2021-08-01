import { useState, useEffect } from "react";
import { projectStore } from "../firebase/config";
import { useAuth } from "./AuthHooks";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])
    const [loading, setLoading] = useState(null)
    const { currentUser } = useAuth()

    useEffect(() => {
        const unsub = projectStore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach(doc => {
                    if (currentUser && currentUser.uid === doc.data().userID) {

                        documents.push({ ...doc.data(), id: doc.id })
                    }

                })
                setDocs(documents)
            })
        return () => unsub()
    }, [collection])
    return { docs }

}
export default useFirestore