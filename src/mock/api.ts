import type { Technician, Vehicle } from "../types";
import { MOCK_TECHNICIANS, MOCK_VEHICLES } from "./data.ts";

const LATENCY = 800; // ms — makes loading states visible in the UI

// --- Read operations ---

export const getVehicles = (): Promise<Vehicle[]> =>
  new Promise((resolve) =>
    setTimeout(() => resolve([...MOCK_VEHICLES]), LATENCY),
  );

export const getVehicle = (id: string): Promise<Vehicle> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const v = MOCK_VEHICLES.find((v) => v.id === id);
      if (v) resolve({ ...v });
      else reject(new Error(`Vehicle ${id} not found`));
    }, LATENCY),
  );

export const getTechnicians = (): Promise<Technician[]> =>
  new Promise((resolve) =>
    setTimeout(() => resolve([...MOCK_TECHNICIANS]), LATENCY),
  );

// --- Write operations ---

export const updateRecord = (
  id: string,
  data: Partial<Vehicle>,
): Promise<Vehicle> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const index = MOCK_VEHICLES.findIndex((v) => v.id === id);
      if (index === -1) return reject(new Error("Vehicle not found"));
      MOCK_VEHICLES[index] = { ...MOCK_VEHICLES[index], ...data };
      resolve({ ...MOCK_VEHICLES[index] });
    }, LATENCY),
  );
