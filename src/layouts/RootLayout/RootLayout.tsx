import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Suspense, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "../../components/PageLoading";
import RootSidebar from "./RootSidebar";
import AuthenticatedRoute from "../../auth/AuthenticatedRoute";
import useAuth from "../../auth/useAuth";

const RootLayout = () => {
  const { isLoggedIn } = useAuth();
  const hasCheckedAuth = useRef(false);
  useEffect(() => {
    if (hasCheckedAuth.current || !isLoggedIn) {
      return;
    }
    hasCheckedAuth.current = true;
  }, [isLoggedIn]);
  return (
    <AuthenticatedRoute>
      <Layout style={{ height: "100vh" }}>
        <RootSidebar />
        <Content style={{ overflow: "auto" }}>
          <div style={{ padding: "16px 24px" }}>
            <Suspense fallback={<PageLoading />}>
              <Outlet />
            </Suspense>
          </div>
        </Content>
      </Layout>
    </AuthenticatedRoute>
  );
};

export default RootLayout;
