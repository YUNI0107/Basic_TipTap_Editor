import { useEffect } from 'react'

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

function HeadingSelect({ setHeadingValue, currentValue, editor }) {
  // effects
  useEffect(() => {
    switch (currentValue) {
      case 'h1':
        editor.chain().focus().unsetFontSize().setHeading({ level: 1 }).run()
        break
      case 'h2':
        editor.chain().focus().unsetFontSize().setHeading({ level: 2 }).run()
        break
      case 'h3':
        editor.chain().focus().unsetFontSize().setHeading({ level: 3 }).run()
        break
      case 'p':
        editor.chain().focus().setParagraph().setFontSize(16).run()
        break
      case 'annotation':
        editor.chain().focus().setParagraph().setFontSize(12).run()
        break
    }
  }, [currentValue])

  // use isActive detect weather the cursor is on the certain section ( update everyTime )
  useEffect(() => {
    if (editor.isActive('heading', { level: 1 })) {
      setHeadingValue('h1')
    } else if (editor.isActive('heading', { level: 2 })) {
      setHeadingValue('h2')
    } else if (editor.isActive('heading', { level: 3 })) {
      setHeadingValue('h3')
    }
    // set annotation container to paragraph, so need to be careful that the editor will detect editor.isActive('paragraph') true
    else if (editor.isActive('paragraph') && editor.isActive({ fontSize: '16px' })) {
      setHeadingValue('p')
    } else if (editor.isActive('paragraph') && editor.isActive({ fontSize: '12px' })) {
      setHeadingValue('annotation')
    }
  })

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
