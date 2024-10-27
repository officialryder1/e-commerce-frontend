import { API } from '$env/static/private'
import { redirect, fail } from '@sveltejs/kit'

export const load = async ({locals}) => {
    const shipping = locals.shipping

    if(shipping){
        throw redirect(302, '/')
    }
}

export const actions = {
    default: async ({ cookies, request}) => {

        const data = await request.formData()
        const token = cookies.get('access_token')

        const email = data.get('email')
        const phone = data.get('phone')
        const state = data.get('state')
        const city = data.get('city')
        const address = data.get('address')

        try{
            const res = await fetch(`${API}upload-shipping`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    email,
                    phone,
                    state,
                    city,
                    address
                })
            })

            const response = await res.json()
            if(!res.ok){
                return fail(res.status, {
                    error: response.detail || 'Something went wrong'
                })
            }
        }
        catch(e){
            console.error(e)
        }

        throw redirect(302, '/')
    }
};