import { useMemo, useState } from "react";

export const Location = () => {
  const [location, setLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");

  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: any) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setLocation({
        latitude: 37.483034,
        longitude: 126.902435,
      });
    }
  }, [navigator.geolocation.getCurrentPosition]);

  return location;
};
