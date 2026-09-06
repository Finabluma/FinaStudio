import {ProjectsIcon} from '@sanity/icons/Projects'
import {HashIcon} from '@sanity/icons/Hash'

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
      S.divider(),
      S.listItem()
      .title('Categorías')
      .icon(HashIcon)
      .child(
          S.documentTypeList('workCategoryType')
      ),
    ])