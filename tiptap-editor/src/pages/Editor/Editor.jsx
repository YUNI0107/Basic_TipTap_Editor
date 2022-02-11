import { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './style.scss'

// components
import TopMenu from '../../components/layout/TopMenu/TopMenu'
import BottomMenu from '../../components/layout/BottomMenu'

function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
  })

  const [headingValue, setHeadingValue] = useState('h1')

  return (
    <>
      <div className="relative max-w-[800px] w-full drop-shadow-md ring-main-orange-300 ring-5 rounded-[10px] overflow-hidden">
        <TopMenu
          setHeadingValue={setHeadingValue}
          defaultHeadValue={headingValue}
          headingValue={headingValue}
        />
        <EditorContent editor={editor} className="min-h-[380px] px-5 py-2 bg-white" />
        <BottomMenu />
      </div>
    </>
  )
}

export default Editor
