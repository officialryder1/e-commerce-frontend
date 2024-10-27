import {API} from '$env/static/private'
import { redirect } from '@sveltejs/kit'

export const load = async ({locals, fetch, cookies}) => {

    const user = locals.user
    
    const user_id = user?.id
    console.log(user_id)

    const user_token = cookies.get('access_token')
    
    
    if(!user){
        throw redirect(302, '/')
    }

    const res = await fetch(`${API}product_by_owner?user_id=${user_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user_token}`

        }
    })


    if(!res.status === 404){
        console.error("Error fetching data")
    }
    const product = await res.json()
   

    return {
        user,
        product
    }
}