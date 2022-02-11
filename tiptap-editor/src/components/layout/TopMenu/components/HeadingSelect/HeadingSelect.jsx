// components
import SelectComponent from '../../../../common/SelectComponent'
import SelectCustomSection from '../../../../common/SelectComponent/components/SelectCustomSection'

// constant
import { sizeList } from '../../../../../constant/menuList'

const TopBlockStyle =
  'w-full border-2 border-main-blue-100 px-2 py-[2px] bg-white rounded-[10px] flex justify-between cursor-pointer'
const TopBlockActiveStyle = 'rounded-b-[0px]'
const OptionContainerStyle =
  'absolute hidden z-10 left-0 w-full bg-white border-2 border-main-blue-100 rounded-b-[10px] -mt-1 overflow-hidden'
const OptionContainerActiveStyle = 'sm:block'
const OptionStyle = 'block w-full p-2 cursor-pointer hover:bg-little-blue'
const OptionAvoidLastStyle = 'border-b-[1px] border-main-gray-100'

const blockStyle = {
  top: TopBlockStyle,
  'top-active': TopBlockActiveStyle,
  'option-container': OptionContainerStyle,
  'option-container-active': OptionContainerActiveStyle,
  option: OptionStyle,
  'option-avoid-last': OptionAvoidLastStyle,
}

function HeadingSelect({ setHeadingValue, currentValue }) {
  return (
    <SelectComponent setValue={setHeadingValue} currentValue={currentValue} list={sizeList}>
      {/*  show custom select layout */}
      <SelectCustomSection
        list={sizeList}
        currentValue={currentValue}
        setValue={setHeadingValue}
        blockStyle={blockStyle}
      />
    </SelectComponent>
  )
}

export default HeadingSelect
