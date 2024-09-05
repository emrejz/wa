import { Button } from "@headlessui/react";

export default function Index({ children, ...props }) {
  return (
    <Button
      className="w-full text-center text-white items-center gap-2 rounded-md bg-orange-700 py-1.5 px-3 text-sm/6 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-orange-600 data-[open]:bg-orange-700 data-[focus]:outline-1 data-[focus]:outline-white"
      {...props}
    >
      {children}
    </Button>
  );
}
