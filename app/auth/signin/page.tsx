import { SignInForm } from "@/src/components/auth/SignInForm";

async function Login() {
  return (
    <div className="h-[70vh] grid place-items-center">
      <div>
        <h1 className="mb-10 text-blue text-4xl font-bold">
          Welcome to Travel CMS
        </h1>
        <p className="mb-8 max-w-sm">
          <strong className="font-bold">
            Before we getting started just login first
          </strong>
        </p>

        <SignInForm />
      </div>
    </div>
  );
}

export default Login;
