import { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Heading from '@tiptap/extension-heading'
import TextStyle from '@tiptap/extension-text-style'
import './style.scss'

// customExtension
import FontSize from '../../extension/FontSize'

// components
import TopMenu from '../../components/layout/TopMenu/TopMenu'
import BottomMenu from '../../components/layout/BottomMenu'

function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      TextStyle,
      FontSize,
    ],
  })

  // state
  const [headingValue, setHeadingValue] = useState('h1')

  return (
    <>
      <div className="relative max-w-[800px] w-full drop-shadow-md ring-main-orange-300 ring-5 rounded-[10px] overflow-hidden">
        <TopMenu
          editor={editor}
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
