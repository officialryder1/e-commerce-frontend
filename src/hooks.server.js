import jwt from 'jsonwebtoken'

import { isTokenExpired } from '$lib/utils/tokenUtil'
import { sequence } from '@sveltejs/kit/hooks'
import {SECRET, API} from '$env/static/private'
import { redirect } from '@sveltejs/kit'


const firstHandle = async({event, resolve}) => {
    const accessToken = event.cookies.get('access_token')

   
    if (accessToken){
        if(isTokenExpired(accessToken)){
            throw redirect(302, '/auth/logout')
        }
        try{
             // decode user from access token
            const user = jwt.decode(accessToken, SECRET)

            // get user id to use to retrieve data from db
            const user_id = user.user_id

            // fetch the user data from backend
            const res = await fetch(`${API}user_me?user_id=${user_id}`)

            if(res.ok){
                const userDetail = await res.json()
                event.locals.user =userDetail
                
            } else{
                console.error("Failed to fetch user")
            }
        }
        catch(err){
            console.error("invalid token", err)
        }
    }
    
    const response = await resolve(event)

    return response

}

export const handle = sequence(firstHandle)