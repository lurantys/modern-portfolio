import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Hi, I'm <span className="text-gradient">Aymen</span>
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          I'm a software engineer passionate about building beautiful, functional, and accessible web applications.
          I specialize in React, TypeScript, and modern web technologies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-4">
        <a
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Contact Me
        </a>
        <a
          href="#projects"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
          View Projects
        </a>
      </motion.div>
    </section>
  )
}
