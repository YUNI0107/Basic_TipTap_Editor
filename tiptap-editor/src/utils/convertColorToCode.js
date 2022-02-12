import { themeColorList } from '../constant/themeColorList'

function convertColorToCode(color) {
  switch (color) {
    case 'main-orange-300':
      return themeColorList['main-orange'][300]
    case 'main-orange-200':
      return themeColorList['main-orange'][200]
    case 'main-blue-300':
      return themeColorList['main-blue'][300]
    case 'main-blue-100':
      return themeColorList['main-blue'][100]
    case 'little-blue':
      return themeColorList['little-blue']
  }
}
export default convertColorToCode
