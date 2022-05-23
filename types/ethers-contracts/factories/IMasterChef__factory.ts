/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMasterChef, IMasterChefInterface } from "../IMasterChef";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "devPercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "investorPercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "joePerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "lpToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "allocPoint",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastRewardTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accJoePerShare",
            type: "uint256",
          },
        ],
        internalType: "struct IMasterChef.PoolInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasuryPercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IMasterChef__factory {
  static readonly abi = _abi;
  static createInterface(): IMasterChefInterface {
    return new utils.Interface(_abi) as IMasterChefInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMasterChef {
    return new Contract(address, _abi, signerOrProvider) as IMasterChef;
  }
}
