import { defineType, defineField } from "sanity";
import { slugify } from '../../../lib/slugify'
import {HashIcon} from '@sanity/icons/Hash'

export const workCategoryType = defineType({
    name:'workCategoryType',
    title:'Categoría',
    type:'document',
    icon:HashIcon,
    fields:[
        defineField({
            name:'title',
            title:'Categoría',
            type:'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description:'Se genera automáticamente a partir del título.',
            validation: (rule) =>
                rule.required().error('El slug es necesario. Pulsa "generate".'),
            options: {
                source: 'title',
                slugify,
            },
        })
    ]
})