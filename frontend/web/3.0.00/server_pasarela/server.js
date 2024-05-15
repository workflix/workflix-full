// This is your test secret API key.
const stripe = require('stripe')('sk_test_51PGmuUByU9zDfoe2ehqFj0Cv5VFaiH6v2vi9efUAjU08Drswd9NEFHh9EdqgGXYuEiLIavpkz81Xc2kah29XBhcf00D6mXXxfm');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(cors())
app.use(bodyParser.json());

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/checkout', async (req, res) => {
  const items = req.body.items.map((item) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.nombre,
        },
        unit_amount: item.precio * 100,
      },
      quantity: item.precio
    }
  });
