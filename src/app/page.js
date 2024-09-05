"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Box from "@/components/Box";
import Select from "@/components/Select";
import Header from "@/components/Header";
import { CITIES } from "@/constants";
import { handleIconURL } from "@/utility";

export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const onChange = async (e) => {
    try {
      setLoading(true);
      setData();
      const res = await fetch("/api/weater", {
        method: "POST",
        body: JSON.stringify({ city: e.target.value }),
      });
      const { data } = await res.json();
      setData(data);
    } catch (error) {
      toast.error(error || "an error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Box>
        <Select
          label={"Select City"}
          list={CITIES}
          onChange={onChange}
          disabled={loading}
        />
        {data && (
          <Box>
            <img src={handleIconURL(data?.weather?.[0].icon)} />
            <div>
              {data?.name} - {data?.sys?.country}
            </div>
            <div>{Math.round(data?.main?.temp - 273)}&deg; C</div>
            <div>Description: {data?.weather?.[0].description}</div>
            <div>Humidity: {data?.main?.humidity}%</div>
          </Box>
        )}
      </Box>
    </>
  );
}
