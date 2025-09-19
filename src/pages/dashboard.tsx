// pages/dashboard.tsx
'use client'; // Necesario si usas App Router; omítelo si usas Pages Router

import { useRouter } from 'next/router'; // Usa 'next/navigation' si estás en App Router

const Dashboard = () => {
  const router = useRouter();
  const { usuarioname } = router.query; // Obtiene el usuarioname de los query params

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      {usuarioname ? (
        <h2>Hola, {usuarioname}!</h2>
      ) : (
        <p>No se encontró información del usuario.</p>
      )}
      <button
        onClick={() => router.push('/')}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Dashboard;