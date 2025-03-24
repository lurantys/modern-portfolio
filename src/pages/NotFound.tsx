import { motion } from 'framer-motion'

export function NotFound() {
  return (
    <div className="container flex h-[calc(100vh-3.5rem)] items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Page not found. The page you're looking for doesn't exist or has been
          moved.
        </p>
        <a
          href="/"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Go Home
        </a>
      </motion.div>
    </div>
  )
}
