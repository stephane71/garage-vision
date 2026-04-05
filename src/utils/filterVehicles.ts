import type { Vehicle } from "@/types";
import type { VehicleFilter } from "@/components/VehicleFilters";

export const filterVehicles = (
  vehicleList: Vehicle[],
  filters: VehicleFilter,
): Vehicle[] => {
  if (filters.status) {
    return vehicleList.filter((v) => v.status === filters.status);
  }

  return vehicleList;
};
