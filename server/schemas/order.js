const yup = require('yup');


const orderSchema = yup.object().shape({
  items: yup.array().of(
    yup.object().shape({
      product: yup.string().required(),
      quantity: yup.number().required().positive().integer(),

      name: yup.string().required(),
      price: yup.string().required()
    })
  )
  .min(1)
  .max(100)
  .required(),
});

module.exports = {
  orderSchema
};
