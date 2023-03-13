export function trimFullString(value: string) {
  return value.replaceAll(' ', '')
}

export function divideFourCharsByAnEmptySpace(display: string): string {
  let displaySegments: string[] = []
  let rest = trimFullString(display)

  while (rest.length > 0) {
    let length = rest.length > 4 ? 4 : rest.length || 0
    displaySegments.push(`${rest.slice(0, length)}`)
    rest = rest.slice(length)
  }

  return displaySegments.join(' ')
}
