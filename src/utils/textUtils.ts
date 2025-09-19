// src/utils/textUtils.ts

// Capitaliza la primera letra de cada palabra
export function capitalize(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Convierte un texto a minúsculas de forma segura
export function toLowerCaseSafe(text: string | null | undefined): string {
  return text ? text.toLowerCase() : '';
}

// Recorta un texto si es demasiado largo y agrega "..."
export function truncate(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}

// Formatea precios según su moneda
export function formatPrice(amount: number, currency: 'COP' | 'USD'): string {
  if (currency === 'COP') {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount / 100);
}