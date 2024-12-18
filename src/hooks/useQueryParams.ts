import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useQueryParams = () => {
  const location = useLocation(); // Using `useLocation` to get current URL
  const [params, setParams] = useState<URLSearchParams>(
    new URLSearchParams(location.search)
  );

  useEffect(() => {
    const handlePopState = () => {
      setParams(new URLSearchParams(location.search));
    };
    handlePopState();
    return () => {};
  }, [location.search]);

  return {
    brand: params.get("brand"),
    deviceId: params.get("deviceId"),
    serviceId: params.get("serviceId"),
  };
};

export default useQueryParams;
