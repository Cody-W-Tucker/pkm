import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ad',
  title: 'Ad',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'headline',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'cta',
      title: 'Call to action',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to action link',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      headline: 'headline',
      tagline: 'tagline',
      media: 'mainImage',
    },
    prepare(selection) {
      const { headline, tagline } = selection
      return { ...selection, title: headline, subtitle: tagline }
    },
  },
})
