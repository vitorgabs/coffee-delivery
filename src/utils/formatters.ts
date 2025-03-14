export function toBrlCurrency(value: number) {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'brl'
  }).format(value)
}
