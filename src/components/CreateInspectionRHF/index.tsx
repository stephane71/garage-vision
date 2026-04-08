import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button.tsx";

const inspectionSchema = z.object({
  registrationNumber: z
    .string()
    .min(1, "Le numéro d'immatriculation est requis")
    .regex(/^[A-Z]{2}-\d{3}-[A-Z]{2}$/, "Format invalide (ex : AB-123-CD)"),
  technicianId: z.string().min(1, "Le technicien est requis"),
});

type InspectionFormData = z.infer<typeof inspectionSchema>;

export type CreateInspectionRHFProps = {
  onSubmit: (data: InspectionFormData) => void;
};

export const CreateInspectionRHF = ({ onSubmit }: CreateInspectionRHFProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InspectionFormData>({
    resolver: zodResolver(inspectionSchema),
    defaultValues: {
      registrationNumber: "",
      technicianId: "",
    },
  });

  const onFormSubmit = async (data: InspectionFormData) => {
    setIsSuccess(false);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSuccess(true);
    reset();
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex w-full flex-col gap-4"
    >
      {isSuccess && (
        <p className="text-sm text-green-600">Inspection créée avec succès !</p>
      )}

      <label className="flex flex-col gap-1">
        Numéro d'immatriculation
        <input
          {...register("registrationNumber", {
            onChange: (e) => {
              e.target.value = e.target.value.toUpperCase();
            },
          })}
          type="text"
          placeholder="AB-123-CD"
          className="rounded border px-3 py-2"
        />
        {errors.registrationNumber && (
          <span className="text-sm text-red-500">
            {errors.registrationNumber.message}
          </span>
        )}
      </label>

      <label className="flex flex-col gap-1">
        Technicien
        <input
          {...register("technicianId")}
          type="text"
          placeholder="Identifiant du technicien"
          className="rounded border px-3 py-2"
        />
        {errors.technicianId && (
          <span className="text-sm text-red-500">
            {errors.technicianId.message}
          </span>
        )}
      </label>

      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? "Envoi en cours..." : "Créer l'inspection"}
      </Button>
    </form>
  );
};
