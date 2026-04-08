import { useEffect, useMemo, useState } from "react";
import type { Vehicle } from "@/types";
import { getVehicles } from "@/mock/api.ts";
import type { VehicleFilter } from "@/components/VehicleFilters";
import { filterVehicles } from "@/utils/filterVehicles.ts";

export type useVehiclesProps = {
  filters: VehicleFilter;
};

export const useVehicles = ({ filters }: useVehiclesProps) => {
  const [vehicleList, setVehicleList] = useState<Vehicle[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const vehicles = await getVehicles();
        setVehicleList(vehicles);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setError("Problème lors du chargement des véhicules");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const vehicleListFiltered: Vehicle[] = useMemo(() => {
    return filterVehicles(vehicleList, filters);
  }, [filters, vehicleList]);

  return { vehicles: vehicleListFiltered, isLoading, error };
};