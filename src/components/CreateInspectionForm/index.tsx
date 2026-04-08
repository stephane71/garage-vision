import { type SubmitEvent, useState } from "react";
import { Button } from "@/components/ui/button.tsx";

export type InspectionFormData = {
  registrationNumber: string;
  technicianId: string;
};

export type CreateInspectionFormProps = {
  onSubmit: (data: InspectionFormData) => void;
};

export const CreateInspectionForm = ({
  onSubmit,
}: CreateInspectionFormProps) => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [technicianId, setTechnicianId] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    if (!registrationNumber) {
      newErrors.registrationNumber = "Le numéro d'immatriculation est requis";
    } else if (!/^[A-Z]{2}-\d{3}-[A-Z]{2}$/.test(registrationNumber)) {
      newErrors.registrationNumber = "Format invalide (ex : AB-123-CD)";
    }

    if (!technicianId) {
      newErrors.technicianId = "Le technicien est requis";
    }

    return newErrors;
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setIsSuccess(false);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setRegistrationNumber("");
    setTechnicianId("");

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    onSubmit(data as InspectionFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      {isSuccess && (
        <p className="text-sm text-green-600">Inspection créée avec succès !</p>
      )}

      <label className="flex flex-col gap-1">
        Numéro d'immatriculation
        <input
          name="registrationNumber"
          type="text"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value.toUpperCase())}
          placeholder="AB-123-CD"
          className="rounded border px-3 py-2"
        />
        {errors.registrationNumber && (
          <span className="text-sm text-red-500">
            {errors.registrationNumber}
          </span>
        )}
      </label>

      <label className="flex flex-col gap-1">
        Technicien
        <input
          name="technicianId"
          type="text"
          value={technicianId}
          onChange={(e) => setTechnicianId(e.target.value)}
          placeholder="Identifiant du technicien"
          className="rounded border px-3 py-2"
        />
        {errors.technicianId && (
          <span className="text-sm text-red-500">{errors.technicianId}</span>
        )}
      </label>

      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? "Envoi en cours..." : "Créer l'inspection"}
      </Button>
    </form>
  );
};
