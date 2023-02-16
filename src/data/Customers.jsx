export const getCustomers = async () => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = response.json();

  return result;
};

export const addCustomer = async (data) => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
};
