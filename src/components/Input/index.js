import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export default function Index({ label, desc, ...rest }) {
  return (
    <div className="w-full max-w-md">
      <Field>
        <Label className="text-sm/6 font-medium">{label}</Label>
        <Description className="text-sm/6">{desc}</Description>
        <Input
          className={clsx(
            "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
          {...rest}
        />
      </Field>
    </div>
  );
}
