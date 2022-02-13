import { useCallback, useState, useEffect } from 'react'

// components
import CommandButton from '../CommandButton/CommandButton'
import BubbleCustomMenu from '../../../BubbleCustomMenu'

// utils
import convertColorToCode from '../../../../../utils/convertColorToCode'

function CommandButtons({ editor }) {
  // // operation
  // const toggleLink = useCallback(() => {
  //   const previousUrl = editor.getAttributes('link').href
  //   const url = window.prompt('URL', previousUrl)

  //   // cancelled
  //   if (url === null) {
  //     return
  //   }

  //   // empty
  //   if (url === '') {
  //     editor.chain().focus().extendMarkRange('link').unsetLink().run()

  //     return
  //   }

  //   // update link
  //   editor
  //     .chain()
  //     .focus()
  //     .extendMarkRange('link')
  //     .setLink({ href: url })
  //     .setColor(convertColorToCode('main-blue-100'))
  //     .run()
  // }, [editor])

  const toggleBubbleShow = isLink => {
    if (isLink) {
      console.log('unset')
    } else {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: '' })
        .setColor(convertColorToCode('main-blue-100'))
        .run()
    }
  }

  return (
    <>
      <BubbleCustomMenu editor={editor} />

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
        isActive={editor.isActive('italic')}
        handleClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className="ri-italic"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive('underline')}
        handleClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className="ri-underline"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive('bulletList')}
        handleClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <i className="ri-list-unordered"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive('orderedList')}
        handleClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <i className="ri-list-ordered"></i>
      </CommandButton>

      <CommandButton
        isActive={editor.isActive('link')}
        handleClick={() => toggleBubbleShow(editor.isActive('link'))}
      >
        <i className="ri-link-m"></i>
      </CommandButton>
    </>
  )
}

export default CommandButtons
