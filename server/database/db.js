import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce.pldsz.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
    });
    console.log('Database Connected successfully');
  } catch (error) {
    console.log('Error while connecting with the database', error.message);
  }
};

export default Connection;
