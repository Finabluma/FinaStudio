import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons/Image'
export const faviconType = defineType({
  name: 'faviconType',
  title: 'Favicon & App Icons',
  type: 'document',
  icon: ImageIcon,

  fields: [
    defineField({
      name: 'faviconSvg',
      title: 'Favicon SVG',
      description: 'Favicon principal para navegadores modernos.',
      type: 'image',
    }),

    defineField({
      name: 'faviconIco',
      title: 'Favicon ICO',
      description: 'Favicon para compatibilidad con navegadores antiguos.',
      type: 'file',
      options: {
        accept: '.ico',
      },
    }),

    defineField({
      name: 'favicon16',
      title: 'Favicon 16×16',
      description: 'Icono de 16×16 px.',
      type: 'image',
      options: {
        accept: 'image/png',
      },
    }),

    defineField({
      name: 'favicon32',
      title: 'Favicon 32×32',
      description: 'Icono de 32×32 px.',
      type: 'image',
      options: {
        accept: 'image/png',
      },
    }),

    defineField({
      name: 'appleTouchIcon',
      title: 'Apple Touch Icon',
      description: 'Icono para iPhone y iPad. Recomendado: 180×180 px.',
      type: 'image',
      options: {
        accept: 'image/png',
      },
    }),

    defineField({
      name: 'androidIcon192',
      title: 'Android Icon 192×192',
      description: 'Icono para Android y PWA.',
      type: 'image',
      options: {
        accept: 'image/png',
      },
    }),

    defineField({
      name: 'androidIcon512',
      title: 'Android Icon 512×512',
      description: 'Icono grande para Android y PWA.',
      type: 'image',
      options: {
        accept: 'image/png',
      },
    }),

    defineField({
      name: 'themeColor',
      title: 'Theme Color',
      description: 'Color utilizado por navegadores móviles y PWA.',
      type: 'string',
      initialValue: '#ffffff',
    }),
  ],

  preview: {
    select: {
      media: 'faviconSvg',
    },

    prepare({media}) {
      return {
        title: 'Favicon & App Icons',
        media,
      }
    },
  },
})