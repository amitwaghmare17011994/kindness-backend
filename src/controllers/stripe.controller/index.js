import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51J9xKuSIDB7z7pvSdaft9AmCKzZ5LXtNwXFEYZOry11vosmBC1yaokl048dp2wW2URCvOw0vCJPYauRN3bSuGzpI000twIaW5t', {
    apiVersion: '2020-08-27',
    typescript: false,
  });

class StripeController {

  paymentIntent = async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 3000, //30
      currency: "usd",
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  };
}

export default new StripeController();
