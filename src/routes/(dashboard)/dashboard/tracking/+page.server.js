import {API} from '$env/static/private'

export const load = async ({cookies}) => {

    const token = cookies.get('access_token')

    const res = await fetch(`${API}order-by-owner`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const order = await res.json()
    
    return {
        order
    }
}