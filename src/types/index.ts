export type InspectionStatus =
  | "pending"
  | "in_progress"
  | "completed"
  | "failed";

export interface Technician {
  id: string;
  lastName: string;
  firstName: string;
  specialty: string;
}

export interface Vehicle {
  id: string;
  licensePlate: string;
  make: string;
  model: string;
  year: number;
  status: InspectionStatus;
  technicianId?: string;
  inspectionDate?: string;
  remarks?: string;
}
