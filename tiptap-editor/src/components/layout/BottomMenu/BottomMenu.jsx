import { useRef } from 'react'
import useGetHtml from '../../../hooks/useGetHtml'

function BottomMenu({ editor }) {
  if (!editor) return null

  const fileInput = useRef(null)
  const imageInput = useRef(null)

  // operation
  const uploadFile = e => {
    if (e.target.files.length !== 0 && fileInput.current) {
      console.log(
        '%cCall Api Upload',
        'background: #ff5722; color: #fff; border-radius: 5px; padding: 5px;'
      )

      editor.chain().focus().fileBlock(e.target.files[0]).run()

      fileInput.current.value = ''
    }
  }

  const addImage = e => {
    if (e.target.files.length !== 0) {
      const url = window.URL.createObjectURL(e.target.files[0])
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  const downloadPdf = () => {
    // code from https://gist.github.com/sam-ngu/ee10b650112f891013271b8d7ca3e6f3
    const newWindow = window.open()
    const html = document.createElement('html')
    const head = document.head.cloneNode(true)
    const body = document.createElement('body')

    const section = document.querySelector('.ProseMirror').cloneNode(true)

    body.appendChild(section)
    html.appendChild(head)
    html.appendChild(body)

    // write content to the new window's document.
    newWindow.document.write(html.innerHTML)

    // close document to stop writing
    // otherwise new window may hang
    newWindow.document.close()

    // print content in new window as PDF
    newWindow.print()

    // // close the new window after printing
    newWindow.close()
  }

  return (
    <div
      className="px-6 py-5 w-full h-20 bg-main-orange-300 text-white
          flex justify-between items-center"
    >
      {/* left */}
      <div className="flex text-[40px]">
        <button className="relative w-[40px] h-[40px] mr-3 flex items-center">
          <i className="ri-image-fill"></i>
          <input
            type="file"
            className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer text-[0px]"
            onChange={addImage}
            ref={imageInput}
          />
        </button>

        <button className="relative w-[40px] h-[40px] flex items-center">
          <i className="ri-chat-upload-fill"></i>
          <input
            type="file"
            className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer text-[0px]"
            onChange={uploadFile}
            ref={fileInput}
          />
        </button>
      </div>

      {/* right */}
      <div className="flex items-baseline">
        <p className="mr-3">Download the PDF </p>
        <h2 className="text-2xl font-semibold underline cursor-pointer" onClick={downloadPdf}>
          DONE
        </h2>
      </div>
    </div>
  )
}

export default BottomMenu
