/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TimelockController,
  TimelockControllerInterface,
} from "../TimelockController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620024c4380380620024c48339810160408190526200003491620003a4565b6200004f6000805160206200246483398151915280620001c9565b620000796000805160206200248483398151915260008051602062002464833981519152620001c9565b620000a3600080516020620024a483398151915260008051602062002464833981519152620001c9565b620000be600080516020620024648339815191523362000214565b620000d9600080516020620024648339815191523062000214565b60005b8251811015620001365762000123600080516020620024848339815191528483815181106200010f576200010f62000418565b60200260200101516200021460201b60201c565b6200012e816200042e565b9050620000dc565b5060005b815181101562000180576200016d600080516020620024a48339815191528383815181106200010f576200010f62000418565b62000178816200042e565b90506200013a565b5060028390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150505062000458565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000220828262000224565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000220576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002803390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620002f257600080fd5b919050565b600082601f8301126200030957600080fd5b815160206001600160401b0380831115620003285762000328620002c4565b8260051b604051601f19603f83011681018181108482111715620003505762000350620002c4565b6040529384528581018301938381019250878511156200036f57600080fd5b83870191505b8482101562000399576200038982620002da565b8352918301919083019062000375565b979650505050505050565b600080600060608486031215620003ba57600080fd5b835160208501519093506001600160401b0380821115620003da57600080fd5b620003e887838801620002f7565b93506040860151915080821115620003ff57600080fd5b506200040e86828701620002f7565b9150509250925092565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200045157634e487b7160e01b600052601160045260246000fd5b5060010190565b611ffc80620004686000396000f3fe60806040526004361061018f5760003560e01c806364d62353116100d6578063b1c5f4271161007f578063d547741f11610059578063d547741f146104e3578063e38335e514610503578063f27a0c921461051657600080fd5b8063b1c5f42714610476578063c4d252f514610496578063d45c4435146104b657600080fd5b80638f61f4f5116100b05780638f61f4f5146103dc57806391d1485414610410578063a217fddf1461046157600080fd5b806364d623531461037c5780638065657f1461039c5780638f2a0bb0146103bc57600080fd5b8063248a9ca31161013857806331d507501161011257806331d507501461031c57806336568abe1461033c578063584b153e1461035c57600080fd5b8063248a9ca31461029b5780632ab0f529146102cb5780632f2ff15d146102fc57600080fd5b80630d3cf6fc116101695780630d3cf6fc14610234578063134008d31461026857806313bc9f201461027b57600080fd5b806301d5062a1461019b57806301ffc9a7146101bd57806307bd0265146101f257600080fd5b3661019657005b600080fd5b3480156101a757600080fd5b506101bb6101b6366004611767565b61052b565b005b3480156101c957600080fd5b506101dd6101d83660046117dc565b6105c1565b60405190151581526020015b60405180910390f35b3480156101fe57600080fd5b506102267fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b6040519081526020016101e9565b34801561024057600080fd5b506102267f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101bb61027636600461181e565b61065a565b34801561028757600080fd5b506101dd61029636600461188a565b610715565b3480156102a757600080fd5b506102266102b636600461188a565b60009081526020819052604090206001015490565b3480156102d757600080fd5b506101dd6102e636600461188a565b6000908152600160208190526040909120541490565b34801561030857600080fd5b506101bb6103173660046118a3565b61073b565b34801561032857600080fd5b506101dd61033736600461188a565b610766565b34801561034857600080fd5b506101bb6103573660046118a3565b61077f565b34801561036857600080fd5b506101dd61037736600461188a565b61081d565b34801561038857600080fd5b506101bb61039736600461188a565b610833565b3480156103a857600080fd5b506102266103b736600461181e565b6108e9565b3480156103c857600080fd5b506101bb6103d7366004611914565b610928565b3480156103e857600080fd5b506102267fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b34801561041c57600080fd5b506101dd61042b3660046118a3565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b34801561046d57600080fd5b50610226600081565b34801561048257600080fd5b506102266104913660046119c6565b610b27565b3480156104a257600080fd5b506101bb6104b136600461188a565b610b6c565b3480156104c257600080fd5b506102266104d136600461188a565b60009081526001602052604090205490565b3480156104ef57600080fd5b506101bb6104fe3660046118a3565b610c4e565b6101bb6105113660046119c6565b610c74565b34801561052257600080fd5b50600254610226565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc16105568133610e98565b60006105668989898989896108e9565b90506105728184610f4e565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516105ae96959493929190611ab8565b60405180910390a3505050505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061065457507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff166106d7576106d78133610e98565b60006106e78888888888886108e9565b90506106f38185611062565b6107028160008a8a8a8a61116b565b61070b81611296565b5050505050505050565b6000818152600160205260408120546001811180156107345750428111155b9392505050565b6000828152602081905260409020600101546107578133610e98565b6107618383611325565b505050565b60008181526001602052604081205481905b1192915050565b73ffffffffffffffffffffffffffffffffffffffff8116331461080f5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6108198282611415565b5050565b6000818152600160208190526040822054610778565b3330146108a85760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201527f62652074696d656c6f636b0000000000000000000000000000000000000000006064820152608401610806565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b600086868686868660405160200161090696959493929190611ab8565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc16109538133610e98565b8887146109c85760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610806565b888514610a3d5760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610806565b6000610a4f8b8b8b8b8b8b8b8b610b27565b9050610a5b8184610f4e565b60005b8a811015610b195780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610a9b57610a9b611b03565b9050602002016020810190610ab09190611b32565b8d8d86818110610ac257610ac2611b03565b905060200201358c8c87818110610adb57610adb611b03565b9050602002810190610aed9190611b4d565b8c8b604051610b0196959493929190611ab8565b60405180910390a3610b1281611be1565b9050610a5e565b505050505050505050505050565b60008888888888888888604051602001610b48989796959493929190611cea565b60405160208183030381529060405280519060200120905098975050505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610b978133610e98565b610ba08261081d565b610c125760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20636160448201527f6e6e6f742062652063616e63656c6c65640000000000000000000000000000006064820152608401610806565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610c6a8133610e98565b6107618383611415565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16610cf157610cf18133610e98565b878614610d665760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610806565b878414610ddb5760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610806565b6000610ded8a8a8a8a8a8a8a8a610b27565b9050610df98185611062565b60005b89811015610e8257610e7282828d8d85818110610e1b57610e1b611b03565b9050602002016020810190610e309190611b32565b8c8c86818110610e4257610e42611b03565b905060200201358b8b87818110610e5b57610e5b611b03565b9050602002810190610e6d9190611b4d565b61116b565b610e7b81611be1565b9050610dfc565b50610e8c81611296565b50505050505050505050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661081957610eee8173ffffffffffffffffffffffffffffffffffffffff1660146114cc565b610ef98360206114cc565b604051602001610f0a929190611deb565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905262461bcd60e51b825261080691600401611e6c565b610f5782610766565b15610fca5760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201527f7265616479207363686564756c656400000000000000000000000000000000006064820152608401610806565b6002548110156110425760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e7460448201527f2064656c617900000000000000000000000000000000000000000000000000006064820152608401610806565b61104c8142611ebd565b6000928352600160205260409092209190915550565b61106b82610715565b6110dd5760405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f74207265616479000000000000000000000000000000000000000000006064820152608401610806565b8015806110f95750600081815260016020819052604090912054145b6108195760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e67206465706560448201527f6e64656e637900000000000000000000000000000000000000000000000000006064820152608401610806565b60008473ffffffffffffffffffffffffffffffffffffffff16848484604051611195929190611ed5565b60006040518083038185875af1925050503d80600081146111d2576040519150601f19603f3d011682016040523d82523d6000602084013e6111d7565b606091505b505090508061124e5760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e67207460448201527f72616e73616374696f6e207265766572746564000000000000000000000000006064820152608401610806565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58878787876040516112859493929190611ee5565b60405180910390a350505050505050565b61129f81610715565b6113115760405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f74207265616479000000000000000000000000000000000000000000006064820152608401610806565b600090815260016020819052604090912055565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166108195760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556113b73390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156108195760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b606060006114db836002611f25565b6114e6906002611ebd565b67ffffffffffffffff8111156114fe576114fe611f62565b6040519080825280601f01601f191660200182016040528015611528576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061155f5761155f611b03565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106115c2576115c2611b03565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006115fe846002611f25565b611609906001611ebd565b90505b60018111156116a6577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061164a5761164a611b03565b1a60f81b82828151811061166057611660611b03565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c9361169f81611f91565b905061160c565b5083156107345760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610806565b803573ffffffffffffffffffffffffffffffffffffffff8116811461171957600080fd5b919050565b60008083601f84011261173057600080fd5b50813567ffffffffffffffff81111561174857600080fd5b60208301915083602082850101111561176057600080fd5b9250929050565b600080600080600080600060c0888a03121561178257600080fd5b61178b886116f5565b965060208801359550604088013567ffffffffffffffff8111156117ae57600080fd5b6117ba8a828b0161171e565b989b979a50986060810135976080820135975060a09091013595509350505050565b6000602082840312156117ee57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461073457600080fd5b60008060008060008060a0878903121561183757600080fd5b611840876116f5565b955060208701359450604087013567ffffffffffffffff81111561186357600080fd5b61186f89828a0161171e565b979a9699509760608101359660809091013595509350505050565b60006020828403121561189c57600080fd5b5035919050565b600080604083850312156118b657600080fd5b823591506118c6602084016116f5565b90509250929050565b60008083601f8401126118e157600080fd5b50813567ffffffffffffffff8111156118f957600080fd5b6020830191508360208260051b850101111561176057600080fd5b600080600080600080600080600060c08a8c03121561193257600080fd5b893567ffffffffffffffff8082111561194a57600080fd5b6119568d838e016118cf565b909b50995060208c013591508082111561196f57600080fd5b61197b8d838e016118cf565b909950975060408c013591508082111561199457600080fd5b506119a18c828d016118cf565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b0312156119e257600080fd5b883567ffffffffffffffff808211156119fa57600080fd5b611a068c838d016118cf565b909a50985060208b0135915080821115611a1f57600080fd5b611a2b8c838d016118cf565b909850965060408b0135915080821115611a4457600080fd5b50611a518b828c016118cf565b999c989b509699959896976060870135966080013595509350505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260a060408201526000611aee60a083018688611a6f565b60608301949094525060800152949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611b4457600080fd5b610734826116f5565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b8257600080fd5b83018035915067ffffffffffffffff821115611b9d57600080fd5b60200191503681900382131561176057600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c1357611c13611bb2565b5060010190565b60008383855260208086019550808560051b8301018460005b87811015611cdd577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1883603018112611c9457600080fd5b8701803567ffffffffffffffff811115611cad57600080fd5b803603891315611cbc57600080fd5b611cc98582888501611a6f565b9a86019a9450505090830190600101611c33565b5090979650505050505050565b60a0808252810188905260008960c08301825b8b811015611d385773ffffffffffffffffffffffffffffffffffffffff611d23846116f5565b16825260209283019290910190600101611cfd565b5083810360208501528881527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff891115611d7157600080fd5b8860051b9150818a602083013781810191505060208101600081526020848303016040850152611da281888a611c1a565b6060850196909652505050608001529695505050505050565b60005b83811015611dd6578181015183820152602001611dbe565b83811115611de5576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611e23816017850160208801611dbb565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611e60816028840160208801611dbb565b01602801949350505050565b6020815260008251806020840152611e8b816040850160208701611dbb565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008219821115611ed057611ed0611bb2565b500190565b8183823760009101908152919050565b73ffffffffffffffffffffffffffffffffffffffff85168152836020820152606060408201526000611f1b606083018486611a6f565b9695505050505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611f5d57611f5d611bb2565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081611fa057611fa0611bb2565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019056fea26469706673582212203130341e4fc67c233a6f842fc82eb2c1321ddbd7ff2a3a8ba6472282890221e864736f6c634300080900335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63";

export class TimelockController__factory extends ContractFactory {
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
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimelockController> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      overrides || {}
    ) as Promise<TimelockController>;
  }
  getDeployTransaction(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      overrides || {}
    );
  }
  attach(address: string): TimelockController {
    return super.attach(address) as TimelockController;
  }
  connect(signer: Signer): TimelockController__factory {
    return super.connect(signer) as TimelockController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerInterface {
    return new utils.Interface(_abi) as TimelockControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockController {
    return new Contract(address, _abi, signerOrProvider) as TimelockController;
  }
}
