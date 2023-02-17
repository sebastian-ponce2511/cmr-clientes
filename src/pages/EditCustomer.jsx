import { getCustomer, updateCustomer } from "../data/Customers";
import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect,
} from "react-router-dom";
import CustomerForm from "../components/CustomerForm";
import Error from "../components/Error";

export const loader = async ({ params }) => {
  const customer = await getCustomer(params.clienteId);
  // Generar error cuando no se encuentra el cliente o id
  if (Object.values(customer).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Cliente no existente",
    });
  }
  return customer;
  return null;
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); // Este objeto va guardando los datos del form
  const email = formData.get("email");

  console.log(data);

  // Validación
  const errors = [];
  if (Object.values(data).includes("")) {
    errors.push("llenar todos los campos");
  }
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errors.push("Ingresa un email válido");
  }

  // Retornar datos si hay errores
  if (Object.keys(errors).length) {
    return errors;
  }
  // Actualizar cliente
  await updateCustomer(params.clienteId, data);
  return redirect("/");
};

const EditCustomer = () => {
  const navigate = useNavigate();
  const customer = useLoaderData();
  const errors = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        A continuación podrás modificar los datos de un cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto mt-10 px-5 py-10">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="POST" noValidate>
          {/* noValidate deshabilita la comprobación de email de HTML por defecto */}
          <CustomerForm customer={customer} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 hover:cursor-pointer hover:bg-blue-900 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default EditCustomer;
