import { object, string } from "zod"
 
export const LoginSchema = object({
  email: string({ required_error: "El correo es obligatorio" })
    .min(1, "Es muy corto para ser un correo")
    .email("Correo inválido"), // This is a built-in validation function

  phone_number: string({ required_error: "El número de teléfono es obligatorio" })
    .min(1, "Es muy chico")
    .max(11, "Es muy largo"),

  password: string({ required_error: "La contraseña es obligatoria" })
    .min(6, "Debe ser de al menos 6 caracteres")
    .max(32, "Es muy corta"),
})
export const RegisterSchema = object({
  email: string({ required_error: "El correo es obligatorio" })
    .min(1, "Es muy corto para ser un correo")
    .email("Correo inválido"), // This is a built-in validation function

  phone_number: string({ required_error: "El número de teléfono es obligatorio" })
    .min(1, "Es muy chico")
    .max(10, "Es muy largo"),

  password: string({ required_error: "La contraseña es obligatoria" })
    .min(6, "Debe ser de al menos 6 caracteres")
    .max(32, "Es muy corta"),
    name: string({ required_error: "El nombre es obligatorio" })
})