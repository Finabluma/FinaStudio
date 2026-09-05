import { defineField, defineType } from 'sanity'
import { slugify } from '../../../lib/slugify'
import {ProjectsIcon} from '@sanity/icons/Projects'

export const workType = defineType({
    name:'workType',
    title:'Proyectos',
    type:'document',
    icon:ProjectsIcon,
    fields:[
        defineField({
            name:'titulo',
            type: 'string',
            validation: (rule) => rule.required().error(
            'El nombre del proyecto es necesario. Es recomendable que no excedan los 60 caracteres',
          ),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                slugify,
            },
        }),
        defineField({
            name: 'image',
            type: 'image',
            description: 'Esta es la imagen representativa del proyecto.',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alt text',
                    description: 'Texto alternativo para accesibilidad y SEO',
                }),
            ],
        }),
    ]
})