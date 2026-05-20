"use client";
import { authClient } from "@/lib/auth-client";
import { ArrowDownToSquare, Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
    toast.error("Invalid credentials!");
    return;
  }

  toast.success("SignIn successful!");
  };

  const handlGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };



  return (
    <Card className="border mx-auto w-80 md:w-125 max-w-7xl py-10 mt-5 items-center">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex md:w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
          
        >
          <Label>Email</Label>
          <Input
            placeholder="john@example.com"
             
            />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button
            type="submit"
            variant="flat"
            style={{
              backgroundColor: "#34A853",
              color: "#ffffff",
            }}
            
          >
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary" style={{ color: "#34A853" }}>
            Reset
          </Button>
        </div>
      </Form>
      <div className="flex gap-3 items-center">
        <p className="text-center">Don’t have an account?</p>

        <Link href={"/signup"} className="text-[#34A853]">
          <Button variant="light" style={{ color: "#34A853" }}>
            SignUp
          </Button>
        </Link>
      </div>

      <p className="text-center">Or</p>

      <Button onClick={handlGoogleSignIn} variant="outline" className={""}>
        <GrGoogle /> Sign In With Google
      </Button>
    </Card>
  );
}
