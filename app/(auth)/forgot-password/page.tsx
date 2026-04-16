"use client";

import ForgotPasswordForm from "@/components/forgotPasswordForm";
import AuthLeft from "@/components/authLeft";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-2 bg-white h-screen">
      <AuthLeft />
      <div className="flex-1 h-full flex items-center justify-center">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default Page;
