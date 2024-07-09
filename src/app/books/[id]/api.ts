'use server'
import { cookies } from "next/headers"

require('dotenv').config()
const local = process.env.localhost
async function fetchBookDetail(id: number){
    try{
        const cookie = cookies()
        const token = cookie.get('token')?.value
        const response = await fetch(`${local}/kindle/api/bookDetail/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            credentials: 'include'
        })
        const data = await response.json()
        return data.data
    }catch(error){
        console.log(error)
    }
}

export {fetchBookDetail}