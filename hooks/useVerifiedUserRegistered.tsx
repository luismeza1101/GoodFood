'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const useVerifiedUserRegistered = () => {
    const router = useRouter()

    useEffect(() => {
        if(localStorage.getItem('user') != null){
            router.push('/home')
        }
    },[router])
}

export default useVerifiedUserRegistered
