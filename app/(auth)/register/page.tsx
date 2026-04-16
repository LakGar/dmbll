"use client";

import RegisterForm from "@/components/registerForm";
import AuthLeft from "@/components/authLeft";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-2 bg-white h-screen">
      <AuthLeft />
      <div className="flex-1 h-full flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Page;
