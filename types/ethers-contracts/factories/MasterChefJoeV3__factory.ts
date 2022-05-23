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
  MasterChefJoeV3,
  MasterChefJoeV3Interface,
} from "../MasterChefJoeV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IMasterChef",
        name: "_MASTER_CHEF_V2",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_joe",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_MASTER_PID",
        type: "uint256",
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
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IRewarder",
        name: "rewarder",
        type: "address",
      },
    ],
    name: "Add",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Init",
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
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IRewarder",
        name: "rewarder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "overwrite",
        type: "bool",
      },
    ],
    name: "Set",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastRewardTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accJoePerShare",
        type: "uint256",
      },
    ],
    name: "UpdatePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "JOE",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MASTER_CHEF_V2",
    outputs: [
      {
        internalType: "contract IMasterChef",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MASTER_PID",
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
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "contract IRewarder",
        name: "_rewarder",
        type: "address",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestFromMasterChef",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "dummyToken",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "joePerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "pids",
        type: "uint256[]",
      },
    ],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "pendingJoe",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "bonusTokenAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "bonusTokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "pendingBonusToken",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "accJoePerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IRewarder",
        name: "rewarder",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "pools",
        type: "uint256",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IRewarder",
        name: "_rewarder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "overwrite",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162003167380380620031678339810160408190526200003491620000ae565b600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180556001600160a01b03928316608052911660a05260c052620000f6565b6001600160a01b0381168114620000ab57600080fd5b50565b600080600060608486031215620000c457600080fd5b8351620000d18162000095565b6020850151909350620000e48162000095565b80925050604084015190509250925092565b60805160a05160c051612fdf62000188600039600081816102900152818161065e015281816109f801526118fc01526000818161038e015281816108550152611ae80152600081816101fd015281816105aa0152818161068b01528181610a25015281816115e3015281816116770152818161170b015281816117af0152818161184501526119260152612fdf6000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806361621aaa116100d8578063ab7de0981161008c578063f2fde38b11610066578063f2fde38b14610353578063ffcd426314610366578063ffebad301461038957600080fd5b8063ab7de09814610325578063ca418d2314610338578063e2bbb1581461034057600080fd5b806388bba42f116100bd57806388bba42f146102ba5780638da5cb5b146102cd57806393f1a40b146102de57600080fd5b806361621aaa1461028b578063715018a6146102b257600080fd5b8063441a3e701161012f57806351eb05a61161011457806351eb05a6146102525780635312ea8e1461026557806357a5b58c1461027857600080fd5b8063441a3e70146102375780634f70b15a1461024a57600080fd5b806317caf6f11161016057806317caf6f1146101da57806319ab453c146101e357806327bf88ad146101f857600080fd5b8063081e3eda1461017c5780631526fe2714610193575b600080fd5b6002545b6040519081526020015b60405180910390f35b6101a66101a1366004612a28565b6103b0565b604080516001600160a01b03968716815260208101959095528401929092526060830152909116608082015260a00161018a565b61018060065481565b6101f66101f1366004612a59565b6103fe565b005b61021f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161018a565b6101f6610245366004612a76565b61071c565b6101f66109d0565b6101f6610260366004612a28565b610a8b565b6101f6610273366004612a28565b610d01565b6101f6610286366004612a98565b610eb7565b6101807f000000000000000000000000000000000000000000000000000000000000000081565b6101f6610ef4565b6101f66102c8366004612b1b565b610fb0565b6000546001600160a01b031661021f565b6103106102ec366004612b65565b60056020908152600092835260408084209091529082529020805460019091015482565b6040805192835260208301919091520161018a565b6101f6610333366004612b95565b611254565b6101806115d4565b6101f661034e366004612a76565b6119bb565b6101f6610361366004612a59565b611d99565b610379610374366004612b65565b611ee2565b60405161018a9493929190612c03565b61021f7f000000000000000000000000000000000000000000000000000000000000000081565b600281815481106103c057600080fd5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b0393841695509193909290911685565b6000546001600160a01b0316331461045d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201526000906001600160a01b038316906370a082319060240160206040518083038186803b1580156104b857600080fd5b505afa1580156104cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f09190612c73565b9050806105655760405162461bcd60e51b815260206004820152602360248201527f4d61737465724368656656323a2042616c616e6365206d75737420657863656560448201527f64203000000000000000000000000000000000000000000000000000000000006064820152608401610454565b61057a6001600160a01b03831633308461225a565b6040517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820183905283169063095ea7b390604401602060405180830381600087803b1580156105fd57600080fd5b505af1158015610611573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106359190612c8c565b506040517fe2bbb1580000000000000000000000000000000000000000000000000000000081527f00000000000000000000000000000000000000000000000000000000000000006004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e2bbb15890604401600060405180830381600087803b1580156106d757600080fd5b505af11580156106eb573d6000803e3d6000fd5b50506040517f57a86f7d14ccde89e22870afe839e3011216827daa9b24e18629f0a1e9d6cc14925060009150a15050565b6002600154141561076f5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610454565b600260015561077c6109d0565b61078582610a8b565b60006002838154811061079a5761079a612ca9565b600091825260208083206040805160a081018252600594850290920180546001600160a01b039081168452600182015484860152600282015484840152600382015460608501526004909101541660808301528785529282528284203385529091529120805491925090156108b55760006108468260010154610840670de0b6b3a764000061083a876020015187600001546123ac90919063ffffffff16565b90612450565b906124ab565b905061087c6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383612507565b604051818152859033907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549060200160405180910390a3505b80546108c190846124ab565b80825560208301516108e191670de0b6b3a76400009161083a91906123ac565b600182015560808201516001600160a01b038116156109775781546040517f1a7af8b000000000000000000000000000000000000000000000000000000000815233600482015260248101919091526001600160a01b03821690631a7af8b090604401600060405180830381600087803b15801561095e57600080fd5b505af1158015610972573d6000803e3d6000fd5b505050505b825161098d906001600160a01b03163386612507565b604051848152859033907ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568906020015b60405180910390a3505060018055505050565b6040517fe2bbb1580000000000000000000000000000000000000000000000000000000081527f00000000000000000000000000000000000000000000000000000000000000006004820152600060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e2bbb15890604401600060405180830381600087803b158015610a7157600080fd5b505af1158015610a85573d6000803e3d6000fd5b50505050565b600060028281548110610aa057610aa0612ca9565b60009182526020918290206040805160a081018252600590930290910180546001600160a01b0390811684526001820154948401949094526002810154918301829052600381015460608401526004015490921660808201529150421115610cfd5780516040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b158015610b5e57600080fd5b505afa158015610b72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b969190612c73565b90508015610c0f576000610bb78360400151426124ab90919063ffffffff16565b90506000610be160065461083a8660600151610bdb610bd46115d4565b87906123ac565b906123ac565b9050610c07610bfc8461083a84670de0b6b3a76400006123ac565b602086015190612650565b602085015250505b4260408301526002805483919085908110610c2c57610c2c612ca9565b6000918252602091829020835160059092020180546001600160a01b039283167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216178255848401516001830155604080860151600284015560608601516003840155608090950151600490920180549290931691161790558382015190840151915185927f3be3541fc42237d611b30329040bfa4569541d156560acdbbae57640d20b8f4692610cf392909186919283526020830191909152604082015260600190565b60405180910390a2505b5050565b60026001541415610d545760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610454565b6002600181905550600060028281548110610d7157610d71612ca9565b600091825260208083206040805160a081018252600594850290920180546001600160a01b0390811684526001808301548587015260028301548585015260038301546060860152600490920154811660808501908152898852958552828720338852909452908520805486825591810195909555925190945090811615610e6d576040517f1a7af8b0000000000000000000000000000000000000000000000000000000008152336004820152600060248201526001600160a01b03821690631a7af8b090604401600060405180830381600087803b158015610e5457600080fd5b505af1158015610e68573d6000803e3d6000fd5b505050505b8351610e83906001600160a01b03163384612507565b604051828152859033907fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae0595906020016109bd565b8060005b81811015610a8557610ee4848483818110610ed857610ed8612ca9565b90506020020135610a8b565b610eed81612d07565b9050610ebb565b6000546001600160a01b03163314610f4e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610454565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6000546001600160a01b0316331461100a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610454565b60006002858154811061101f5761101f612ca9565b60009182526020918290206040805160a081018252600590930290910180546001600160a01b039081168452600182015494840194909452600280820154928401929092526003810154606084015260040154909216608082015281549092506110c39186916110bd91908990811061109a5761109a612ca9565b9060005260206000209060050201600301546006546124ab90919063ffffffff16565b90612650565b60065560608101849052811561115d576040517f1a7af8b000000000000000000000000000000000000000000000000000000000815260006004820181905260248201526001600160a01b03841690631a7af8b090604401600060405180830381600087803b15801561113557600080fd5b505af1158015611149573d6000803e3d6000fd5b5050506001600160a01b0384166080830152505b806002868154811061117157611171612ca9565b600091825260209182902083516005929092020180547fffffffffffffffffffffffff00000000000000000000000000000000000000009081166001600160a01b039384161782559284015160018201556040840151600282015560608401516003820155608090930151600490930180549092169216919091179055816111fd5780608001516111ff565b825b6001600160a01b0316857fa54644aae5c48c5971516f334e4fe8ecbc7930e23f34877d4203c6551e67ffaa86856040516112459291909182521515602082015260400190565b60405180910390a35050505050565b6000546001600160a01b031633146112ae5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610454565b6112b96003836126af565b156113065760405162461bcd60e51b815260206004820152601560248201527f6164643a204c5020616c726561647920616464656400000000000000000000006044820152606401610454565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038316906370a082319060240160206040518083038186803b15801561135e57600080fd5b505afa158015611372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113969190612c73565b506001600160a01b03811615611421576040517f1a7af8b000000000000000000000000000000000000000000000000000000000815260006004820181905260248201526001600160a01b03821690631a7af8b090604401600060405180830381600087803b15801561140857600080fd5b505af115801561141c573d6000803e3d6000fd5b505050505b60065442906114309085612650565b6006556040805160a0810182526001600160a01b038581168252600060208301818152938301858152606084018981528784166080860190815260028054600181018255945294517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace600590940293840180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811692871692909217905595517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf84015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad0830155517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad182015591517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad29092018054909316911617905561157c6003846126d1565b506002546001600160a01b03808416919085169061159b9060016124ab565b6040518781527f4b16bd2431ad24dc020ab0e1de7fcb6563dead6a24fb10089d6c23e97a70381f9060200160405180910390a450505050565b6000806103e8905060006117a17f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630735b2086040518163ffffffff1660e01b815260040160206040518083038186803b15801561163a57600080fd5b505afa15801561164e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116729190612c73565b6108407f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166304ef9d586040518163ffffffff1660e01b815260040160206040518083038186803b1580156116ce57600080fd5b505afa1580156116e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117069190612c73565b6108407f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fc3c28af6040518163ffffffff1660e01b815260040160206040518083038186803b15801561176257600080fd5b505afa158015611776573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179a9190612c73565b87906124ab565b9050600061183e8361083a847f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ca418d236040518163ffffffff1660e01b815260040160206040518083038186803b15801561180657600080fd5b505afa15801561181a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdb9190612c73565b90506119b37f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166317caf6f16040518163ffffffff1660e01b815260040160206040518083038186803b15801561189c57600080fd5b505afa1580156118b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d49190612c73565b6040517f1526fe270000000000000000000000000000000000000000000000000000000081527f0000000000000000000000000000000000000000000000000000000000000000600482015261083a907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631526fe279060240160806040518083038186803b15801561197057600080fd5b505afa158015611984573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a89190612d6f565b6020015184906123ac565b935050505090565b60026001541415611a0e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610454565b6002600155611a1b6109d0565b611a2482610a8b565b600060028381548110611a3957611a39612ca9565b600091825260208083206040805160a081018252600594850290920180546001600160a01b03908116845260018201548486015260028201548484015260038201546060850152600490910154166080830152878552928252828420338552909152912080549192509015611b48576000611ad98260010154610840670de0b6b3a764000061083a876020015187600001546123ac90919063ffffffff16565b9050611b0f6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383612507565b604051818152859033907f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549060200160405180910390a3505b81516040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b158015611ba457600080fd5b505afa158015611bb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bdc9190612c73565b8351909150611bf6906001600160a01b031633308761225a565b82516040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600091611c909184916001600160a01b0316906370a082319060240160206040518083038186803b158015611c5857600080fd5b505afa158015611c6c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108409190612c73565b8354909150611c9f9082612650565b8084556020850151611cbf91670de0b6b3a76400009161083a91906123ac565b600184015560808401516001600160a01b03811615611d555783546040517f1a7af8b000000000000000000000000000000000000000000000000000000000815233600482015260248101919091526001600160a01b03821690631a7af8b090604401600060405180830381600087803b158015611d3c57600080fd5b505af1158015611d50573d6000803e3d6000fd5b505050505b604051828152879033907f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159060200160405180910390a35050600180555050505050565b6000546001600160a01b03163314611df35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610454565b6001600160a01b038116611e6f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610454565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b600080606060008060028781548110611efd57611efd612ca9565b600091825260208083206040805160a081018252600594850290920180546001600160a01b039081168452600182015484860190815260028301548585015260038301546060860152600492830154821660808601528e88529585528287208d821688529094528186209451835192517f70a08231000000000000000000000000000000000000000000000000000000008152309281019290925292965093949193919216906370a082319060240160206040518083038186803b158015611fc457600080fd5b505afa158015611fd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ffc9190612c73565b905083604001514211801561201057508015155b1561207257600061202e8560400151426124ab90919063ffffffff16565b9050600061204b60065461083a8860600151610bdb610bd46115d4565b905061206d6120668461083a84670de0b6b3a76400006123ac565b8590612650565b935050505b61209d8360010154610840670de0b6b3a764000061083a8688600001546123ac90919063ffffffff16565b60808501519098506001600160a01b03161561224d5783608001516001600160a01b031663f7c618c16040518163ffffffff1660e01b815260040160206040518083038186803b1580156120f057600080fd5b505afa158015612104573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121289190612dde565b96506121b084608001516001600160a01b031663f7c618c16040518163ffffffff1660e01b815260040160206040518083038186803b15801561216a57600080fd5b505afa15801561217e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121a29190612dde565b6001600160a01b03166126e6565b60808501516040517fc031a66f0000000000000000000000000000000000000000000000000000000081526001600160a01b038c8116600483015292985091169063c031a66f9060240160206040518083038186803b15801561221257600080fd5b505afa158015612226573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061224a9190612c73565b94505b5050505092959194509250565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905291516000928392908816916122ec9190612dfb565b6000604051808303816000865af19150503d8060008114612329576040519150601f19603f3d011682016040523d82523d6000602084013e61232e565b606091505b50915091508180156123585750805115806123585750808060200190518101906123589190612c8c565b6123a45760405162461bcd60e51b815260206004820181905260248201527f426f72696e6745524332303a205472616e7366657246726f6d206661696c65646044820152606401610454565b505050505050565b6000826123bb5750600061244a565b60006123c78385612e17565b9050826123d48583612e54565b146124475760405162461bcd60e51b815260206004820152602160248201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60448201527f77000000000000000000000000000000000000000000000000000000000000006064820152608401610454565b90505b92915050565b60008082116124a15760405162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f0000000000006044820152606401610454565b6124478284612e54565b6000828211156124fd5760405162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f7700006044820152606401610454565b6124478284612e8f565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908716916125919190612dfb565b6000604051808303816000865af19150503d80600081146125ce576040519150601f19603f3d011682016040523d82523d6000602084013e6125d3565b606091505b50915091508180156125fd5750805115806125fd5750808060200190518101906125fd9190612c8c565b6126495760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606401610454565b5050505050565b60008061265d8385612ea6565b9050838110156124475760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006044820152606401610454565b6001600160a01b03811660009081526001830160205260408120541515612447565b6000612447836001600160a01b0384166127f1565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f95d89b4100000000000000000000000000000000000000000000000000000000179052905160609160009182916001600160a01b0386169161275b9190612dfb565b600060405180830381855afa9150503d8060008114612796576040519150601f19603f3d011682016040523d82523d6000602084013e61279b565b606091505b5091509150816127e0576040518060400160405280600381526020017f3f3f3f00000000000000000000000000000000000000000000000000000000008152506127e9565b6127e981612840565b949350505050565b60008181526001830160205260408120546128385750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561244a565b50600061244a565b6060604082511061285f578180602001905181019061244a9190612ebe565b8151602014156129ef5760005b60208160ff161080156128b95750828160ff168151811061288f5761288f612ca9565b01602001517fff000000000000000000000000000000000000000000000000000000000000001615155b156128d057806128c881612f89565b91505061286c565b60008160ff1667ffffffffffffffff8111156128ee576128ee612d40565b6040519080825280601f01601f191660200182016040528015612918576020820181803683370190505b509050600091505b60208260ff1610801561296d5750838260ff168151811061294357612943612ca9565b01602001517fff000000000000000000000000000000000000000000000000000000000000001615155b156129e857838260ff168151811061298757612987612ca9565b602001015160f81c60f81b818360ff16815181106129a7576129a7612ca9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350816129e081612f89565b925050612920565b9392505050565b505060408051808201909152600381527f3f3f3f0000000000000000000000000000000000000000000000000000000000602082015290565b600060208284031215612a3a57600080fd5b5035919050565b6001600160a01b0381168114612a5657600080fd5b50565b600060208284031215612a6b57600080fd5b813561244781612a41565b60008060408385031215612a8957600080fd5b50508035926020909101359150565b60008060208385031215612aab57600080fd5b823567ffffffffffffffff80821115612ac357600080fd5b818501915085601f830112612ad757600080fd5b813581811115612ae657600080fd5b8660208260051b8501011115612afb57600080fd5b60209290920196919550909350505050565b8015158114612a5657600080fd5b60008060008060808587031215612b3157600080fd5b84359350602085013592506040850135612b4a81612a41565b91506060850135612b5a81612b0d565b939692955090935050565b60008060408385031215612b7857600080fd5b823591506020830135612b8a81612a41565b809150509250929050565b600080600060608486031215612baa57600080fd5b833592506020840135612bbc81612a41565b91506040840135612bcc81612a41565b809150509250925092565b60005b83811015612bf2578181015183820152602001612bda565b83811115610a855750506000910152565b8481526001600160a01b03841660208201526080604082015260008351806080840152612c378160a0850160208801612bd7565b606083019390935250601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160160a0019392505050565b600060208284031215612c8557600080fd5b5051919050565b600060208284031215612c9e57600080fd5b815161244781612b0d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612d3957612d39612cd8565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060808284031215612d8157600080fd5b6040516080810181811067ffffffffffffffff82111715612da457612da4612d40565b6040528251612db281612a41565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b600060208284031215612df057600080fd5b815161244781612a41565b60008251612e0d818460208701612bd7565b9190910192915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612e4f57612e4f612cd8565b500290565b600082612e8a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082821015612ea157612ea1612cd8565b500390565b60008219821115612eb957612eb9612cd8565b500190565b600060208284031215612ed057600080fd5b815167ffffffffffffffff80821115612ee857600080fd5b818401915084601f830112612efc57600080fd5b815181811115612f0e57612f0e612d40565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715612f5457612f54612d40565b81604052828152876020848701011115612f6d57600080fd5b612f7e836020830160208801612bd7565b979650505050505050565b600060ff821660ff811415612fa057612fa0612cd8565b6001019291505056fea2646970667358221220e7a439ad2eec4ff6f05ac86d53e16d75af36ffd1779c1cac46b59904b7d2dee064736f6c63430008090033";

export class MasterChefJoeV3__factory extends ContractFactory {
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
    _MASTER_CHEF_V2: string,
    _joe: string,
    _MASTER_PID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MasterChefJoeV3> {
    return super.deploy(
      _MASTER_CHEF_V2,
      _joe,
      _MASTER_PID,
      overrides || {}
    ) as Promise<MasterChefJoeV3>;
  }
  getDeployTransaction(
    _MASTER_CHEF_V2: string,
    _joe: string,
    _MASTER_PID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _MASTER_CHEF_V2,
      _joe,
      _MASTER_PID,
      overrides || {}
    );
  }
  attach(address: string): MasterChefJoeV3 {
    return super.attach(address) as MasterChefJoeV3;
  }
  connect(signer: Signer): MasterChefJoeV3__factory {
    return super.connect(signer) as MasterChefJoeV3__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterChefJoeV3Interface {
    return new utils.Interface(_abi) as MasterChefJoeV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterChefJoeV3 {
    return new Contract(address, _abi, signerOrProvider) as MasterChefJoeV3;
  }
}