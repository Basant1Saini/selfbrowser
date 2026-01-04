import { useState } from 'react'
import AddressBar from '../components/AddressBar'
import WebView from '../components/WebView'
import Toolbar from '../components/Toolbar'

const Browser = () => {
  const [currentUrl, setCurrentUrl] = useState('https://www.google.com')

  return (
    <div className="h-screen flex flex-col">
      <Toolbar />
      <AddressBar currentUrl={currentUrl} onNavigate={setCurrentUrl} />
      <WebView url={currentUrl} />
    </div>
  )
}

export default Browser