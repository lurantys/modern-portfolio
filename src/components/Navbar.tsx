import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="text-gradient font-bold sm:inline-block">
              AN
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-foreground/80 text-foreground/60">
              Projects
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contact
            </a>
            <a
              href="https://github.com/lurantys"
              className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:block">
              GitHub
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
