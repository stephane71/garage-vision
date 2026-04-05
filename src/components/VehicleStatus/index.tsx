import type { InspectionStatus } from "../../types";

export type VehicleStatusProps = {
  status: InspectionStatus;
};

const statusConfig: Record<InspectionStatus, { label: string; color: string }> =
  {
    pending: { label: "En attente", color: "bg-yellow-400" },
    in_progress: { label: "En cours", color: "bg-blue-500" },
    completed: { label: "Terminé", color: "bg-green-500" },
    failed: { label: "Échoué", color: "bg-red-500" },
  };

export const VehicleStatus = ({ status }: VehicleStatusProps) => {
  const { label, color } = statusConfig[status];

  return (
    <div className="flex items-center gap-2">
      <span className={`inline-block h-2.5 w-2.5 rounded-full ${color}`} />
      <p>{label}</p>
    </div>
  );
};
