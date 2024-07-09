'use server'
import { cookies } from "next/headers"

require('dotenv').config()
const local = process.env.localhost
async function fetchBooks() {
    const cookie = cookies()
    const token = cookie.get('token')?.value
    console.log(token, cookie)
    try{
        const response = await fetch(`${local}/kindle/api/fetchBooks/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })
        const data = await response.json()
        return data.data
    }catch(error){
        console.log(error)
    }
} 

async function retrieveDetails(formData: FormData) {
    try{
        const cookie = cookies()
        const token = cookie.get('token')?.value
        const id = formData.get('bookId')
        const response = await fetch(`${local}/kindle/api/book/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            credentials: 'include'
        })
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}
export {fetchBooks, retrieveDetails}