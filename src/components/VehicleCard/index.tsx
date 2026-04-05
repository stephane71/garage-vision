import { Vehicle } from "../Vehicle";
import { Card } from "../../ui/Card";
import type { Vehicle as VehicleType } from "../../types";

export type VehicleCardProps = {
  borderRadius?: number;
  vehicle: VehicleType;
};

export const VehicleCard = ({
  borderRadius,
  ...propsVehicle
}: VehicleCardProps) => {
  return (
    <Card borderRadius={borderRadius}>
      <Vehicle {...propsVehicle} />
    </Card>
  );
};
