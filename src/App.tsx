import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import {
  type VehicleFilter,
  VehicleFilters,
} from "./components/VehicleFilters";
import type { InspectionStatus, Vehicle } from "@/types";
import { VehicleList } from "@/components/VehicleList";
import { useVehicles } from "@/hooks/useVehicles.ts";

const queryClient = new QueryClient();

const APP_NAME = "Garage Vision";

function App() {
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [filters, setFilters] = useState<VehicleFilter>({});

  const {vehicles, isLoading, error} = useVehicles({ filters });

  const handleClickVehicle = useCallback((id: string) => {
    setSelectedVehicleId((currentSelectedVehicleId) =>
      id === currentSelectedVehicleId ? "" : id,
    );
  }, []);

  const handleClickFilter = (
    filter: keyof Pick<Vehicle, "status" | "year">,
    value?: InspectionStatus,
  ) => {
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
          vehicleList={vehicles}
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
