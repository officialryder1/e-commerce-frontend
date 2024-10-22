import { API } from '$env/static/private'

export async function load({locals, fetch}) {
    const user = locals.user

    const res = await fetch(`${API}products`)
    if(res.status === 200){
        const products = await res.json()
        return {
            user,
            products
        }
    }
    else{
        console.log('Error fetching data')
    }
   
}