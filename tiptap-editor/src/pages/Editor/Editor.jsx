import { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Heading from '@tiptap/extension-heading'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import Color from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import './style.scss'

// customExtension
import FontSize from '../../extension/FontSize'
import FileBlockExtension from '../../components/layout/FileBlock/FileBlockExtension'

// components
import TopMenu from '../../components/layout/TopMenu/TopMenu'
import BottomMenu from '../../components/layout/BottomMenu'
import BubbleCustomMenu from '../../components/layout/BubbleCustomMenu'

function Editor() {
  // states
  const [isFirstLinking, setIsFirstLinking] = useState(false)

  // editor
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        headingHeading: {
          levels: [1, 2, 3],
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),

      TextStyle,
      FontSize,
      Underline,

      Color,
      Link.configure({
        autolink: false,
        openOnClick: false,
      }),
      FileBlockExtension,
      Image,
    ],
  })

  const toggleBubbleShow = isLinkActive => {
    if (!isLinkActive) {
      setIsFirstLinking(true)
    } else {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
    }
  }

  return (
    <>
      <div className="relative max-w-[800px] w-full drop-shadow-md ring-main-orange-300 ring-5 rounded-[10px] overflow-hidden">
        <TopMenu editor={editor} toggleBubbleShow={toggleBubbleShow} />
        <div className="relative">
          <BubbleCustomMenu
            editor={editor}
            isFirstLinking={isFirstLinking}
            setIsFirstLinking={setIsFirstLinking}
          />
          <EditorContent editor={editor} className="min-h-[380px] px-5 py-2 bg-white" />
        </div>
        <BottomMenu editor={editor} />
      </div>
    </>
  )
}

export default Editor
