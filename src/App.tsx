import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  type VehicleFilter,
  VehicleFilters,
} from "./components/VehicleFilters";
import type { InspectionStatus, Vehicle } from "@/types";
import { getVehicles } from "@/mock/api.ts";
import { VehicleList } from "@/components/VehicleList";
import { filterVehicles } from "@/utils/filterVehicles.ts";

const queryClient = new QueryClient();

const APP_NAME = "Garage Vision";

function App() {
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [vehicleList, setVehicleList] = useState<Vehicle[]>([]);
  const [vehicleListFiltered, setVehicleListFiltered] = useState<Vehicle[]>([]);
  const [filters, setFilters] = useState<VehicleFilter>({});
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

  useEffect(() => {
    const filtered = filterVehicles(vehicleList, filters);
    setVehicleListFiltered(filtered);
  }, [filters, vehicleList]);

  const handleClickVehicle = (id: string) => {
    const selectedVehicle = id === selectedVehicleId ? "" : id;
    setSelectedVehicleId(selectedVehicle);
  };

  const handleClickFilter = (
    filter: keyof Pick<Vehicle, "status" | "year">,
    value?: InspectionStatus,
  ) => {
    const filtered = filterVehicles(vehicleList, filters);

    setVehicleListFiltered(filtered);
    setSelectedVehicleId("");
    setFilters({ ...filters, [filter]: value });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto max-w-3xl p-4">
        <h1 className="mb-10 text-center text-2xl">{APP_NAME}</h1>
        <div className={selectedVehicleId ? "" : "invisible"}>
          Véhicule sélectionné: {selectedVehicleId}
        </div>

        <VehicleFilters onClickFilter={handleClickFilter} filters={filters} />

        <VehicleList
          vehicleList={vehicleListFiltered}
          selectedVehicleId={selectedVehicleId}
          onClickVehicleCard={handleClickVehicle}
          isLoading={isLoading}
          error={error}
        />
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
