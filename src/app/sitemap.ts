import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://al-sirang.com/',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: 'https://al-sirang.com/projects',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ]
}
