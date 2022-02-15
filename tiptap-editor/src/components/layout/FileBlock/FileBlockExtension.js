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
        fileName =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              fileName,
            },
          })
        },
    }
  },
})

export default FileBlockExtension
