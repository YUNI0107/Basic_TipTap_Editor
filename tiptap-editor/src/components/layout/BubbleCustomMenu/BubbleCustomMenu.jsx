import { BubbleMenu } from '@tiptap/react'

function BubbleCustomMenu({ editor }) {
  if (!editor) return null

  return (
    <BubbleMenu editor={editor} shouldShow={({ editor }) => editor.isActive('link')}>
      <div>
        <div>
          <i className="ri-link"></i>
        </div>

        <div></div>

        <input type="text" />
      </div>
    </BubbleMenu>
  )
}

export default BubbleCustomMenu
