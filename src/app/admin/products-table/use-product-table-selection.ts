import { useCallback, useState } from 'react'

export function useProductTableSelection() {
  const [selection, setSelection] = useState<string[]>([])

  const toggleRow = useCallback(
    (id: string) =>
      setSelection((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id])),
    [],
  )

  return {
    selection,
    toggleRow,
  }
}
