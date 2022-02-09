import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './style.scss'

// components
import TopMenu from '../../components/TopMenu/TopMenu'

function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
  })

  return (
    <>
      <div className="max-w-[800px] w-full">
        <TopMenu />
        <EditorContent editor={editor} className="min-h-[500px]" />
      </div>
    </>
  )
}

export default Editor
