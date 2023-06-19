const breakpoints = {
  mobileM: '375px',
  mobileL: '700px',
} as const

export const devices = {
  mobileM: `(max-width: ${breakpoints.mobileM})`,
  mobileL: `(max-width: ${breakpoints.mobileL})`,
} as const
