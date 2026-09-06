import { defineField, defineType } from "sanity";
import {BlockContentIcon} from '@sanity/icons/BlockContent'
export const textPillsType = defineType({
    name:'textPillsType',
    title:'Bloque de Texto',
    type:'document',
    icon:BlockContentIcon,
    fields:[
        defineField({
            title:'Bloque',
            name:'textblock',
            type:'textBlockType'
        }),
    ]
})