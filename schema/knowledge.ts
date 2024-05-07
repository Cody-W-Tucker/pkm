import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'knowledge',
  title: 'Knowledge',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
