import { faviconType } from "./documents/singletons/faviconType";
import { seoType } from "./documents/singletons/seoType";
import { homeType } from "./documents/singletons/homeType";
import { textPillsType } from "./documents/collections/textPillsType";
import { workCategoryType } from "./documents/collections/workCategoryType";
import { workType } from "./documents/collections/workType";
import { pageMetaDataType } from "./objects/pageMetadataType";
import { textSequenceType } from "./objects/textSequenceType";
import { sloganSequenceType } from "./documents/collections/sloganSequenceType";
import { textBlockType } from "./objects/textBlockType";

export const schemaTypes = [
    pageMetaDataType,
    workType,
    workCategoryType,
    textSequenceType,
    sloganSequenceType,
    textBlockType,
    textPillsType,
    homeType,
    seoType,
    faviconType
]
