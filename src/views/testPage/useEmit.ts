export function useEmit() {
  const ee = (a: any) => {
    console.log(a)
  }

  return { ee }
}
