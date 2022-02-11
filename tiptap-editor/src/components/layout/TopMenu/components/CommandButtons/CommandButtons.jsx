// components
import CommandButton from '../CommandButton/CommandButton'

function CommandButtons({ editor }) {
  return (
    <>
      <CommandButton
        isActive={editor.isActive({ textAlign: 'left' })}
        handleClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className="ri-align-left"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive({ textAlign: 'center' })}
        handleClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i className="ri-align-center"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive({ textAlign: 'right' })}
        handleClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i className="ri-align-right"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive('bold')}
        handleClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className="ri-bold"></i>
      </CommandButton>

      <CommandButton
        isActive={false}
        handleClick={() => editor.chain().focus().setUnderline().run()}
      >
        <i className="ri-italic"></i>
      </CommandButton>

      <CommandButton isActive={false} handleClick={() => editor.chain().focus().setItalic().run()}>
        <i className="ri-underline"></i>
      </CommandButton>

      <CommandButton
        isActive={false}
        handleClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <i className="ri-list-unordered"></i>
      </CommandButton>

      <CommandButton isActive={false}>
        <i className="ri-list-ordered"></i>
      </CommandButton>

      <CommandButton isActive={false}>
        <i className="ri-indent-increase"></i>
      </CommandButton>

      <CommandButton isActive={false}>
        <i className="ri-indent-decrease"></i>
      </CommandButton>
    </>
  )
}

export default CommandButtons
