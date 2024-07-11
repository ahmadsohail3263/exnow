import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/button";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="w-full">
        <div className="max-w-[700px] md:mx-auto bg-white p-12 rounded-lg mx-3">
          <div className="pb-8">
            <h1 className="text-3xl">Login</h1>
            <p className="mt-2">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              autoCompelete="email"
              title="Email"
              onchange={handleChange}
            />
            <Input
              type="password"
              name="password"
              autoCompelete="password"
              title="Password"
              onchange={handleChange}
            />
            <Button type="submit" label="Login " />
          </form>

          <p className="mt-2">Don't have an account? Sign up</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
