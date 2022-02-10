// styles
import { ButtonStatus } from '../../../styles/theme'

function CommandButton({ children, btnClick, status }) {
  return (
    <button onClick={btnClick} className={ButtonStatus[status]}>
      {children}
    </button>
  )
}

export default CommandButton
