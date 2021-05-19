export function wait(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

export function useAsync(fn: () => Promise<any>) {
  fn()
}
