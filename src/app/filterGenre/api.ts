import { cookies } from "next/headers"


require('dotenv').config()
const local = process.env.localhost
async function fetchGenre() {
    const cookie = cookies()
    const token = cookie.get('token')?.value
    try{
        const response = await fetch(`${local}/kindle/api/fetchGenreList/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            credentials: 'include'
        })
        const data = await response.json()
        console.log(data)
        return data.data
    }catch(error){
        console.log(error)
    }
}

export {fetchGenre}