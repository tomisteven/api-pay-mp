const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config();

class PaymentService {
  async createPayment(req, res) {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const payment = await axios.post(url, req.body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  }

  async createSubscription(req, res) {
    const url = "https://api.mercadopago.com/preapproval";

    const subscription = await axios.post(url, req.body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return subscription.data;
  }
}

module.exports = PaymentService;


/* 	{
      "reason": "Suscripción de ejemplo",
      "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 5,
        "currency_id": "ARS"
      },
     "back_url": "https://google.com.ar",
      "payer_email": "naycancio97@gmail.com"
    } */



    /*
    {
      payer_email: "",
      items: [
        {
          title: "Dummy Title",
          description: "Dummy description",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "category123",
          quantity: 1,
          unit_price: 10,
        },
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success",
      },
    }
    */