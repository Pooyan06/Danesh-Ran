import AuthHeader from "../_pages/auth/AuthHeader";

export default function layout({ children }) {
  return (
    <>
      <AuthHeader />
      <main className="flex flex-1 items-center justify-center">
        {children}
      </main>
    </>
  );
}
