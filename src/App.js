import InvoiceForm from './components/InvoiceForm'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Error from './components/Error'

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <Routes>
        <Route path="/" element={<InvoiceForm />} />
        <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
