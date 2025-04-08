import { Metadata } from 'next'


export function constructMetadata({
  title = 'Huy DaraPichchan',
  description = "A dedicated software engineer with over 3 years of experience in modern software development across local and international teams, recognized for strong time management, a collaborative mindset, and a continuous drive to learn and grow.",
  image = '/thumbnail.png',
  icons = '/portrait1.png',
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    //   images: [image],
    //   creator: '@huydarapichchan'
    // },
    icons,
    metadataBase: new URL('https://www.darapichchan.xyz'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
