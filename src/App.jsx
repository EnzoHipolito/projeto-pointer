import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './routes/AppRouter'
import './App.css'

function App() {
  return (
    <div>
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App