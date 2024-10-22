import { API } from '$env/static/private'
import { redirect } from '@sveltejs/kit'



export const GET = async({fetch, params, cookies}) => {
    const user_token = cookies.get('access_token')
    const id = params.id

    const res = await fetch(`${API}product/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user_token}`
        }
    }) 

    if(!res.ok){
        return new Response(null, {
            status: res.status,
            statusText: res.statusText
        })
    }

    throw redirect(302, '/dashboard')
}