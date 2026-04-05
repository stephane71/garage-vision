import type { Vehicle, Technician } from "../types";

// --- Inspection center technicians ---

export const MOCK_TECHNICIANS: Technician[] = [
  {
    id: "TECH-001",
    lastName: "Durand",
    firstName: "Sophie",
    specialty: "Passenger vehicles",
  },
  {
    id: "TECH-002",
    lastName: "Martinez",
    firstName: "Lucas",
    specialty: "Vans & light commercials",
  },
  {
    id: "TECH-003",
    lastName: "Petit",
    firstName: "Nathalie",
    specialty: "Electric & hybrid vehicles",
  },
  {
    id: "TECH-004",
    lastName: "Nguyen",
    firstName: "Thomas",
    specialty: "Passenger vehicles",
  },
];

// --- Vehicles registered for technical inspection ---

export const MOCK_VEHICLES: Vehicle[] = [
  {
    id: "VH-001",
    licensePlate: "AB-123-CD",
    make: "Renault",
    model: "Clio V",
    year: 2021,
    status: "pending",
  },
  {
    id: "VH-002",
    licensePlate: "EF-456-GH",
    make: "Peugeot",
    model: "308",
    year: 2019,
    status: "completed",
    technicianId: "TECH-001",
    inspectionDate: "2026-03-15",
    remarks:
      "Front brake pads wearing — monitor at next inspection. Next check-up in 2 years.",
  },
  {
    id: "VH-003",
    licensePlate: "JK-789-LM",
    make: "Citroen",
    model: "C3 Aircross",
    year: 2022,
    status: "in_progress",
    technicianId: "TECH-002",
  },
  {
    id: "VH-004",
    licensePlate: "NP-012-QR",
    make: "Dacia",
    model: "Sandero",
    year: 2020,
    status: "failed",
    technicianId: "TECH-001",
    inspectionDate: "2026-03-10",
    remarks:
      "Re-inspection required: left brake light out, excessive steering play. Deadline: 2 months.",
  },
  {
    id: "VH-005",
    licensePlate: "ST-345-UV",
    make: "Volkswagen",
    model: "Golf VIII",
    year: 2023,
    status: "pending",
  },
  {
    id: "VH-006",
    licensePlate: "WX-678-YZ",
    make: "Toyota",
    model: "Yaris Cross",
    year: 2024,
    status: "completed",
    technicianId: "TECH-003",
    inspectionDate: "2026-03-28",
    remarks: "All clear — vehicle in excellent condition.",
  },
  {
    id: "VH-007",
    licensePlate: "BC-901-DE",
    make: "Renault",
    model: "Kangoo",
    year: 2018,
    status: "pending",
  },
  {
    id: "VH-008",
    licensePlate: "FG-234-HJ",
    make: "Ford",
    model: "Transit Custom",
    year: 2017,
    status: "in_progress",
    technicianId: "TECH-004",
  },
  {
    id: "VH-009",
    licensePlate: "KL-567-MN",
    make: "Peugeot",
    model: "e-208",
    year: 2023,
    status: "completed",
    technicianId: "TECH-003",
    inspectionDate: "2026-03-25",
    remarks: "Electric vehicle — HV battery inspection completed, compliant.",
  },
  {
    id: "VH-010",
    licensePlate: "PQ-890-RS",
    make: "Citroen",
    model: "Berlingo",
    year: 2019,
    status: "failed",
    technicianId: "TECH-002",
    inspectionDate: "2026-03-20",
    remarks:
      "Re-inspection: perforating corrosion on underbody, rear right brake hose leaking.",
  },
];
