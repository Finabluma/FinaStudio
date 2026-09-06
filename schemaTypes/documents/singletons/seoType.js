import {defineField, defineType} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons/EarthGlobe'

export const seoType = defineType({
  name: 'seoType',
  title: 'SEO Global',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      title: 'Nombre de la página',
      name: 'name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(60).error('El titulo no debe exceder los 60 carcateres.')
    }),
    defineField({
      title: 'Language Code',
      description:
        'ISO 639-1 Language Codes (i.e. “es” or “en”), can be country specific (i.e. “es-es”)',
      name: 'hrefLang',
      type: 'string',
    }),
    defineField({
      type: 'boolean',
      name: 'index',
      description:
        'Para evitar que se indexe una URL, también tendrás que seleccionar el índice verdadero en la etiqueta.',
      initialValue: true,
    }),
    defineField({
      name: 'seo',
      type: 'pageMetaDataType',
    }),
  ],
  preview: {
    select: {
      title: 'seo.pageName',
    },
    prepare({title}) {
      return {
        title: 'SEO Global',
        subtitle: title,
      }
    },
  },
})
