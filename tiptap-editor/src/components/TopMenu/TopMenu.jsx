function TopMenu() {
  return (
    <div>
      <input type="text" />
      {[1, 2, 3, 4].forEach(button => (
        <button>{button}</button>
      ))}
    </div>
  )
}

export default TopMenu
