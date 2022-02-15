import { useRef, useMemo, useEffect, useState } from 'react'
import classNames from 'classnames'

// utils
import convertColorToCode from '../../../utils/convertColorToCode'

function BubbleCustomMenu({ editor, isFirstLinking, setIsFirstLinking }) {
  if (!editor) return null
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const linkToolBar = useRef(null)
  const input = useRef(null)

  const position = useMemo(() => {
    const currentSelection = document.getSelection()
    const currentSelectionRangeCount = currentSelection.rangeCount
    const currentSelectedDOM = currentSelectionRangeCount ? currentSelection.getRangeAt(0) : null

    if (!currentSelectedDOM || !linkToolBar.current) return null

    const selectionBoundingRect = currentSelectedDOM.getBoundingClientRect()
    const selectionLeft = selectionBoundingRect.left
    const selectionTop = selectionBoundingRect.top
    const selectionHeight = selectionBoundingRect.height
    const toolbarWidth = linkToolBar.current.offsetWidth
    const editorLeft = editor.view.dom.getBoundingClientRect().left
    const editorTop = editor.view.dom.getBoundingClientRect().top
    const editorWidth = editor.view.dom.getBoundingClientRect().width

    // editor padding is 20px, what more space so I use 25px be space
    return {
      x:
        selectionLeft + toolbarWidth < editorLeft + editorWidth
          ? selectionLeft - editorLeft + 25
          : editorLeft + editorWidth - toolbarWidth - 50,
      y: selectionTop - editorTop + selectionHeight + 10,
    }
  }, [editor.state.selection])

  // operation
  const checkInputSet = () => {
    setNewLink()
    setIsFirstLinking(false)
    setIsTyping(false)
  }

  const setNewLink = () => {
    // empty
    if (inputValue === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    // update link
    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: inputValue })
      .setColor(convertColorToCode('main-blue-100'))
      .run()
  }

  useEffect(() => {
    setInputValue(editor.getAttributes('link').href || '')

    if (isFirstLinking) setIsFirstLinking(false)
  }, [editor.state.selection])

  useEffect(() => {
    if (input.current) input.current.focus()
  }, [isTyping])

  return (
    <div
      className={classNames(
        'absolute bg-main-blue-300 rounded-[10px] min-w-[320px] p-[10px] z-20',
        editor.isActive('link') || isFirstLinking ? 'flex' : 'hidden'
      )}
      ref={linkToolBar}
      style={{ top: `${position ? position.y : 0}px`, left: `${position ? position.x : 0}px` }}
    >
      <div className="text-white text-2xl cursor-pointer" onClick={checkInputSet}>
        {isTyping ? <i className="ri-link-unlink"></i> : <i className="ri-link"></i>}
      </div>

      <div className="bg-white w-[1px] h-[full] min-h-full mx-3 self-stretch"></div>

      {isTyping || isFirstLinking ? (
        <input
          className="w-full rounded-[5px] outline-none py-1 px-2"
          type="text"
          ref={input}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && checkInputSet()}
        />
      ) : (
        <p className="text-white py-1 px-2" onClick={() => setIsTyping(true)}>
          {inputValue}
        </p>
      )}
    </div>
  )
}

export default BubbleCustomMenu
