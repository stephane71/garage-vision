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
import { Button } from "@/components/ui/button.tsx";
import { X } from "lucide-react";
import {
  CreateInspectionForm,
  type InspectionFormData,
} from "@/components/CreateInspectionForm";
import { CreateInspectionRHF } from "@/components/CreateInspectionRHF";

const queryClient = new QueryClient();

const APP_NAME = "Garage Vision";

function App() {
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [filters, setFilters] = useState<VehicleFilter>({});
  const [showNewInspectionForm, setShowNewInspectionForm] = useState(false);

  const { vehicles, isLoading, error } = useVehicles({ filters });

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

  const handleSubmitCreateInspectionForm = (data: InspectionFormData) => {
    setShowNewInspectionForm(false);
    alert("Nouvelle inspection" + JSON.stringify(data));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative mx-auto max-w-3xl p-4">
        <h1 className="mb-10 text-center text-2xl">{APP_NAME}</h1>
        <div className={selectedVehicleId ? "" : "invisible"}>
          Véhicule sélectionné: {selectedVehicleId}
        </div>

        <div className="flex justify-between">
          <VehicleFilters onClickFilter={handleClickFilter} filters={filters} />
          <Button
            size={"lg"}
            onClick={() => setShowNewInspectionForm(true)}
            variant="ghost"
          >
            Ajouter une inspection
          </Button>
        </div>

        <VehicleList
          vehicleList={vehicles}
          selectedVehicleId={selectedVehicleId}
          onClickVehicleCard={handleClickVehicle}
          isLoading={isLoading}
          error={error}
        />

        <div
          className={`${showNewInspectionForm ? "" : "invisible"} absolute inset-0 bg-white p-4`}
        >
          <div className="mb-4 flex justify-between">
            <div className="text-xl">Nouvelle inspection</div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setShowNewInspectionForm(false)}
              aria-label="Fermer"
            >
              <X className="h-4 w-4" aria-hidden />
            </Button>
          </div>

          <div className="w-full">
            <CreateInspectionForm onSubmit={handleSubmitCreateInspectionForm} />
            <CreateInspectionRHF onSubmit={handleSubmitCreateInspectionForm} />
          </div>
        </div>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
