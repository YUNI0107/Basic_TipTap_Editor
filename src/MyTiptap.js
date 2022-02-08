import { useState, useEffect } from 'react'

import 'remixicon/fonts/remixicon.css'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Paragraph from '@tiptap/extension-paragraph'
import Heading from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'

import './styles.scss'

import MyMenu from './components/MyMenu/MyMenu'

function MyTiptap() {
  const [editable, setEditable] = useState(false)

  const CustomParagraph = Paragraph.extend({
    addCommands() {
      return {
        paragraph:
          () =>
          ({ commands }) => {
            return commands.setNode('paragraph')
          },
        bold:
          () =>
          ({ commands }) => {
            return commands.toggleMark('bold')
          },
      }
    },
  })

  const editor = useEditor({
    editable,
    extensions: [
      StarterKit,
      CustomParagraph,
      Heading.configure({
        HTMLAttributes: {
          class: 'my-custom-class',
        },
      }),
      Link.configure({
        autolink: true,
      }),
    ],
    content: `
      <p>Hello World!</p>
      <h1>Heading</h1>
    `,
  })

  useEffect(() => {
    if (!editor) {
      return null
    }

    editor.setEditable(editable)
  }, [editor, editable])

  return (
    <>
      <h1>Basic Practice</h1>
      <input
        type="checkbox"
        name="editable"
        id="editable"
        value={editable}
        onChange={(e) => setEditable(e.target.checked)}
      />
      <label htmlFor="editable">Editable</label>
      <p onClick={() => console.log(editor.getJSON())}>Get JSON</p>
      <p onClick={() => console.log(editor.getHTML())}>Get HTML</p>
      <MyMenu editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
}

export default MyTiptap
