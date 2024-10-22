import {API} from '$env/static/private'
import { redirect } from '@sveltejs/kit';

let detail = []


export const actions = {
    uploadProduct: async({request, cookies}) => {

        const data = await request.formData()
        const user_token = cookies.get('access_token')

        const name = data.get('name')
        const category = data.get('category')
        const original_price = data.get('original_price')
        const new_price = data.get('new_price')
        const offer_exp_date = data.get('offer_exp_date')
        const product_image = data.get('product_image')

       

        const res = await fetch(`${API}product`, {
            method: 'POST',
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
        
       
        const details = await res.json()
        detail = [...detail, details]

        

    },
    uploadImage: async ({ request, cookies}) => {
        const data = await request.formData()
        const user_token = cookies.get('access_token')

       
        const detail_id = detail[0].data.id
        console.log(detail_id)
        
        console.log(detail_id) 
        const product_image = data.get('product_image')
        console.log(product_image)

        // Ensure that product_image is a file, not just a string
        if (!(product_image instanceof File)) {
            console.error("The product_image is not a file.");
            return;
        }

        const formData = new FormData()
        formData.append('file', product_image)
        
        const res = await fetch(`${API}uploadfile/product/${detail_id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user_token}`
            },

            body: formData
        })

        detail = []
        if(res.ok){
            throw redirect(302, '/dashboard')
        }
        console.log(await res.json())
    }
};
