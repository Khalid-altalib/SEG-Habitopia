import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerChallengeType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChallengeType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChallengeType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChallengeType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChallengeType = LazyLoading extends LazyLoadingDisabled ? EagerChallengeType : LazyChallengeType

export declare const ChallengeType: (new (init: ModelInit<ChallengeType>) => ChallengeType) & {
  copyOf(source: ChallengeType, mutator: (draft: MutableModel<ChallengeType>) => MutableModel<ChallengeType> | void): ChallengeType;
}