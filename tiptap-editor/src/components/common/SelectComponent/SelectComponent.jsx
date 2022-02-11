import { useRef, useEffect } from 'react'
import classNames from 'classnames'

function SelectComponent({ children, setValue, list, currentValue }) {
  const select = useRef()

  useEffect(() => {
    if (!select && select.current.value !== currentValue) return
    select.current.value = currentValue
  }, [currentValue])

  return (
    <div className="relative">
      {/* select: hidden on tablet & desktop show default layout design by each browser on mobile */}
      <select
        className="block w-full h-full absolute top-0 left-0 z-10 opacity-0 sm:pointer-events-none"
        defaultValue={currentValue}
        onChange={e => setValue(e.target.value)}
        ref={select}
      >
        {list.map(({ value, text, className }) => (
          <option value={value} key={value} className={classNames(className, 'block sm:hidden')}>
            {text}
          </option>
        ))}
      </select>

      {children}
    </div>
  )
}
export default SelectComponent
