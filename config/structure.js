import {ProjectsIcon} from '@sanity/icons/Projects'
import {HashIcon} from '@sanity/icons/Hash'
import {StringIcon} from '@sanity/icons/String'
import {BlockContentIcon} from '@sanity/icons/BlockContent'
import {CogIcon} from '@sanity/icons/Cog'
export const structure = (S) =>
  S.list()
    .title('Contenido')
    .items([
        S.listItem()
        .title('Inicio')
        .id('homeType')
        .schemaType('homeType')
        .child(
          S.document()
            .id('homeType')
            .schemaType('homeType')
            .documentId('homeType'),
        ),
      S.divider(),
      S.listItem()
      .title('Proyectos')
      .icon(ProjectsIcon)
      .child(
          S.documentTypeList('workType')
      ),
      S.listItem()
      .title('Categorías')
      .icon(HashIcon)
      .child(
          S.documentTypeList('workCategoryType')
      ),
      S.divider(),
      S.listItem()
      .title('Eslóganes')
      .icon(StringIcon)
      .child(
          S.documentTypeList('sloganSequenceType')
          .title('Eslóganes')
      ),
      S.listItem()
      .title('Píldoras de Texto')
      .icon(BlockContentIcon)
      .child(
          S.documentTypeList('textPillsType')
          .title('Píldoras de Texto')
      ),
      S.divider(),
      S.listItem()
        .title('Ajustes del sitio')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Ajustes del sitio')
            .items([
                S.documentListItem('seoType').id('seoType').schemaType('seoType'),
                S.documentListItem('faviconType').id('faviconType').schemaType('faviconType'),
            ])
        )
    ])