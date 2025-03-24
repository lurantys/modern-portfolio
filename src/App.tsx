import { ThemeProvider } from './components/ThemeProvider'
import { Navbar } from './components/Navbar'
import { Index } from './pages/Index'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Index />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App