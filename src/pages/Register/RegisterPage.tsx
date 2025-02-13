import PageLoading from "../../components/PageLoading";
import { Suspense } from "react";
import NonAuthenticatedRoute from "../../auth/NonAuthenticatedRoute";
import Register from "./Register";

const RegisterPage = () => (
  <div style={{ height: "100vh" }}>
    <NonAuthenticatedRoute>
      <Suspense fallback={<PageLoading />}>
        <Register />
      </Suspense>
    </NonAuthenticatedRoute>
  </div>
);

export default RegisterPage;
