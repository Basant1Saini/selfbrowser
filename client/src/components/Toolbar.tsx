const Toolbar = () => {
  return (
    <div className="bg-gray-800 text-white p-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-bold">SelfBrowser</h1>
        <nav className="flex space-x-2">
          <button className="px-3 py-1 hover:bg-gray-700 rounded">File</button>
          <button className="px-3 py-1 hover:bg-gray-700 rounded">Edit</button>
          <button className="px-3 py-1 hover:bg-gray-700 rounded">View</button>
          <button className="px-3 py-1 hover:bg-gray-700 rounded">History</button>
          <button className="px-3 py-1 hover:bg-gray-700 rounded">Bookmarks</button>
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 hover:bg-gray-700 rounded">Settings</button>
        <button className="px-3 py-1 hover:bg-gray-700 rounded">Profile</button>
      </div>
    </div>
  )
}

export default Toolbar