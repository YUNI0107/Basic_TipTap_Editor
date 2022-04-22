import { useMemo } from 'react'
import { generateHTML } from '@tiptap/html'
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

// customExtension
import FontSize from '../extension/FontSize'
import FileBlockExtension from '../components/layout/FileBlock/FileBlockExtension'

function useGetHtml(json) {
  const output = useMemo(() => {
    return generateHTML(json, [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      TextStyle,
      FontSize,
      Underline,
      ListItem,
      OrderedList,
      BulletList,
      Color,
      Link.configure({
        autolink: false,
        openOnClick: false,
      }),
      FileBlockExtension,
      Image,
    ])
  }, [json])

  return output
}

export default useGetHtml
