import { products } from './constants/data.js';
import { product2 } from './constants/data2.js';  // Ensure the correct export name
import Product from './model/product-schema.js';
import Product2 from './model/product2-schema.js';

// Function to insert default data into Product collection
const DefaultData = async () => {
    try {
        // Clear the products collection
        await Product.deleteMany({});
      
        // Insert the default data
        await Product.insertMany(products);
        console.log('Default data inserted successfully');
    } catch (error) {
        console.log('Error while inserting the default data', error.message);
    }
};

// Function to insert default data into Product2 collection
const DefaultData2 = async () => {
    try {
        // Clear the products2 collection
        await Product2.deleteMany({});
      
        // Insert the default data
        await Product2.insertMany(product2);
        console.log('Default2 data inserted successfully');
    } catch (error) {
        console.log('Error while inserting the default data2', error.message);
    }
};

// Export both functions as named exports
export { DefaultData, DefaultData2 };

// Add a default export (if necessary, but not typical for this use case)
export default DefaultData;
