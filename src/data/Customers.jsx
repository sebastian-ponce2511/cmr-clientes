export const getCustomers = async () => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = response.json();

  return result;
};

// Obtener un cliente para luego editar
export const getCustomer = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
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

export const updateCustomer = async (id, data) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
};
