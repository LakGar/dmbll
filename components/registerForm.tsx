"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import Link from "next/link";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="h-full w-full  px-4 md:px-16 py-10 text-black flex items-center justify-center">
      <div className="flex h-full flex-col md:justify-between justify-center w-full md:max-w-lg">
        <h1 className="text-xl md:text-3xl font-extrabold tracking-tighter mb-18 md:mt-0">
          DMBLL
        </h1>

        <div>
          <p className="text-sm md:text-lg text-blue-600">
            Register an account
          </p>

          <h2 className="mt-4 text-2xl md:text-6xl font-extrabold uppercase leading-[0.95] tracking-tighter">
            Welcome
            <br />
            to{" "}
            <span className="text-4xl md:text-6xl  font-black bg-[url('https://images.pexels.com/photos/29224211/pexels-photo-29224211.jpeg')] bg-clip-text text-transparent bg-cover bg-center">
              DMBLL
            </span>
          </h2>
        </div>

        <form className="my-10">
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
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
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                    Password
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-number-uw1"
                    placeholder="*********"
                    required
                    type="password"
                    value={password}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-number-uw1"
                    placeholder="*********"
                    required
                    type="password"
                    value={confirmPassword}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? <Spinner /> : "Register"}
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

export default RegisterForm;
