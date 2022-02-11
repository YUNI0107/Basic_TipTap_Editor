import { useState } from 'react'
import classNames from 'classnames'

function SelectCustomSection({ list, currentValue, setValue, blockStyle }) {
  const [optionShow, setOptionShow] = useState(false)

  // operation
  const clickDivOption = value => {
    setValue(value)
    setOptionShow(false)
  }

  return (
    <div
      className={classNames('relative w-full min-w-[200px]')}
      tabIndex="-1"
      onBlur={() => setOptionShow(false)}
    >
      <div
        className={classNames(blockStyle['top'], { [blockStyle['top-active']]: optionShow })}
        onClick={() => setOptionShow(!optionShow)}
      >
        <p className="text-lg">{list.find(({ value }) => currentValue === value).text}</p>
        <i
          className={classNames('ri-arrow-drop-down-line text-2xl transition duration-700', {
            '-rotate-180': optionShow,
          })}
        ></i>
      </div>

      {/* div options: hidden on mobile */}
      <div
        className={classNames(blockStyle['option-container'], {
          [blockStyle['option-container-active']]: optionShow,
        })}
      >
        {list.map(({ value, text, className: eachClassName }, index) => {
          const lastItem = index === list.length - 1

          return (
            <div
              key={value}
              className={classNames(
                blockStyle['option'],
                eachClassName,
                {
                  [blockStyle['option-avoid-last']]: !lastItem,
                },
                eachClassName
              )}
              onClick={() => clickDivOption(value)}
            >
              <p>{text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectCustomSection
