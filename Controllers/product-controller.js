import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {
        console.log(error);
        response.status(500).send({
            msg:"Error"
        })

        
    }
}

export const getProductById = async (request, response) => {
    
    try {
        console.log(request.params.id)
        const product = await Product.findOne({ _id: request.params.id });
        console.log(product);
        response.send(product);
    }catch (error) {
        console.log(error);
        response.status(500).send({
            msg:"Error"
        })

    }
}