import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCheckin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Checkin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly timeStamp?: string | null;
  readonly userID?: string | null;
  readonly groupID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCheckin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Checkin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly timeStamp?: string | null;
  readonly userID?: string | null;
  readonly groupID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Checkin = LazyLoading extends LazyLoadingDisabled ? EagerCheckin : LazyCheckin

export declare const Checkin: (new (init: ModelInit<Checkin>) => Checkin) & {
  copyOf(source: Checkin, mutator: (draft: MutableModel<Checkin>) => MutableModel<Checkin> | void): Checkin;
}