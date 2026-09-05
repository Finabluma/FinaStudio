import { homeType } from "./documents/singletons/homeType";
import { workCategoryType } from "./documents/collections/workCategoryType";
import { workType } from "./documents/collections/workType";
import { pageMetaDataType } from "./objects/pageMetadataType";
import { textSequenceType } from "./objects/textSequenceType";

export const schemaTypes = [
    workType,
    workCategoryType,
    pageMetaDataType,
    textSequenceType,
    homeType
]
