import { defineType, defineField } from 'sanity'
import {HomeIcon} from '@sanity/icons/Home'

export const homeType = defineType({
    name:'homeType',
    type:'document',
    title:'Inicio',
    icon:HomeIcon,
    fields:[
        defineField({
            name: 'title',
            title: 'Título principal',
            type: 'string',
        })
    ],
    preview: {
    select: {
      title: 'title',
    },
    prepare({ title, lang }) {
      return {
        title: title || 'Home sin título',
        media: HomeIcon,
      }
    },
  },
})