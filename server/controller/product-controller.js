import Product from '../model/product-schema.js';
import Product2 from '../model/product2-schema.js';

// Get all products
export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        response.status(200).json(products);  // Return the list of products
    } catch (error) {
        response.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};
 
// Get all products from Product2
export const getProducts2 = async (request, response) => {
    try {
        const product2 = await Product2.find({});
        response.status(200).json(product2);  // Return the list of products from Product2
    } catch (error) {
        response.status(500).json({ message: 'Error fetching product2', error: error.message });
    }
};


// Get product by ID (for Product)
export const getProductById = async (request, response) => {
    try {
        const id = request.params.id;
        console.log(`Fetching product with ID: ${id}`); // Debugging log
        const product = await Product.findOne({'id': id });  // Use MongoDB's default _id field

        if (!product) {
            console.error('Product not found');
            return response.status(404).json({ message: 'Product not found' });  // Return 404 if not found
        }

        response.status(200).json(product);  // Return the found product
    } catch (error) {
        console.error('Error fetching product:', error); // Debugging log
        response.status(500).json({ message: 'Error fetching product', error: error.message });
    }
};

// Get product2 by ID (for Product2)
export const getProductById2 = async (request, response) => {
    try {
        const id = request.params.id;
const product2 = await Product2.findById(id);  // Use MongoDB's default _id field
        if (!product2) {
            return response.status(404).json({ message: 'Product2 not found' });  // Return 404 if not found
        }
        response.status(200).json(product2);  // Return the found product2
    } catch (error) {
        response.status(500).json({ message: 'Error fetching product2', error: error.message });
    }
};
