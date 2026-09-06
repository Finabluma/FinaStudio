import { defineType, defineField } from 'sanity'
import {BlockContentIcon} from '@sanity/icons/BlockContent'
export const textBlockType = defineType({
  name: 'textBlockType',
  title: 'Text Block',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Cabecera',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'text',
      rows: 5,
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'text',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Text Block',
        subtitle: subtitle
          ? subtitle.length > 80
            ? subtitle.slice(0, 80) + '…'
            : subtitle
          : 'Sin texto',
      }
    },
  },
})
