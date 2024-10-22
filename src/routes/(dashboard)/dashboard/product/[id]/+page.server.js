import { API } from '$env/static/private'
import { redirect } from '@sveltejs/kit'

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


export const actions = {
    uploadImage: async({request, cookies}) => {

        const data = await request.formData()
        const token = cookies.get('access_token')

        const id = data.get('id')
        const product_image = data.get('product_image')

        if (!(product_image instanceof File)) {
            console.error("The product_image is not a file.");
            return;
        }

        const formData = new FormData()
        formData.append('file', product_image)
        
        const res = await fetch(`${API}uploadfile/product/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },

            body: formData
        })

     
        if(res.ok){
            throw redirect(302, `/dashboard/product/${id}`)
        }
        console.log(await res.json())
    },

    uploadProduct: async ({request, cookies}) => {

        const data = await request.formData()
        const user_token = cookies.get('access_token')

        const name = data.get('name')
        const category = data.get('category')
        const original_price = data.get('original_price')
        const new_price = data.get('new_price')
        const offer_exp_date = data.get('offer_exp_date')
        const product_image = data.get('product_image')
        const id = data.get('id')

       console.log(
        name,
        category,
        original_price,
        new_price,
        offer_exp_date,
        product_image
       )

        const res = await fetch(`${API}product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user_token}`
            },
            body: JSON.stringify({
                name,
                category,
                original_price,
                new_price,
                offer_exp_date,
                product_image
            })
        })

        if(!res.ok){
            console.error("Actions failed.")
        }
        throw redirect(302, `/dashboard/product/${id}`)
    }
};