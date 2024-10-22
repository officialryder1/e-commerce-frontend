import { PUBLIC_API } from '$env/static/public'


export const resendMail = async(user_id) => {
    const res = await fetch(`${PUBLIC_API}resend_mail?user_id=${user_id}`)
    
    const result = await res.json()

    if(!res.ok) {
        console.log(result)
    }
    return {
        message: result.data
    }
}