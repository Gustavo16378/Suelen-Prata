// Configuração central de contato e helpers de WhatsApp.
// Centralizado para não repetir número/mensagens pelo código.

export const site = {
  brand: 'Suelen',
  brandFull: 'Suelen Pratas & Perfumaria',
  slogan: 'Autenticidade e elegância atemporal',

  // Número de atendimento (WhatsApp) — telefone (63) 98110-3967.
  whatsapp: '5563981103967',

  phone: '(63) 98110-3967',
  instagramHandle: '@suelenprataseperfumaria_',
  instagramUrl: 'https://instagram.com/suelenprataseperfumaria_',

  hours: 'Seg–Sáb · 9h às 19h',
} as const

/** Monta um link wa.me com a mensagem já url-encoded. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

/** Link de interesse genérico em um item (catálogo). */
export function waInterest(name: string): string {
  return waLink(`Olá! Tenho interesse em: ${name} ✨`)
}
