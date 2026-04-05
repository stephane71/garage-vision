import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MOCK_VEHICLES } from "./mock/data.ts";
import { VehicleCard } from "./components/VehicleCard";
import { useState } from "react";

const queryClient = new QueryClient();

const APP_NAME = "Garage Vision";

function App() {
  const [selectedVehicleId, setSelectedVehicleId] = useState("");

  const handleClickVehicle = (id: string) => {
    const selectedVehicle = id === selectedVehicleId ? "" : id;
    setSelectedVehicleId(selectedVehicle);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto max-w-3xl p-4">
        <h1 className="mb-10 text-center text-2xl">{APP_NAME}</h1>
        <div className={selectedVehicleId ? "" : "invisible"}>
          Véhicule sélectionné: {selectedVehicleId}
        </div>
        <div className="flex flex-col gap-4">
          {MOCK_VEHICLES.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              isSelected={vehicle.id === selectedVehicleId}
              onClick={handleClickVehicle}
            />
          ))}
        </div>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
