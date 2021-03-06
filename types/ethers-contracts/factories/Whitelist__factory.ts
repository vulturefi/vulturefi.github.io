/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Whitelist, WhitelistInterface } from "../Whitelist";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ApproveWallet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "RevokeWallet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "approveWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "check",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "revokeWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6106348061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80638da5cb5b116100505780638da5cb5b146100a7578063c23697a8146100d4578063f2fde38b1461011d57600080fd5b80630fcb0ae514610077578063715018a61461008c578063808a9d4014610094575b600080fd5b61008a6100853660046105c1565b610130565b005b61008a61026b565b61008a6100a23660046105c1565b6102f8565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61010d6100e23660046105c1565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405190151581526020016100cb565b61008a61012b3660046105c1565b610423565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff166102685773ffffffffffffffffffffffffffffffffffffffff811660008181526001602081815260409283902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690921790915590519182527fc1e7aae3f3125e58cfc69ab2a872a655dbb9427614aa85b29bb5abeaca4d6a9291015b60405180910390a15b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101ad565b6102f6600061054c565b565b60005473ffffffffffffffffffffffffffffffffffffffff163314610379576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101ad565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff16156102685773ffffffffffffffffffffffffffffffffffffffff811660008181526001602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f1b676c3cc753786cb95aff57280fd7406f1da74e2a8b9755fdd395aded3e16dd910161025f565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101ad565b73ffffffffffffffffffffffffffffffffffffffff8116610547576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016101ad565b610268815b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156105d357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146105f757600080fd5b939250505056fea2646970667358221220226c49e7c14072f75c5abb2823955537894298ee338b03cb4e7251c463fa316264736f6c63430008090033";

export class Whitelist__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Whitelist> {
    return super.deploy(overrides || {}) as Promise<Whitelist>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Whitelist {
    return super.attach(address) as Whitelist;
  }
  connect(signer: Signer): Whitelist__factory {
    return super.connect(signer) as Whitelist__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhitelistInterface {
    return new utils.Interface(_abi) as WhitelistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Whitelist {
    return new Contract(address, _abi, signerOrProvider) as Whitelist;
  }
}
