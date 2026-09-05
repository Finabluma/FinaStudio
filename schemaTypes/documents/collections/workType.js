import { defineArrayMember, defineField, defineType } from 'sanity'
import { slugify } from '../../../lib/slugify'
import {ProjectsIcon} from '@sanity/icons/Projects'
import {EarthAmericasIcon} from '@sanity/icons/EarthAmericas'

export const workType = defineType({
    name:'workType',
    title:'Proyectos',
    type:'document',
    icon:ProjectsIcon,
      groups: [{ name: 'seo', title: 'SEO PAGE', icon: EarthAmericasIcon }],

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
        defineField({        
            title: 'Content', 
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
        }),
        defineField({
            name:'Etiquetas',
            type:'array',
            of:[
                defineArrayMember({
                    type:'reference',
                    title: 'Categoría',
                    name: 'categoria',                
                    to: [{type: 'workCategoryType'}]
                })
            ]
            
        }),
        defineField({
            name: 'seo',
            type: 'pageMetaDataType',
            group: 'seo',
        }),
    ]
})