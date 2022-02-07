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
    </div>
  )
}

export default MyMenu
