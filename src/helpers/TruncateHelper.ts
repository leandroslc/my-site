export const truncate = (value: string, maxLength: number) => {
  if (value.length <= maxLength) {
    return value
  }

  if (value.length < 3) {
    return ''
  }

  return `${value.substring(0, maxLength - 3)}...`
}
