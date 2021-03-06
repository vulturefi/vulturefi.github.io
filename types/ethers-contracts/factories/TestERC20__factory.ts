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
import type { TestERC20, TestERC20Interface } from "../TestERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "supply",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "d",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "faucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010c4380380620010c48339810160408190526200003491620002e6565b8351849084906200004d90600390602085019062000173565b5080516200006390600490602084019062000173565b50506005805460ff191660ff8516179055506200008133826200008b565b50505050620003d5565b6001600160a01b038216620000e65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000fa919062000371565b90915550506001600160a01b038216600090815260208190526040812080548392906200012990849062000371565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001819062000398565b90600052602060002090601f016020900481019282620001a55760008555620001f0565b82601f10620001c057805160ff1916838001178555620001f0565b82800160010185558215620001f0579182015b82811115620001f0578251825591602001919060010190620001d3565b50620001fe92915062000202565b5090565b5b80821115620001fe576000815560010162000203565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200024157600080fd5b81516001600160401b03808211156200025e576200025e62000219565b604051601f8301601f19908116603f0116810190828211818310171562000289576200028962000219565b81604052838152602092508683858801011115620002a657600080fd5b600091505b83821015620002ca5785820183015181830184015290820190620002ab565b83821115620002dc5760008385830101525b9695505050505050565b60008060008060808587031215620002fd57600080fd5b84516001600160401b03808211156200031557600080fd5b62000323888389016200022f565b955060208701519150808211156200033a57600080fd5b5062000349878288016200022f565b935050604085015160ff811681146200036157600080fd5b6060959095015193969295505050565b600082198211156200039357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003ad57607f821691505b60208210811415620003cf57634e487b7160e01b600052602260045260246000fd5b50919050565b610cdf80620003e56000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063579158971161008c57806395d89b411161006657806395d89b41146101ce578063a457c2d7146101d6578063a9059cbb146101e9578063dd62ed3e146101fc57600080fd5b8063579158971461017657806370a082311461018b5780638a054ac2146101c157600080fd5b806323b872dd116100bd57806323b872dd14610137578063313ce5671461014a578063395093511461016357600080fd5b806306fdde03146100e4578063095ea7b31461010257806318160ddd14610125575b600080fd5b6100ec610242565b6040516100f99190610aa6565b60405180910390f35b610115610110366004610b42565b6102d4565b60405190151581526020016100f9565b6002545b6040519081526020016100f9565b610115610145366004610b6c565b6102ea565b60055460ff165b60405160ff90911681526020016100f9565b610115610171366004610b42565b6103d5565b610189610184366004610ba8565b61041e565b005b610129610199366004610bc1565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6005546101519060ff1681565b6100ec61042b565b6101156101e4366004610b42565b61043a565b6101156101f7366004610b42565b610512565b61012961020a366004610be3565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025190610c16565b80601f016020809104026020016040519081016040528092919081815260200182805461027d90610c16565b80156102ca5780601f1061029f576101008083540402835291602001916102ca565b820191906000526020600020905b8154815290600101906020018083116102ad57829003601f168201915b5050505050905090565b60006102e133848461051f565b50600192915050565b60006102f78484846106d2565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600160209081526040808320338452909152902054828110156103bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103ca853385840361051f565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916102e1918590610419908690610c6a565b61051f565b6104283382610986565b50565b60606004805461025190610c16565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452909152812054828110156104fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016103b4565b610508338585840361051f565b5060019392505050565b60006102e13384846106d2565b73ffffffffffffffffffffffffffffffffffffffff83166105c1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103b4565b73ffffffffffffffffffffffffffffffffffffffff8216610664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103b4565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610775576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103b4565b73ffffffffffffffffffffffffffffffffffffffff8216610818576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103b4565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156108ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103b4565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610912908490610c6a565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161097891815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103b4565b8060026000828254610a159190610c6a565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610a4f908490610c6a565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b81811015610ad357858101830151858201604001528201610ab7565b81811115610ae5576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610b3d57600080fd5b919050565b60008060408385031215610b5557600080fd5b610b5e83610b19565b946020939093013593505050565b600080600060608486031215610b8157600080fd5b610b8a84610b19565b9250610b9860208501610b19565b9150604084013590509250925092565b600060208284031215610bba57600080fd5b5035919050565b600060208284031215610bd357600080fd5b610bdc82610b19565b9392505050565b60008060408385031215610bf657600080fd5b610bff83610b19565b9150610c0d60208401610b19565b90509250929050565b600181811c90821680610c2a57607f821691505b60208210811415610c64577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115610ca4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea26469706673582212204f32d8ad2516db3dc9fb029a36a56b8e413f7bf7adb4636abb80bfc23685972564736f6c63430008090033";

export class TestERC20__factory extends ContractFactory {
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
    name: string,
    symbol: string,
    _decimals: BigNumberish,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC20> {
    return super.deploy(
      name,
      symbol,
      _decimals,
      supply,
      overrides || {}
    ) as Promise<TestERC20>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    _decimals: BigNumberish,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      _decimals,
      supply,
      overrides || {}
    );
  }
  attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}
