import Image from "next/image";
import React from "react";
import { Select } from "antd";
export default function THeader() {
  return (
    <header className="p-2 flex items-center bg-[#00bebe] text-white justify-between">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
      <div className="flex-1 text-right tools">
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />
      </div>
    </header>
  );
}
