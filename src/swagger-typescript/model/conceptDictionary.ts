/**
 * BaSyx Asset Administration Shell HTTP REST-API
 * The full description of the generic BaSyx Asset Administration Shell HTTP REST-API
 *
 * OpenAPI spec version: v1
 * Contact: constantin.ziesche@bosch.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ConceptDescriptionReference } from './conceptDescriptionReference';
import { LangString } from './langString';
import { ModelType } from './modelType';

export interface ConceptDictionary { 
    idShort?: string;
    category?: string;
    description?: Array<LangString>;
    metaData?: { [key: string]: string; };
    conceptDescriptions?: Array<ConceptDescriptionReference>;
    modelType?: ModelType;
}