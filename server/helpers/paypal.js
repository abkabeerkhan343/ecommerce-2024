const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVI81lpQ9fdrO1_C2XC0zvP_grgTI2ffziuxM9E9uvjX3_x-6ebZDLFFoVU0zcbeVwDt94x6iiAQvRcq",
  client_secret: "EMTcbDB9oNkIjJY8WE5_-G9ZmxTFKSgQb-_26BUiYf6Z9DUE-R9u3vedCoBtHaLMWm7uSMCoKTPiKlSs",
});

module.exports = paypal;
