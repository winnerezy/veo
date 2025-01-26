"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import axios, { AxiosError } from "axios";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/lib";

interface Login {
  email: string;
  password: string;
}

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState<Login>(initialState);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleLogin = async () => {
    const res = await axios.post(
     `${BACKEND_URL}/api/v1/auth/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    const ans = res.data;
    router.push('/home')
  };
  const { mutate, isPending } = useMutation({
    mutationFn: handleLogin,
    mutationKey: ["login"],
    onError(error) {
      if (error instanceof AxiosError) {
        setError(JSON.stringify(error.response?.data));
      }
    },
  });
  return (
    <div className="flex flex-col py-6 px-4 gap-4 border w-[400px] rounded-2xl">
      <h1 className="text-3xl font-bold">Login To Veo</h1>

      <div>
        <Label>Email</Label>
        <Input
          placeholder="michael@gmail.com"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label>Password</Label>
        <Input
          placeholder="michael1234"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <span className="text-destructive text-center">{error}</span>
      <p>
        Don&apos;t have an account ?{" "}
        <Link className="text-primary" href={"/register"}>
          Register
        </Link>
      </p>
      <Button
        disabled={
          isPending ||
          Object.values(data).some((value: string) => value.trim() === "")
        }
        onClick={() => mutate()}
      >
      {
        isPending ? <span className="loader"></span> : "Login"
      } 
      </Button>
    </div>
  );
};

export default Login;
