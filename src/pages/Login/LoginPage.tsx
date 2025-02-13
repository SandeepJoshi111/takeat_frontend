import PageLoading from "../../components/PageLoading";
import { Suspense } from "react";
import NonAuthenticatedRoute from "../../auth/NonAuthenticatedRoute";
import Login from "./Login";

const LoginPage = () => (
  <div style={{ height: "100vh" }}>
    <NonAuthenticatedRoute>
      <Suspense fallback={<PageLoading />}>
        <Login />
      </Suspense>
    </NonAuthenticatedRoute>
  </div>
);

export default LoginPage;
