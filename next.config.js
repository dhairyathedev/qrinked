/** @type {import('next').NextConfig} */

// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ""
// let basePath = "/"

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

const nextConfig = {
  reactStrictMode: false,
  // experimental: {
  //   fontLoaders: [
  //     {
  //       loader: "@next/font/google",
  //       options: { subsets: ["latin"] },
  //     },
  //   ],
  // },
}

export default nextConfig
