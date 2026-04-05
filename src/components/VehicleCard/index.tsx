import { Vehicle } from "../Vehicle";
import { Card } from "../../ui/Card";
import type { Vehicle as VehicleType } from "../../types";

export type VehicleCardProps = {
  borderRadius?: number;
  vehicle: VehicleType;
  onClick?: (id: string) => void;
};

export const VehicleCard = ({
  borderRadius,
  onClick,
  ...propsVehicle
}: VehicleCardProps) => {
  return (
    <Card
      borderRadius={borderRadius}
      onClick={() => onClick?.(propsVehicle.vehicle.id)}
    >
      <Vehicle {...propsVehicle} />
    </Card>
  );
};
