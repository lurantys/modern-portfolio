interface GitHubStats {
  repos: number
  stars: number
}

interface LeetCodeStats {
  rank: number
  solved: number
}

export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)
    if (!response.ok) throw new Error('Failed to fetch GitHub stats')

    const repos = await response.json()
    const totalStars = repos.reduce(
      (acc: number, repo: any) => acc + repo.stargazers_count,
      0
    )

    return {
      repos: repos.length,
      stars: totalStars,
    }
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    return {
      repos: 0,
      stars: 0,
    }
  }
}

export async function fetchLeetCodeStats(username: string): Promise<LeetCodeStats> {
  try {
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    )
    if (!response.ok) throw new Error('Failed to fetch LeetCode stats')

    const data = await response.json()
    console.log('LeetCode API response:', data)

    return {
      rank: data.ranking || 0,
      solved: data.totalSolved || 0,
    }
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error)
    return {
      rank: 0,
      solved: 0,
    }
  }
}
