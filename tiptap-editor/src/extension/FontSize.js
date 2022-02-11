import { useEditor, EditorContent, Extension } from '@tiptap/react'

const FontSize = Extension.create({
  name: 'FontSize',
  addOptions() {
    return {
      types: ['textStyle'],
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: element => element.style.fontSize.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.fontSize) {
                return {}
              }

              return {
                style: `font-size: ${attributes.fontSize}px;`,
              }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setFontSize:
        fontSize =>
        ({ chain }) => {
          return chain().setMark('textStyle', { fontSize: fontSize }).run()
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run()
        },
    }
  },
})

export default FontSize
