import { useRef, useState } from 'react'
import classNames from 'classnames'

function SelectComponent({ setValue, defaultValue, list, currentValue, blockStyle }) {
  const [optionShow, setOptionShow] = useState(false)
  const select = useRef()

  // operation
  const clickDivOption = value => {
    if (!select) return
    select.current.value = value
    setValue(value)
    setOptionShow(false)
  }

  return (
    <div className="relative">
      {/* select: hidden on tablet & desktop show default layout design by each browser on mobile */}
      <select
        className="block w-full h-full absolute top-0 left-0 z-10 opacity-0 sm:pointer-events-none"
        defaultValue={defaultValue}
        onChange={e => setValue(e.target.value)}
        onBlur={() => setOptionShow(false)}
        ref={select}
      >
        {list.map(({ value, text, className }) => (
          <option value={value} key={value} className="block sm:hidden">
            {text}
          </option>
        ))}
      </select>

      {/*  show custom select layout */}
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
          className={classNames('overflow-hidden', blockStyle['option-container'], {
            [blockStyle['option-container-active']]: optionShow,
          })}
        >
          {list.map(({ value, text, className: eachClassName }, index) => {
            const lastItem = index === list.length - 1

            return (
              <div
                key={value}
                className={classNames(blockStyle['option'], eachClassName, {
                  [blockStyle['option-avoid-last']]: !lastItem,
                })}
                onClick={() => clickDivOption(value)}
              >
                <p>{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default SelectComponent
