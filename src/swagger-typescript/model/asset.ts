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
import { AdministrativeInformation } from './administrativeInformation';
import { AssetKind } from './assetKind';
import { IEmbeddedDataSpecification } from './iEmbeddedDataSpecification';
import { Identifier } from './identifier';
import { LangString } from './langString';
import { ModelType } from './modelType';
import { SubmodelReference } from './submodelReference';

export interface Asset { 
    idShort?: string;
    kind?: AssetKind;
    assetIdentificationModel?: SubmodelReference;
    billOfMaterial?: SubmodelReference;
    readonly embeddedDataSpecifications?: Array<IEmbeddedDataSpecification>;
    modelType?: ModelType;
    identification?: Identifier;
    administration?: AdministrativeInformation;
    category?: string;
    description?: Array<LangString>;
}