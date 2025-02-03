import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData, { DefaultData2 } from './default.js'
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';
import Razorpay from "razorpay"

dotenv.config();


export const instance=new Razorpay({
  key_id:process.env.RAZORPAY_API_KEY,
  key_secret:process.env.RAZORPAY_API_SECRET,
});

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

(async () => {
  await Connection(USERNAME, PASSWORD);
  app.listen(PORT, () => console.log(`Server running successfully on PORT ${PORT}`));
  DefaultData();
  DefaultData2();
})();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
