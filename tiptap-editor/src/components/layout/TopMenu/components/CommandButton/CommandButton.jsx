// styles
import { ButtonStatus } from '../../../../../styles/theme'

function CommandButton({ children, handleClick, isActive }) {
  return (
    <button onClick={handleClick} className={ButtonStatus[isActive ? 'active' : 'basic']}>
      {children}
    </button>
  )
}

export default CommandButton
