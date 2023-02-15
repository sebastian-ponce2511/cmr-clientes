import { useLoaderData } from "react-router-dom";
import Customer from "../components/Customer";

export const loader = () => {
  const customers = [
    {
      id: 1,
      name: "Juan",
      phone: 102013313,
      email: "juan@juan.com",
      company: "Coca Cola",
    },
    {
      id: 2,
      name: "Karen",
      phone: 138198313,
      email: "karen@juan.com",
      company: "Sony",
    },
    {
      id: 3,
      name: "Josue",
      phone: 31983913,
      email: "josue@juan.com",
      company: "Fiat",
    },
    {
      id: 4,
      name: "Miguel",
      phone: 319381983,
      email: "miguel@juan.com",
      company: "Nintendo",
    },
    {
      id: 5,
      name: "Pedro",
      phone: 1398198938,
      email: "pedro@juan.com",
      company: "Microsoft",
    },
  ];

  return customers;
};

const Index = () => {
  const data = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      {data.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((customer) => (
              <Customer customer={customer} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay clientes aún</p>
      )}
    </>
  );
};

export default Index;
