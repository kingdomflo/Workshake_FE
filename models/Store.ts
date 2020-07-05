import ChainStore from "./ChainStore";

export default class Store {
  id!: number;
  label!: string;
  workShake!: boolean;
  latitude!: number;
  longitude!: number;
  chainStore!: ChainStore;
}