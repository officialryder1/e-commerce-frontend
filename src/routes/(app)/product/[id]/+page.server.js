import { API } from '$env/static/private'

export const load = async ({ fetch, params }) => {

    const id = params.id
    const res = await fetch(`${API}product/${id}`)
    
    if(res.status === 200){
        const product = await res.json()
        return {
            product
        }
    }
    console.log("error fetching data..")


}