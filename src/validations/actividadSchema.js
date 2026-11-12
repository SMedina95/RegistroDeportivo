// src/validations/actividadSchema.js
// ============================================
// ESQUEMA DE VALIDACIÓN CON ZOD
// ============================================

import { z } from 'zod';

export const actividadSchema = z.object({
    tipo: z
        .string()
        .min(1, 'El tipo de actividad es obligatorio'),
    duracion: z
        .number({ invalid_type_error: 'La duración debe ser un número' })
        .int('La duración debe ser un número entero')
        .positive('La duración debe ser mayor a 0')
        .max(600, 'La duración no puede superar los 600 minutos'),
    distancia: z
        .number({ invalid_type_error: 'La distancia debe ser un número' })
        .min(0, 'La distancia no puede ser negativa')
        .max(1000, 'La distancia no puede superar los 1000 km')
        .optional()
        .default(0),
    fecha: z
        .string()
        .min(1, 'La fecha es obligatoria')
        .refine((val) => !isNaN(Date.parse(val)), 'La fecha no es válida'),
    notas: z.string().max(200, 'Las notas no pueden superar los 200 caracteres').optional().default(''),
});