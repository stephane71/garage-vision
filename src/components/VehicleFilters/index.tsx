import { Button } from "@/components/ui/button.tsx";
import type { InspectionStatus, Vehicle } from "@/types";

const INSPECTION_STATUS_LABELS: Record<InspectionStatus, string> = {
  pending: "En attente",
  in_progress: "En cours",
  completed: "Terminé",
  failed: "Échoué",
};

const INSPECTION_STATUSES = Object.keys(
  INSPECTION_STATUS_LABELS,
) as InspectionStatus[];

export type VehicleFilter = {
  status?: InspectionStatus;
};

export type VehicleFiltersProps = {
  onClickFilter: (
    filter: keyof Pick<Vehicle, "status">,
    value?: InspectionStatus,
  ) => void;
  filters?: VehicleFilter;
};

export const VehicleFilters = ({
  onClickFilter,
  filters,
}: VehicleFiltersProps) => {
  return (
    <div className="mb-4 flex gap-2">
      {INSPECTION_STATUSES.map((status) => (
        <Button
          key={status}
          variant={filters?.status === status ? "default" : "outline"}
          size="lg"
          onClick={() => {
            const newStatus = filters?.status === status ? undefined : status;
            onClickFilter("status", newStatus);
          }}
        >
          {INSPECTION_STATUS_LABELS[status]}
        </Button>
      ))}
    </div>
  );
};
