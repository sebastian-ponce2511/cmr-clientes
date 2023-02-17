import { useNavigate } from "react-router-dom";

const Customer = ({ customer }) => {
  const navigate = useNavigate();
  const { name, phone, email, company, id } = customer;

  return (
    <tr className="border-b" key={id}>
      <td className="p-6">
        <p className="text-2xl text-gray-800">{name}</p>
        <p className="mt-2">{company}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600 text-center">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className="text-gray-600 text-center mt-2">
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {phone}
        </p>
      </td>

      <td className="p-6 flex gap-4 justify-evenly">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-800 uppercase
          font-bold text-xs"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="text-red-600 hover:text-red-800 uppercase font-bold text-xs"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Customer;
