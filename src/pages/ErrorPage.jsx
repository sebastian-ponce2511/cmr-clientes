import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold mt-2 text-blue-900">
        CMR - Clientes
      </h1>
      <p className="text-center">Hubo un error</p>
      <p className="text-center text-red-700 font-bold uppercase">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
