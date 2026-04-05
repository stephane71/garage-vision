import type { Vehicle as VehicleType } from "../../types";
import { VehicleStatus } from "../VehicleStatus";

export type VehicleProps = {
  vehicle: VehicleType;
};

export const Vehicle = ({ vehicle }: VehicleProps) => {
  return (
    <div className="flex w-full justify-between gap-4">
      <div>
        <div>
          {vehicle.make} {vehicle.model} {vehicle.year}
        </div>
        <div>{vehicle.licensePlate}</div>
      </div>
      <div className="flex items-center">
        <VehicleStatus status={vehicle.status} />
      </div>
    </div>
  );
};
