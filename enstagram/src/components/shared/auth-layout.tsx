interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center w-full p-5">
      {children}
    </div>
  );
}

export default AuthLayout;
