import { useState } from 'react'

interface AddressBarProps {
  currentUrl: string
  onNavigate: (url: string) => void
}

const AddressBar = ({ currentUrl, onNavigate }: AddressBarProps) => {
  const [inputUrl, setInputUrl] = useState(currentUrl)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNavigate(inputUrl)
  }

  return (
    <div className="bg-white border-b p-2">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => window.history.back()}
        >
          ←
        </button>
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => window.history.forward()}
        >
          →
        </button>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter URL or search..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Go
        </button>
      </form>
    </div>
  )
}

export default AddressBar