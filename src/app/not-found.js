import Box from "@/components/Box";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box className="h-full">
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-orange-700 text-3xl">
        Return Home
      </Link>
    </Box>
  );
}
