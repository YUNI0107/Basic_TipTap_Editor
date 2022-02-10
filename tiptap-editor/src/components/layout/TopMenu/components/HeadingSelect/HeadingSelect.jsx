// components
import SelectComponent from '../../../../common/SelectComponent'

// constant
import { sizeList } from '../../../../../constant/menuList'

function HeadingSelect({ setHeadingValue, defaultValue, currentValue }) {
  return (
    <SelectComponent
      setValue={setHeadingValue}
      defaultValue={defaultValue}
      currentValue={currentValue}
      list={sizeList}
    ></SelectComponent>
  )
}

export default HeadingSelect
