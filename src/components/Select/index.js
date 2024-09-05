import { Description, Field, Label, Select } from "@headlessui/react";
import clsx from "clsx";

export default function Index({ label, desc, list, ...rest }) {
  return (
    <div className="w-full max-w-md">
      <Field>
        <Label className="text-sm/6 font-medium text-white">{label}</Label>
        <Description className="text-sm/6 text-white/50">{desc}</Description>
        <div className="relative">
          <Select
            className={clsx(
              "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              "*:text-black"
            )}
            {...rest}
          >
            <option disabled selected value>
              select an option
            </option>
            {list?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </Field>
    </div>
  );
}
