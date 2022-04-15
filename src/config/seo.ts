export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://brianlovin.com' : ''
export const baseEmail = 'hi@brianlovin.com'

export const defaultSEO = {
  title: 'Ridho Assuryadi',
  description:
    'Frontend Engineer, podcaster, and writer, living in Indonesia.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Ridho Assuryadi',
    images: [
      {
        url: `${baseUrl}/static/og/default.png`,
        alt: 'Brian Lovin',
      },
    ],
  },
  twitter: {
    handle: '@brian_lovin',
    site: '@brian_lovin',
    cardType: 'summary_large_image',
  },
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: SEOProps) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}
