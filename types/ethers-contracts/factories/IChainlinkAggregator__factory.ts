/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IChainlinkAggregator,
  IChainlinkAggregatorInterface,
} from "../IChainlinkAggregator";

const _abi = [
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IChainlinkAggregator__factory {
  static readonly abi = _abi;
  static createInterface(): IChainlinkAggregatorInterface {
    return new utils.Interface(_abi) as IChainlinkAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IChainlinkAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IChainlinkAggregator;
  }
}