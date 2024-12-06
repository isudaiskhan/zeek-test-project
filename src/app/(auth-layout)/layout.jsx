import AuthLayoutWrapper from "@/components/LayoutWrappers/Auth/LayoutWrapper";

const AuthLayout = ({ children }) => {
  return (
    <AuthLayoutWrapper>
      <>{children}</>
    </AuthLayoutWrapper>
  );
};

export default AuthLayout;
