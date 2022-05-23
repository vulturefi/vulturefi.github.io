/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Asset, AssetInterface } from "../Asset";

const _abi = [
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
        indexed: false,
        internalType: "uint256",
        name: "previousCashPosition",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cashBeingAdded",
        type: "uint256",
      },
    ],
    name: "CashAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousCashPosition",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cashBeingRemoved",
        type: "uint256",
      },
    ],
    name: "CashRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousLiabilityPosition",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liabilityBeingAdded",
        type: "uint256",
      },
    ],
    name: "LiabilityAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousLiabilityPosition",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liabilityBeingRemoved",
        type: "uint256",
      },
    ],
    name: "LiabilityRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousMaxSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaxSupply",
        type: "uint256",
      },
    ],
    name: "MaxSupplyUpdated",
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
        internalType: "address",
        name: "previousPool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newPool",
        type: "address",
      },
    ],
    name: "PoolUpdated",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addCash",
    outputs: [],
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
    name: "addLiability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "aggregateAccount",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cash",
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
    inputs: [
      {
        internalType: "address",
        name: "underlyingToken_",
        type: "address",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "aggregateAccount_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liability",
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
    name: "maxSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
    name: "pool",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "removeCash",
    outputs: [],
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
    name: "removeLiability",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "aggregateAccount_",
        type: "address",
      },
    ],
    name: "setAggregateAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxSupply_",
        type: "uint256",
      },
    ],
    name: "setMaxSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool_",
        type: "address",
      },
    ],
    name: "setPool",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferUnderlyingToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingToken",
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
    name: "underlyingTokenBalance",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506128ef806100206000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80637e1317fa1161010f5780639f9ef988116100a2578063d5abeb0111610071578063d5abeb0114610417578063d8b878531461041f578063dd62ed3e14610432578063f2fde38b1461046b57600080fd5b80639f9ef988146103cb578063a0f0f604146103de578063a457c2d7146103f1578063a9059cbb1461040457600080fd5b8063961be391116100de578063961be3911461039557806399c91a641461039d5780639dc29fac146103a55780639e79eaa5146103b857600080fd5b80637e1317fa146103585780638da5cb5b1461036957806395d6f7b91461037a57806395d89b411461038d57600080fd5b806339509351116101875780636f8b44b0116101565780636f8b44b01461030c578063705727b51461031f57806370a0823114610327578063715018a61461035057600080fd5b806339509351146102c057806340c10f19146102d35780634437152a146102e6578063613d25bb146102f957600080fd5b806318160ddd116101c357806318160ddd1461027057806323b872dd146102825780632495a59914610295578063313ce567146102a657600080fd5b806306fdde03146101f5578063095ea7b31461021357806316c9e7a01461023657806316f0115b1461024b575b600080fd5b6101fd61047e565b60405161020a91906124f4565b60405180910390f35b610226610221366004612561565b610510565b604051901515815260200161020a565b61024961024436600461258b565b610526565b005b6098546001600160a01b03165b6040516001600160a01b03909116815260200161020a565b6067545b60405190815260200161020a565b6102266102903660046125a4565b610655565b6097546001600160a01b0316610258565b6102ae610716565b60405160ff909116815260200161020a565b6102266102ce366004612561565b6107b1565b6102496102e1366004612561565b6107ed565b6102496102f43660046125e0565b610a05565b6102496103073660046126d5565b610b29565b61024961031a36600461258b565b610e06565b609a54610274565b6102746103353660046125e0565b6001600160a01b031660009081526065602052604090205490565b610249610ea1565b609c546001600160a01b0316610258565b6033546001600160a01b0316610258565b6102496103883660046125e0565b610f07565b6101fd611017565b609954610274565b610274611026565b6102496103b3366004612561565b6110bb565b6102496103c6366004612561565b61111f565b6102496103d936600461258b565b611190565b6102496103ec36600461258b565b6112f2565b6102266103ff366004612561565b6113c0565b610226610412366004612561565b611471565b609d54610274565b61024961042d36600461258b565b61147e565b61027461044036600461275a565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b6102496104793660046125e0565b61159e565b60606068805461048d9061278d565b80601f01602080910402602001604051908101604052809291908181526020018280546104b99061278d565b80156105065780601f106104db57610100808354040283529160200191610506565b820191906000526020600020905b8154815290600101906020018083116104e957829003601f168201915b5050505050905090565b600061051d338484611680565b50600192915050565b6098546001600160a01b031633146105855760405162461bcd60e51b815260206004820152600d60248201527f50544c3a464f5242494444454e0000000000000000000000000000000000000060448201526064015b60405180910390fd5b80609960008282546105979190612810565b925050819055507f04da412052b8d39d78da489e294630fcb3874f03dcb0ead4481c0a6d70df1e1581306001600160a01b031663961be3916040518163ffffffff1660e01b815260040160206040518083038186803b1580156105f957600080fd5b505afa15801561060d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106319190612828565b61063b9190612841565b60408051918252602082018490520160405180910390a150565b60006106628484846117d8565b6001600160a01b0384166000908152606660209081526040808320338452909152902054828110156106fc5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606482015260840161057c565b6107098533858403611680565b60019150505b9392505050565b609754604080517f313ce56700000000000000000000000000000000000000000000000000000000815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b15801561077457600080fd5b505afa158015610788573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ac9190612858565b905090565b3360008181526066602090815260408083206001600160a01b0387168452909152812054909161051d9185906107e8908690612810565b611680565b6098546001600160a01b031633146108475760405162461bcd60e51b815260206004820152600d60248201527f50544c3a464f5242494444454e00000000000000000000000000000000000000604482015260640161057c565b306001600160a01b031663d5abeb016040518163ffffffff1660e01b815260040160206040518083038186803b15801561088057600080fd5b505afa158015610894573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b89190612828565b156109f757306001600160a01b031663d5abeb016040518163ffffffff1660e01b815260040160206040518083038186803b1580156108f657600080fd5b505afa15801561090a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092e9190612828565b306001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561096757600080fd5b505afa15801561097b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099f9190612828565b6109a99083612810565b11156109f75760405162461bcd60e51b815260206004820152601660248201527f50544c3a4d41585f535550504c595f5245414348454400000000000000000000604482015260640161057c565b610a0182826119f1565b5050565b6033546001600160a01b03163314610a5f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161057c565b6001600160a01b038116610ab55760405162461bcd60e51b815260206004820152601f60248201527f50544c3a506f6f6c20616464726573732063616e6e6f74206265207a65726f00604482015260640161057c565b6098546040516001600160a01b038084169216907f90affc163f1a2dfedcd36aa02ed992eeeba8100a4014f0b4cdc20ea265a6662790600090a3609880547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b600054610100900460ff1680610b42575060005460ff16155b610bb45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161057c565b600054610100900460ff16158015610bd6576000805461ffff19166101011790555b6001600160a01b038516610c2c5760405162461bcd60e51b815260206004820181905260248201527f50544c3a546f6b656e20616464726573732063616e6e6f74206265207a65726f604482015260640161057c565b6001600160a01b038216610ca85760405162461bcd60e51b815260206004820152602c60248201527f50544c3a416767726567617465206163636f756e74206164647265737320636160448201527f6e6e6f74206265207a65726f0000000000000000000000000000000000000000606482015260840161057c565b6012856001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610ce357600080fd5b505afa158015610cf7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1b9190612858565b60ff161115610d6c5760405162461bcd60e51b815260206004820152601d60248201527f504c543a446563696d616c73206d75737420626520756e646572203138000000604482015260640161057c565b610d74611ad0565b610d7e8484611bbe565b609b8054337fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091556097805482166001600160a01b0388811691909117909155609c80549092169084161790558015610dff57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050505050565b6033546001600160a01b03163314610e605760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161057c565b609d5460408051918252602082018390527f44ecfc706d63e347851cfd40acfa6cf2e3a41faa3e8b460210c03938e84a91ad910160405180910390a1609d55565b6033546001600160a01b03163314610efb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161057c565b610f056000611cb1565b565b6033546001600160a01b03163314610f615760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161057c565b6001600160a01b038116610fdd5760405162461bcd60e51b815260206004820152602c60248201527f50544c3a416767726567617465204163636f756e74206164647265737320636160448201527f6e6e6f74206265207a65726f0000000000000000000000000000000000000000606482015260840161057c565b609c80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60606069805461048d9061278d565b6097546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561108357600080fd5b505afa158015611097573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ac9190612828565b6098546001600160a01b031633146111155760405162461bcd60e51b815260206004820152600d60248201527f50544c3a464f5242494444454e00000000000000000000000000000000000000604482015260640161057c565b610a018282611d1b565b6098546001600160a01b031633146111795760405162461bcd60e51b815260206004820152600d60248201527f50544c3a464f5242494444454e00000000000000000000000000000000000000604482015260640161057c565b609754610a01906001600160a01b03168383611ea0565b6098546001600160a01b031633146111ea5760405162461bcd60e51b815260206004820152600d60248201527f50544c3a464f5242494444454e00000000000000000000000000000000000000604482015260640161057c565b80609954101561123c5760405162461bcd60e51b815260206004820152601560248201527f50544c3a494e53554646494349454e545f434153480000000000000000000000604482015260640161057c565b806099600082825461124e9190612841565b925050819055507ff15a954400c2f966714cd09162f79a6682b77351200ad1d595000057fc4ee99981306001600160a01b031663961be3916040518163ffffffff1660e01b815260040160206040518083038186803b1580156112b057600080fd5b505afa1580156112c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e89190612828565b61063b9190612810565b6098546001600160a01b0316331461134c5760405162461bcd60e51b815260206004820152600d60248201527f50544c3a464f5242494444454e00000000000000000000000000000000000000604482015260640161057c565b80609a600082825461135e9190612810565b925050819055507f2b74a49d287a99ef6b8a9f27aaef936372e282e0e95a6352f07c9fd12596655c81306001600160a01b031663705727b56040518163ffffffff1660e01b815260040160206040518083038186803b1580156105f957600080fd5b3360009081526066602090815260408083206001600160a01b03861684529091528120548281101561145a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161057c565b6114673385858403611680565b5060019392505050565b600061051d3384846117d8565b6098546001600160a01b031633146114d85760405162461bcd60e51b815260206004820152600d60248201527f50544c3a464f5242494444454e00000000000000000000000000000000000000604482015260640161057c565b80609a54101561152a5760405162461bcd60e51b815260206004820152601a60248201527f50544c3a494e53554646494349454e545f4c494142494c495459000000000000604482015260640161057c565b80609a600082825461153c9190612841565b925050819055507fdf20ac3c7d97136ceef3f041d542947447276d67c158dced2e33d1ee7984f53081306001600160a01b031663705727b56040518163ffffffff1660e01b815260040160206040518083038186803b1580156112b057600080fd5b6033546001600160a01b031633146115f85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161057c565b6001600160a01b0381166116745760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161057c565b61167d81611cb1565b50565b6001600160a01b0383166116fb5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161057c565b6001600160a01b0382166117775760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161057c565b6001600160a01b0383811660008181526066602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166118545760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161057c565b6001600160a01b0382166118d05760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161057c565b6001600160a01b0383166000908152606560205260409020548181101561195f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161057c565b6001600160a01b03808516600090815260656020526040808220858503905591851681529081208054849290611996908490612810565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516119e291815260200190565b60405180910390a35b50505050565b6001600160a01b038216611a475760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161057c565b8060676000828254611a599190612810565b90915550506001600160a01b03821660009081526065602052604081208054839290611a86908490612810565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600054610100900460ff1680611ae9575060005460ff16155b611b5b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161057c565b600054610100900460ff16158015611b7d576000805461ffff19166101011790555b611b85611f20565b611b8d611ffd565b801561167d57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff1680611bd7575060005460ff16155b611c495760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161057c565b600054610100900460ff16158015611c6b576000805461ffff19166101011790555b611c73611f20565b611c7d83836120b3565b8015611cac57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b505050565b603380546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216611d975760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161057c565b6001600160a01b03821660009081526065602052604090205481811015611e265760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161057c565b6001600160a01b0383166000908152606560205260408120838303905560678054849290611e55908490612841565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052611cac9084906121bb565b600054610100900460ff1680611f39575060005460ff16155b611fab5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161057c565b600054610100900460ff16158015611b8d576000805461ffff1916610101179055801561167d57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff1680612016575060005460ff16155b6120885760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161057c565b600054610100900460ff161580156120aa576000805461ffff19166101011790555b611b8d33611cb1565b600054610100900460ff16806120cc575060005460ff16155b61213e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161057c565b600054610100900460ff16158015612160576000805461ffff19166101011790555b825161217390606890602086019061242f565b50815161218790606990602085019061242f565b508015611cac57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505050565b6000612210826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166122a09092919063ffffffff16565b805190915015611cac578080602001905181019061222e919061287b565b611cac5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161057c565b60606122af84846000856122b7565b949350505050565b60608247101561232f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161057c565b843b61237d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161057c565b600080866001600160a01b03168587604051612399919061289d565b60006040518083038185875af1925050503d80600081146123d6576040519150601f19603f3d011682016040523d82523d6000602084013e6123db565b606091505b50915091506123eb8282866123f6565b979650505050505050565b6060831561240557508161070f565b8251156124155782518084602001fd5b8160405162461bcd60e51b815260040161057c91906124f4565b82805461243b9061278d565b90600052602060002090601f01602090048101928261245d57600085556124a3565b82601f1061247657805160ff19168380011785556124a3565b828001600101855582156124a3579182015b828111156124a3578251825591602001919060010190612488565b506124af9291506124b3565b5090565b5b808211156124af57600081556001016124b4565b60005b838110156124e35781810151838201526020016124cb565b838111156119eb5750506000910152565b60208152600082518060208401526125138160408501602087016124c8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b80356001600160a01b038116811461255c57600080fd5b919050565b6000806040838503121561257457600080fd5b61257d83612545565b946020939093013593505050565b60006020828403121561259d57600080fd5b5035919050565b6000806000606084860312156125b957600080fd5b6125c284612545565b92506125d060208501612545565b9150604084013590509250925092565b6000602082840312156125f257600080fd5b61070f82612545565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261263b57600080fd5b813567ffffffffffffffff80821115612656576126566125fb565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561269c5761269c6125fb565b816040528381528660208588010111156126b557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080608085870312156126eb57600080fd5b6126f485612545565b9350602085013567ffffffffffffffff8082111561271157600080fd5b61271d8883890161262a565b9450604087013591508082111561273357600080fd5b506127408782880161262a565b92505061274f60608601612545565b905092959194509250565b6000806040838503121561276d57600080fd5b61277683612545565b915061278460208401612545565b90509250929050565b600181811c908216806127a157607f821691505b602082108114156127db577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115612823576128236127e1565b500190565b60006020828403121561283a57600080fd5b5051919050565b600082821015612853576128536127e1565b500390565b60006020828403121561286a57600080fd5b815160ff8116811461070f57600080fd5b60006020828403121561288d57600080fd5b8151801515811461070f57600080fd5b600082516128af8184602087016124c8565b919091019291505056fea26469706673582212204e34aa0f011a46d02565393f3493c7814a15dc1e515a7db163056456cf6f2bee64736f6c63430008090033";

export class Asset__factory extends ContractFactory {
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
  ): Promise<Asset> {
    return super.deploy(overrides || {}) as Promise<Asset>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Asset {
    return super.attach(address) as Asset;
  }
  connect(signer: Signer): Asset__factory {
    return super.connect(signer) as Asset__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetInterface {
    return new utils.Interface(_abi) as AssetInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Asset {
    return new Contract(address, _abi, signerOrProvider) as Asset;
  }
}
