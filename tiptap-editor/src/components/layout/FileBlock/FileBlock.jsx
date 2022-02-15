import { NodeViewWrapper } from '@tiptap/react'

function FileBlock({ node, editor }) {
  const deleteBlock = () => {
    // TODO: 刪除檔案
    editor.commands.insertContent('')
  }

  return (
    <NodeViewWrapper className="file-block">
      <div className="w-full bg-little-blue px-2 py-3 rounded-[10px] my-3 flex justify-between items-center">
        <a href="#">
          <p>{node.attrs.fileName}</p>
        </a>

        <button onClick={deleteBlock}>
          <i className="ri-close-circle-fill text-xl text-main-blue-200"></i>
        </button>
      </div>
    </NodeViewWrapper>
  )
}

export default FileBlock
