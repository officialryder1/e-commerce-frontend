export const GET = async({cookies}) => {
    cookies.delete('access_token', {path: '/'})

    return new Response(null, {
        status: 302,
        headers: {
            location: '/auth/login'
        }
    })
}