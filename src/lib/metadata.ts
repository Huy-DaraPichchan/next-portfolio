import { Metadata } from 'next'

const DEFAULT_SITE_URL = 'https://next-portfolio-git-main-huydarapichchans-projects.vercel.app'

function getSiteUrl() {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL

  if (!configuredSiteUrl) {
    return DEFAULT_SITE_URL
  }

  const normalizedSiteUrl = configuredSiteUrl.replace(/\/$/, '')

  if (normalizedSiteUrl.startsWith('http://') || normalizedSiteUrl.startsWith('https://')) {
    return normalizedSiteUrl
  }

  return `https://${normalizedSiteUrl}`
}

export function constructMetadata({
  title = 'Huy DaraPichchan',
  description = "A dedicated software developer with more than 4 years of experience in modern software development across local and international teams, recognized for strong time management, a collaborative mindset, and a continuous drive to learn, grow and deliver.",
  image = '/portrait1.jpg',
  icons = '/portrait1.jpg',
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  const siteUrl = getSiteUrl()

  return {
    title,
    description,
    alternates: {
      canonical: siteUrl
    },
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: 'Huy DaraPichchan',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Preview image of Huy DaraPichchan'
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    //   images: [image],
    //   creator: '@huydarapichchan'
    // },
    icons,
    metadataBase: new URL(siteUrl),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
