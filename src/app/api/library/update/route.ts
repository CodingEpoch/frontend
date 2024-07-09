import { cookies } from "next/headers";

require('dotenv').config()
const local = process.env.localhost
export async function POST(req: Request, res: Response) {
    try{
        const {searchParams} = new URL(req.url)

        const id = searchParams.get('id')
        console.log(id)
        const cookie = cookies()
        const token = cookie.get('token')?.value
        const response = await fetch(`${local}/kindle/api/library/update/${id}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            credentials: 'include'
        })
        if(response.ok){
            console.log('UPDATED LIBRARY')
            return Response.json({'message': 'success'})
        }
    }catch(error){
        console.log(error)
        return Response.json({'message': 'error'})
    }
}