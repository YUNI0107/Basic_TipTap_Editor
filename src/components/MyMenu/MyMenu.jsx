function MyMenu({ editor }) {
  if (!editor) {
    return null
  }

  return (
    <div>
      {/* bold */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        style={{ background: editor.isActive('bold') ? '#FF5722' : '#4444' }}
      >
        <i className="ri-bold"></i> Bold
      </button>
      <button
        onClick={() => editor.chain().focus().bold().run()}
        style={{ background: editor.isActive('bold') ? '#FF5722' : '#4444' }}
      >
        Paragraph-Bold
      </button>
      <button
        onClick={() => editor.chain().focus().paragraph().run()}
        style={{
          background: editor.isActive('paragraph') ? '#FF5722' : '#4444',
        }}
      >
        Paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        style={{
          background: editor.isActive('heading', { level: 1 })
            ? '#FF5722'
            : '#4444',
        }}
      >
        H1
      </button>
    </div>
  )
}

export default MyMenu
