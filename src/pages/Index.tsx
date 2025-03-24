import { motion } from 'framer-motion'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { SocialWidget } from '../components/SocialWidget'
import { useEffect, useState } from 'react'
import { fetchGitHubStats, fetchLeetCodeStats } from '../utils/api'

interface Stats {
  github: {
    repos: number
    stars: number
  }
  leetcode: {
    rank: number
    solved: number
  }
}

export function Index() {
  const [stats, setStats] = useState<Stats>({
    github: {
      repos: 0,
      stars: 0,
    },
    leetcode: {
      rank: 0,
      solved: 0,
    },
  })

  useEffect(() => {
    async function fetchStats() {
      try {
        const githubStats = await fetchGitHubStats('lurantys')
        const leetcodeStats = await fetchLeetCodeStats('lurantys')

        setStats({
          github: {
            repos: githubStats.repos,
            stars: githubStats.stars,
          },
          leetcode: {
            rank: leetcodeStats.rank,
            solved: leetcodeStats.solved,
          },
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }

    fetchStats()
  }, [])

  // Social profiles data
  const socialProfiles = [
    {
      platform: 'github',
      username: 'lurantys',
      stats: {
        repos: stats.github.repos,
        stars: stats.github.stars,
      },
    },
    {
      platform: 'twitter',
      username: 'lurantys',
    },
    {
      platform: 'linkedin',
      username: 'aymen-nhaila',
    },
    {
      platform: 'leetcode',
      username: 'lurantys',
      stats: {
        rank: stats.leetcode.rank,
        solved: stats.leetcode.solved,
      },
    },
  ] as const

  // Projects data
  const projects = [
    {
      title: 'Sawti',
      description: 'A voice-controlled smart home assistant built with React and TensorFlow.js, featuring real-time voice recognition and natural language processing.',
      tags: ['react', 'tensorflow.js', 'webrtc', 'tailwindcss'],
      githubUrl: 'https://github.com/lurantys/Sawti',
    },
    {
      title: 'PokeDoro',
      description: 'A Pokemon-themed Pomodoro Timer that combines productivity with fun. Features dynamic Pokemon sprites and customizable work/break intervals.',
      tags: ['react', 'typescript', 'tailwindcss'],
      githubUrl: 'https://github.com/lurantys/pokedoro',
      liveUrl: 'https://pokedoro.duckdns.org/',
    },
    {
      title: 'ZenType',
      description: 'A minimalist typing practice application with a focus on aesthetics and user experience. Features multiple themes and typing statistics.',
      tags: ['react', 'typescript', 'redux'],
      githubUrl: 'https://github.com/lurantys/zentype',
    },
    {
      title: 'Web Clones',
      description: 'A collection of pixel-perfect website clones built to practice and showcase frontend development skills using modern web technologies.',
      tags: ['html', 'css', 'javascript'],
      githubUrl: 'https://github.com/lurantys/webclones',
    }
  ]

  return (
    <div className="container py-8">
      <Hero />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-4 py-8 md:grid-cols-2 lg:grid-cols-4">
        {socialProfiles.map((profile) => (
          <SocialWidget key={profile.platform} {...profile} />
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="py-8">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">
          Featured Projects
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </motion.section>
    </div>
  )
}
