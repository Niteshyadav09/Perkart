import mongoose from 'mongoose';

const product2Schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    id:String,
    Title:String,
    Name:String, 
    Image:String,
    Actualprice: String,
    Price: String,
    Rating:Number,
    Discount: Number,
    Availableoffer: String,
    Numberofrating:String
});

const Product2 = mongoose.model('product2', product2Schema);
export default Product2;

    