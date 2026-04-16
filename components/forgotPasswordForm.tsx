"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import Link from "next/link";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="h-full w-full  px-4 md:px-16 py-10 text-black flex items-center justify-center">
      <div className="flex h-full flex-col md:justify-between justify-center w-full md:max-w-lg">
        <h1 className="text-xl md:text-3xl font-extrabold tracking-tighter mb-18 md:mt-0">
          DMBLL
        </h1>

        <form className="my-10">
          <FieldGroup className="gap-2">
            <FieldLegend className="mb-0">Forgot Password</FieldLegend>
            <FieldDescription className="mb-4">
              Enter your accout email to recieve the code
            </FieldDescription>
            <FieldSet>
              <FieldGroup className="gap-0">
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Email
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="example@example.com"
                    required
                    type="email"
                    value={email}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? <Spinner /> : "Send code"}
            </Button>
            <FieldDescription className="text-red-500">
              {error}
            </FieldDescription>
          </FieldGroup>
        </form>

        <div className="mt-18 text-center text-sm text-black/45">
          Have an account?{" "}
          <Link
            href={"/login"}
            className="font-medium text-blue-600 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
