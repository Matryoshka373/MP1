export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Han Wang'
export const headline ='Student of Tongji University'
export const introduction =
  "My future is waiting for me to explore!"
export const email = 'hanwang721124@gmail.com'
export const githubUsername = 'Maytroshka373'

// about page
export const aboutMeHeadline = 'Chasing Curiosty, One Step at a Time'
export const aboutParagraphs = [
  "I'm Han Wang, a passionate learner and explorer who believes that every day brings an opportunity to grow."+
  "From the winding streets of Shanghai to the quiet corners of my thoughts," + 
  "I'm always seeking inspiration and new ways to connect ideas, people, and cultures.",
  'A fan of the saying "C\'est la vie" from the streets of Paris, I embrace life\'s unpredictability with open arms.',
  "I started this blog to share the insights I learn every day. Most blogs focus on education in Artificial Intelligence and general computer science, while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
