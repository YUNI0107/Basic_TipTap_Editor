import { useState, useEffect } from 'react'
import classNames from 'classnames'

// constants
import { ColorPickerList } from '../../../../../constant/menuList'

// utils
import convertColorToCode from '../../../../../utils/convertColorToCode'

function ColorPicker({ editor }) {
  const [pickedColor, setPickedColor] = useState('main-orange-300')
  const [isShow, setIsShow] = useState(false)

  // effect
  // use isActive detect weather the cursor is on the certain section ( update everyTime )
  useEffect(() => {
    // use editor to detect which color is select ( use List to render )
    const detectedColor = ColorPickerList.find(color => {
      return editor.isActive('textStyle', { color: convertColorToCode(color) })
    })

    setPickedColor(detectedColor)
  })

  // operation
  const handleColor = color => {
    setPickedColor(color)
    editor.chain().focus().setColor(convertColorToCode(color)).run()
  }

  return (
    <div className="relative" tabIndex={-1} onBlur={() => setIsShow(false)}>
      <div
        className="w-10 h-10 rounded-full overflow-hidden p-[6px] ring-main-gray-100 ring-inset ring-2 cursor-pointer"
        onClick={() => setIsShow(!isShow)}
      >
        <div
          className={classNames('w-full h-full bg-main-orange-300 rounded-full')}
          style={{ background: convertColorToCode(pickedColor) }}
        ></div>
      </div>

      {isShow && (
        <div
          className="absolute z-20 w-full py-2 mt-1 ring-main-gray-100 ring-inset ring-2 bg-white 
          flex flex-col items-center rounded-[30px] drop-shadow-md"
        >
          {ColorPickerList.map(color => (
            <div
              className="w-8 h-8 rounded-full overflow-hidden p-[6px] ring-main-gray-100 ring-inset ring-2 cursor-pointer my-1"
              key={color}
              onClick={() => handleColor(color)}
            >
              <div
                className={classNames('w-full h-full rounded-full')}
                style={{ background: convertColorToCode(color) }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ColorPicker
