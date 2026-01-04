import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Browser from './pages/Browser'
import Login from './pages/Login'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Browser />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App