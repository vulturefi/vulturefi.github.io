/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AggregateAccount,
  AggregateAccountInterface,
} from "../AggregateAccount";

const _abi = [
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
    inputs: [],
    name: "accountName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "accountName_",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isStable_",
        type: "bool",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isStable",
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
        internalType: "string",
        name: "accountName_",
        type: "string",
      },
    ],
    name: "setAccountName",
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
  "0x608060405234801561001057600080fd5b50610d46806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100c1578063c5e57985146100e9578063caa5b29b146100fe578063f2fde38b1461011157600080fd5b806309047bdd146100825780632e95adad146100a4578063715018a6146100b9575b600080fd5b60665461008f9060ff1681565b60405190151581526020015b60405180910390f35b6100b76100b2366004610b78565b610124565b005b6100b7610252565b60335460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161009b565b6100f16102df565b60405161009b9190610bb5565b6100b761010c366004610c28565b61036d565b6100b761011f366004610c7f565b610538565b60335473ffffffffffffffffffffffffffffffffffffffff1633146101aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600081511161023b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f506c6174797075733a20416767726567617465206163636f756e74206e616d6560448201527f2063616e6e6f74206265207a65726f000000000000000000000000000000000060648201526084016101a1565b805161024e906065906020840190610a05565b5050565b60335473ffffffffffffffffffffffffffffffffffffffff1633146102d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101a1565b6102dd6000610668565b565b606580546102ec90610cbc565b80601f016020809104026020016040519081016040528092919081815260200182805461031890610cbc565b80156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b505050505081565b600054610100900460ff1680610386575060005460ff16155b610412576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016101a1565b600054610100900460ff1615801561045157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b60008351116104bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f504c543a4143434f554e545f4e414d455f564f4944000000000000000000000060448201526064016101a1565b6104c46106df565b82516104d7906065906020860190610a05565b50606680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016831515179055801561053357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b505050565b60335473ffffffffffffffffffffffffffffffffffffffff1633146105b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101a1565b73ffffffffffffffffffffffffffffffffffffffff811661065c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016101a1565b61066581610668565b50565b6033805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16806106f8575060005460ff16155b610784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016101a1565b600054610100900460ff161580156107c357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b6107cb610804565b6107d3610918565b801561066557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff168061081d575060005460ff16155b6108a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016101a1565b600054610100900460ff161580156107d357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000016610101179055801561066557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff1680610931575060005460ff16155b6109bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016101a1565b600054610100900460ff161580156109fc57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b6107d333610668565b828054610a1190610cbc565b90600052602060002090601f016020900481019282610a335760008555610a79565b82601f10610a4c57805160ff1916838001178555610a79565b82800160010185558215610a79579182015b82811115610a79578251825591602001919060010190610a5e565b50610a85929150610a89565b5090565b5b80821115610a855760008155600101610a8a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112610ade57600080fd5b813567ffffffffffffffff80821115610af957610af9610a9e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715610b3f57610b3f610a9e565b81604052838152866020858801011115610b5857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060208284031215610b8a57600080fd5b813567ffffffffffffffff811115610ba157600080fd5b610bad84828501610acd565b949350505050565b600060208083528351808285015260005b81811015610be257858101830151858201604001528201610bc6565b81811115610bf4576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008060408385031215610c3b57600080fd5b823567ffffffffffffffff811115610c5257600080fd5b610c5e85828601610acd565b92505060208301358015158114610c7457600080fd5b809150509250929050565b600060208284031215610c9157600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610cb557600080fd5b9392505050565b600181811c90821680610cd057607f821691505b60208210811415610d0a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220e9a720177f5a04b743581340a7c0b20727b6d15c340bb0abce5f06daff1718ae64736f6c63430008090033";

export class AggregateAccount__factory extends ContractFactory {
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
  ): Promise<AggregateAccount> {
    return super.deploy(overrides || {}) as Promise<AggregateAccount>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AggregateAccount {
    return super.attach(address) as AggregateAccount;
  }
  connect(signer: Signer): AggregateAccount__factory {
    return super.connect(signer) as AggregateAccount__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AggregateAccountInterface {
    return new utils.Interface(_abi) as AggregateAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AggregateAccount {
    return new Contract(address, _abi, signerOrProvider) as AggregateAccount;
  }
}