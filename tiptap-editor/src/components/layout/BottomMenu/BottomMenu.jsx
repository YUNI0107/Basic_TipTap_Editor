function BottomMenu() {
  return (
    <div
      className="px-6 py-5 w-full h-20 bg-main-orange-300 text-white
          flex justify-between items-center"
    >
      {/* left */}
      <div className="text-[40px]">
        <button className="w-[40px] h-[40px] mr-3">
          <i className="ri-image-fill"></i>
        </button>
        <button className="w-[40px] h-[40px]">
          <i className="ri-chat-upload-fill"></i>
        </button>
      </div>

      {/* right */}
      <div className="flex items-baseline">
        <p className="mr-3">Download the PDF </p>
        <h2 className="text-2xl font-semibold underline cursor-pointer">DONE</h2>
      </div>
    </div>
  )
}

export default BottomMenu
