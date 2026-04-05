import { VehicleCardMemo } from "@/components/VehicleCard";
import type { Vehicle } from "@/types";
import { Spinner } from "@/components/ui/spinner.tsx";

export type VehicleListProps = {
  vehicleList: Vehicle[];
  selectedVehicleId: string;
  onClickVehicleCard: (id: string) => void;
  isLoading?: boolean;
  error?: string;
};

export const VehicleList = ({
  vehicleList,
  selectedVehicleId,
  onClickVehicleCard,
  isLoading = false,
  error,
}: VehicleListProps) => {
  if (isLoading)
    return (
      <div className="flex h-56 items-center justify-center">
        <Spinner />
      </div>
    );

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col gap-4">
      {vehicleList.map((vehicle) => (
        <VehicleCardMemo
          key={vehicle.id}
          vehicle={vehicle}
          isSelected={vehicle.id === selectedVehicleId}
          onClick={onClickVehicleCard}
        />
      ))}
    </div>
  );
};
