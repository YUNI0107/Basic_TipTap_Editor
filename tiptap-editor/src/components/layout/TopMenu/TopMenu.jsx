// components
import HeadingSelect from './components/HeadingSelect/HeadingSelect'
import CommandButtons from './components/CommandButtons/CommandButtons'
import ColorPicker from './components/ColorPicker'

function TopMenu({ editor, toggleBubbleShow }) {
  if (!editor) return <></>

  return (
    <div className="px-6 py-5 w-full h-20 bg-white text-main-gray-200 flex justify-between border-b-[5px] border-main-orange-300">
      <HeadingSelect editor={editor} />

      <div className="flex">
        <CommandButtons editor={editor} toggleBubbleShow={toggleBubbleShow} />
        <ColorPicker editor={editor} />
      </div>
    </div>
  )
}

export default TopMenu
