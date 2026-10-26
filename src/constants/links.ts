export const routes = {
  home: "/",
  features: "/features",
  pricing: "/pricing",
  blog: "/blog",
  updates: "/updates",
  about: "/about",
  terms: "/legal/terms-of-use",
  privacy: "/legal/privacy-policy",
  signIn: "/sign-in",
  signUp: "/sign-up",
} as const;

export const githubRepository = "bigcapitalhq/bigcapital";

export const socialLinks = {
  x: "https://twitter.com/BigcapitalHQ",
  linkedin: "https://www.linkedin.com/company/bigcapital-technology",
  github: "https://github.com/bigcapitalhq",
} as const;

export const externalLinks = {
  docs: "https://docs.bigcapital.app",
  apiReference: "https://docs.bigcapital.app/api-reference/introduction",
  dockerDeployment: "https://docs.bigcapital.app/deployment/docker",
  github: `https://github.com/${githubRepository}`,
  roadmap: "https://github.com/bigcapitalhq/bigcapital/milestones",
  security: "https://github.com/bigcapitalhq/bigcapital/security",
  license: "https://github.com/bigcapitalhq/bigcapital/blob/develop/LICENSE",
  discord: "https://discord.gg/c8nPBJafeb",
  status: "https://bigcapital.statuspage.io",
  ossFriends: "https://bigcapital.app/oss-friends",
  communityX: "https://twitter.com/bigcapitalhq",
} as const;
