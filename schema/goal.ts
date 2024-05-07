import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'goal',
  title: 'Goal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
