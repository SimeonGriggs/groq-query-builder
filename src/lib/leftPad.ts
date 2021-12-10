export function leftPad(amount = 0) {
  if (!amount) return ''

  return Array.from(Array(amount - 1))
    .map((a) => '-')
    .join('')
}
