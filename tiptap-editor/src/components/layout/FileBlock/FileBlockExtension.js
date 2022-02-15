import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import FileBlock from './FileBlock'

const FileBlockExtension = Node.create({
  name: 'FileBlock',

  group: 'block',

  atom: true,

  addAttributes() {
    return {
      fileName: {
        default: '',
      },
      blob: {
        default: {},
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'file-block',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['file-block', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(FileBlock)
  },

  addCommands() {
    return {
      fileBlock:
        file =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              fileName: file.name,
              blob: file,
            },
          })
        },
    }
  },
})

export default FileBlockExtension
