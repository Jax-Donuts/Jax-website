import { useEffect, useMemo, useState } from "react";
import {
  LatitudeLongitude,
  ShopLocation,
  calculateDistanceMiles,
  warningLogger,
} from "../../shared/utility";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
} as const;

export function useLocation() {
  const [userLocation, setUserLocation] = useState<LatitudeLongitude>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  function success(position: GeolocationPosition) {
    setUserLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  }

  const distance = useMemo(() => {
    if (userLocation) {
      return calculateDistanceMiles(ShopLocation, userLocation);
    }
  }, [userLocation]);

  return distance;
}

function error(err: GeolocationPositionError) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  warningLogger("location", `ERROR(${err.code}): ${err.message}`);
}
