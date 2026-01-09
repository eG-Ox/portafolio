import Navbar from "./components/navbar"
import Home from "./pages/home"
import Projects from "./pages/projects"
import styles from "./App.module.css"

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <Projects />
      </main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Marco Miñano. Built with React & Framer Motion.
      </footer>
    </div>
  )
}

export default App
