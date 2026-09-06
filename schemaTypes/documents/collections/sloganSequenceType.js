import { defineField, defineType } from 'sanity'
import {TextIcon} from '@sanity/icons/Text'

export const sloganSequenceType = defineType({
  title: 'Eslogan',
  type: 'document',
  name: 'sloganSequenceType',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Eslogan principal',
      type: 'string',
    }),
    defineField({
        name:'description',
        title:'Describe',
        type:'string'
    }),
    defineField({
      name: 'textSequence',
      type: 'textSequenceType',
    })
  ],
})
