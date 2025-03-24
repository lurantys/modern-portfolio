import { motion } from 'framer-motion'
import { Github, Globe } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  index: number
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card">
      <div className="flex items-center justify-between">
        <h3 className="project-title">{title}</h3>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link hover:text-foreground">
          <Github className="h-4 w-4" />
          <span>View Code</span>
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link hover:text-foreground">
            <Globe className="h-4 w-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}
