import { useMemo } from 'react'
import { ChartDonut, Cup, HandGrab } from 'tabler-icons-react'

export function useMenuHeaderItem(productType: string) {
  const IconComponent = useMemo(() => {
    let iconComponent = ChartDonut

    switch (productType) {
      case 'donuts':
        iconComponent = ChartDonut
        break
      case 'baked':
        iconComponent = HandGrab
        break
      case 'drinks':
        iconComponent = Cup
        break
    }
    return iconComponent
  }, [productType])

  return IconComponent
}
