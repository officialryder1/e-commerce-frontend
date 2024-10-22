import { fail, redirect } from "@sveltejs/kit";
import { API } from '$env/static/private'


export async function load({locals}) {
    const user = locals.user
    if (user){
        throw redirect(302, '/')
    }
}

export const actions = {
    default: async({request, cookies}) => {

        const data = await request.formData()

        const username = data.get('username')
        const password = data.get('password')

        if(!username || username.trim().length === 0){
            return fail(400, {error: "Username is required"})
        }

        
        try{
            const res = await fetch(`${API}token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    username: username,
                    password: password
                })
            })
            const result = await res.json()
            if(!res.ok){
                console.log(result.detail)
                return fail(400, {error: "Login Failed"})
            }
            

            // set cookies if ok
            cookies.set('access_token', result.access_token, {
                path: '/',
                httpOnly: true,
                secure: true,
                sameSite: 'Strict'
            })
            
            
            
        } 
        catch(err){
            console.error(err)
            return fail(500, { error: "Something went wrong during login. try refreshing the page again..." });
        }
        
        throw redirect(302, '/')
    }
};