import classNames from 'classnames'

// components
import HeadingSelect from './components/HeadingSelect/HeadingSelect'
import CommandButton from '../../common/CommandButton'
import ColorPicker from './components/ColorPicker'

function TopMenu({ setHeadingValue, headingValue }) {
  return (
    <div className="px-6 py-5 w-full h-20 bg-white text-main-gray-200 flex justify-between border-b-[5px] border-main-orange-300">
      <HeadingSelect setHeadingValue={setHeadingValue} currentValue={headingValue} />

      <div className="flex">
        <CommandButton status={'basic'}>
          <i className="ri-align-left"></i>
        </CommandButton>
        <CommandButton status={'basic'}>
          <i className="ri-align-center"></i>
        </CommandButton>
        <CommandButton status={'basic'}>
          <i className="ri-align-right"></i>
        </CommandButton>
        <CommandButton status={'basic'}>
          <i className="ri-bold"></i>
        </CommandButton>
        <CommandButton status={'active'}>
          <i className="ri-italic"></i>
        </CommandButton>
        <CommandButton status={'active'}>
          <i className="ri-underline"></i>
        </CommandButton>
        <CommandButton status={'basic'}>
          <i className="ri-list-unordered"></i>
        </CommandButton>
        <CommandButton status={'active'}>
          <i className="ri-list-ordered"></i>
        </CommandButton>
        <CommandButton status={'basic'}>
          <i className="ri-indent-increase"></i>
        </CommandButton>
        <CommandButton status={'basic'}>
          <i className="ri-indent-decrease"></i>
        </CommandButton>
        <ColorPicker />
      </div>
    </div>
  )
}

export default TopMenu
