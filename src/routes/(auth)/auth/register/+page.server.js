import { fail, redirect } from "@sveltejs/kit";
import {API} from '$env/static/private'

export const load = async({locals}) => {
    const user = locals.user
    if(user){
        throw redirect(302, '/')
    }
}

export const actions = {
    default: async({request}) => {

        const data = await request.formData()

        const email = data.get('email')
        const username = data.get('username')
        const password = data.get('password')
        const password1 = data.get('password1')

        if (!username || username.trim().length === 0){
            return fail(400, {error: "Username Required"})
        }
        if(password1 !== password){
            return fail(400, {error: "Password do not match!"})
        }

        try{
            const res= await fetch(`${API}registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    username,
                    password
                })
            })

            const result = await res.json()
            if(!res.ok){
                return fail(res.status, {
                    error: result.detail || 'Failed to signup'
                })
            }

        } catch (err) {
            console.log(err)
        }

        throw redirect(302, '/auth/login')
    }
};