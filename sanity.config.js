import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { media } from 'sanity-plugin-media'
import { structure } from './config/structure'
import {esESLocale} from '@sanity/locale-es-es'

export default defineConfig({
  name: 'default',
  title: 'Finabluma',

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [structureTool({structure}), visionTool(), media(),esESLocale()],

  schema: {
    types: schemaTypes,
  },

  document: {
     newDocumentOptions: (prev, { creationContext }) => {
      // ❌ bloquear creación global
      if (creationContext.type === 'global') {
        // Hide the creation of "settings" documents if the context is global
        return prev.filter(
          (templateItem) =>
            templateItem.templateId !== 'homeType' &&
            templateItem.templateId !== 'seoType' &&
            templateItem.templateId !== 'media.tag' &&
            templateItem.templateId !== 'media.folder',
        )
      }
      return prev
     }
  }
})
