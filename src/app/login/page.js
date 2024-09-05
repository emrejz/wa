"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Box from "@/components/Box";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const { success } = await res.json();

    if (success) {
      router.push("/");
      router.refresh();
    } else {
      toast.warn("Wrong username or password!");
    }
  };

  return (
    <Box className={"h-full"}>
      <form onSubmit={handleSubmit}>
        <Box className={"gap-4"}>
          <Input label="Username" type="text" name="username" />
          <Input label="Password" type="password" name="password" />
          <Button type="submit">Login</Button>
        </Box>
      </form>
    </Box>
  );
}
