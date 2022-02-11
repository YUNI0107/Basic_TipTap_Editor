import { useState } from 'react'
import classNames from 'classnames'

// constants
import { ColorPickerList } from '../../../../../constant/menuList'

function ColorPicker() {
  const [pickedColor, setPickedColor] = useState('main-orange-300')

  return (
    <div className="relative">
      <div className="w-10 h-10 rounded-full overflow-hidden p-[6px] ring-main-gray-100 ring-inset ring-2 cursor-pointer">
        <div
          className={classNames(
            `bg-${pickedColor}`,
            'w-full h-full bg-main-orange-300 rounded-full'
          )}
        ></div>
      </div>

      <div
        className="w-full py-2 mt-1 ring-main-gray-100 ring-inset ring-2 bg-white 
          flex flex-col items-center rounded-[30px] drop-shadow-md"
      >
        {ColorPickerList.map(color => (
          <div
            className="w-8 h-8 rounded-full overflow-hidden p-[6px] ring-main-gray-100 ring-inset ring-2 cursor-pointer my-1"
            key={color}
          >
            <div className={classNames(`bg-${color}`, 'w-full h-full rounded-full')}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
