import { defineType, defineField, defineArrayMember } from 'sanity'
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
        readOnly:true,
        hidden:true
      }),
      defineField({
        name: 'esloganes',
        title:'Eslóganes',
        type:'reference',
        to:[{
          type:'sloganSequenceType'
        }]
      }),
      defineField({
        name:'works',
        title:'Trabajos',
        type:'array',
        of:[
          defineArrayMember({
            type:'reference',
            title: 'Proyecto',
            name: 'proyecto',
            to:[{
              type:'workType'              
            }]
          })
        ]
      }),
      defineField({
        name:'textBlocks',
        title:'Bloque de píldoras',
        type:'array',
        of:[
          defineArrayMember({
            type:'reference',
            title:'Píldora',
            to:[{
              type:'textPillsType'
            }]
          })
        ]
      })
    ],
    preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Home sin título',
        media: HomeIcon,
      }
    },
  },
})