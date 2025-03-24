import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin } from 'lucide-react'

interface SocialWidgetProps {
  platform: 'github' | 'twitter' | 'linkedin' | 'leetcode'
  username: string
  stats?: {
    repos?: number
    stars?: number
    rank?: number
    solved?: number
  }
}

function getPlatformIcon(platform: string) {
  switch (platform) {
    case 'github':
      return <Github className="h-5 w-5" />
    case 'twitter':
      return <Twitter className="h-5 w-5" />
    case 'linkedin':
      return <Linkedin className="h-5 w-5" />
    case 'leetcode':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      )
    default:
      return null
  }
}

function getPlatformUrl(platform: string, username: string) {
  switch (platform) {
    case 'github':
      return `https://github.com/${username}`
    case 'twitter':
      return `https://twitter.com/${username}`
    case 'linkedin':
      return `https://linkedin.com/in/${username}`
    case 'leetcode':
      return `https://leetcode.com/${username}`
    default:
      return '#'
  }
}

function getPlatformColor(platform: string) {
  switch (platform) {
    case 'github':
      return 'hover:text-[#333] dark:hover:text-white'
    case 'twitter':
      return 'hover:text-[#1DA1F2]'
    case 'linkedin':
      return 'hover:text-[#0077B5]'
    case 'leetcode':
      return 'hover:text-[#FFA116]'
    default:
      return ''
  }
}

export function SocialWidget({ platform, username, stats }: SocialWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="widget">
      <a
        href={getPlatformUrl(platform, username)}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 ${getPlatformColor(platform)}`}>
        {getPlatformIcon(platform)}
        <h2 className="capitalize">{platform}</h2>
      </a>
      <p>@{username}</p>
      {stats && (
        <div className="mt-2 flex gap-4 text-center">
          {stats.repos !== undefined && (
            <div>
              <h3>{stats.repos}</h3>
              <p>Repos</p>
            </div>
          )}
          {stats.stars !== undefined && (
            <div>
              <h3>{stats.stars}</h3>
              <p>Stars</p>
            </div>
          )}
          {stats.rank !== undefined && (
            <div>
              <h3>{stats.rank}</h3>
              <p>Rank</p>
            </div>
          )}
          {stats.solved !== undefined && (
            <div>
              <h3>{stats.solved}</h3>
              <p>Solved</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}
