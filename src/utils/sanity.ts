import { useSanityClient } from '@sanity/astro'
import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'

export async function getAds(): Promise<Ad[]> {
  return await useSanityClient().fetch(
    groq`*[_type == "ad" && defined(slug.current)] | order(_createdAt desc)`
  )
}

export async function getAd(slug: string): Promise<Ad> {
  return await useSanityClient().fetch(
    groq`*[_type == "ad" && slug.current == $slug][0]`,
    {
      slug,
    }
  )
}

export interface Ad {
  _type: 'ad'
  _createdAt: string
  headline?: string
  tagline?: string
  slug: Slug
  body: PortableTextBlock[]
  cta?: string
  ctaLink?: string
  mainImage?: ImageAsset
}
