import { Vehicle } from "../Vehicle";
import { Card } from "../../ui/Card";
import type { Vehicle as VehicleType } from "../../types";

export type VehicleCardProps = {
  borderRadius?: number;
  vehicle: VehicleType;
  isSelected: boolean;
  onClick?: (id: string) => void;
};

export const VehicleCard = ({
  borderRadius,
  onClick,
  isSelected,
  ...propsVehicle
}: VehicleCardProps) => {
  return (
    <Card
      borderRadius={borderRadius}
      onClick={() => onClick?.(propsVehicle.vehicle.id)}
      isSelected={isSelected}
    >
      <Vehicle {...propsVehicle} />
    </Card>
  );
};
