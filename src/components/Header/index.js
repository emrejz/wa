"use client";

import { useRouter } from "next/navigation";
import Box from "../Box";
import Button from "../Button";
import { toast } from "react-toastify";

export default function Header() {
  const router = useRouter();
  const onClick = async () => {
    try {
      const data = await fetch("/api/logout");
      const { success } = await data.json();

      if (success) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      toast.error(error || "an error occurred");
    }
  };

  return (
    <Box className="w-full static py-4 bg-orange-700">
      <Button className="w-200 self-end mr-4" onClick={onClick}>
        Logout
      </Button>
    </Box>
  );
}
