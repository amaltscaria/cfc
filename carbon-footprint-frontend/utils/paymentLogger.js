import axios from "axios";

const logPayment = async (name, amount, email, phone, country, address) => {
  try {

    const sendFormData = async () => {
      try {
        const formDataObject = {};
        formDataObject.name = name;
        formDataObject.number = phone;
        formDataObject.address = address;
        formDataObject.country = country;
        formDataObject.email = email;
        formDataObject.amount = amount;
        formDataObject.date = new Date().toISOString(),
        await fetch('https://script.google.com/macros/s/AKfycbzO9wW0TPXWKOZF-VVfYl-Xzobu_sLSJQA-pVLmMyzI5nQ3LtZmXQ5xx3RTsVNkL5IW/exec', {
          redirect: "follow",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
          body: new URLSearchParams(formDataObject).toString(),
        });
      } catch (error) {
        throw error;
      }
    };

    await sendFormData();
    // console.log("Payment logged:", response.data);
    // Optionally handle success feedback to the user
  } catch (error) {
    console.error("Error logging payment:", error);
    // Optionally handle error feedback to the user
  }
};

// Example usage after a successful payment
export const handleSuccessfulPayment = async (
  name,
  amount,
  email,
  phone,
  country,
  address
) => {
  await logPayment(name, amount, email, phone, country, address);
  // Optionally update UI or perform other actions
};
