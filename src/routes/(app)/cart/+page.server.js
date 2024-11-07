import { redirect } from "@sveltejs/kit";
import {API} from "$env/static/private"

export const load = async ({ locals }) => {
    const shipping = locals.shipping

    if(!shipping){
        throw redirect(302, '/auth/login')
    }
}

export const actions = {
    default: async({ request, cookies}) => {

        const data = await request.formData()
        const token = cookies.get('access_token')

        const id = data.get('id')
        const quantity = data.get('quantity')
        const amount_paid = data.get('total')

        const res = await fetch(`${API}order?product=${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                quantity,
                amount_paid
            })
        })
        
        if(!res.ok){
            console.error("Something went wrong", res)
        }
        
        throw redirect(302, '/cart/success')
        
    }
};