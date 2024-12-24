import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useQueryParams = () => {
  const location = useLocation();
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
  const paramCount = params ? params.toString().split("&").length : 0;

  return {
    brand: params.get("brand"),
    deviceId: params.get("deviceId"),
    serviceId: params.get("serviceId"),
    locationId: params.get("locationId"),
    time : params.get("time"),
    date  : params.get("date"),
    paramCount,
  };
};

export default useQueryParams;
