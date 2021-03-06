/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IPlatypusNFTInterface extends ethers.utils.Interface {
  functions: {
    "addCaretaker(address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "availableTotalSupply()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "caretakers(address)": FunctionFragment;
    "changeMintCost(uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "getPlatypusDetails(uint256)": FunctionFragment;
    "increaseAvailableTotalSupply(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "levelUp(uint256)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "mintCost()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "platypuses(uint256)": FunctionFragment;
    "platypusesLength()": FunctionFragment;
    "preSaleDeadline()": FunctionFragment;
    "removeCaretaker(address)": FunctionFragment;
    "requestMint(uint256)": FunctionFragment;
    "requestMintTicket(uint256,bytes32[])": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setBaseURI(string)": FunctionFragment;
    "setNewRoyaltyDetails(address,uint256)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setSaleDetails(bytes32,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "tokenByIndex(uint256)": FunctionFragment;
    "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "usedPresaleTicket(address)": FunctionFragment;
    "withdrawLINK()": FunctionFragment;
    "withdrawPTP()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addCaretaker",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "availableTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "caretakers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "changeMintCost",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatypusDetails",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAvailableTotalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "levelUp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mintCost", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "platypuses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "platypusesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "preSaleDeadline",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeCaretaker",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "requestMint",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestMintTicket",
    values: [BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setNewRoyaltyDetails",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setSaleDetails",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "usedPresaleTicket",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLINK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawPTP",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addCaretaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "availableTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "caretakers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeMintCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlatypusDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAvailableTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levelUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintCost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "platypuses", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platypusesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "preSaleDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeCaretaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestMintTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setNewRoyaltyDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSaleDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usedPresaleTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLINK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawPTP",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "MintRequest(uint256,uint256)": EventFragment;
    "OwnerUpdated(address)": EventFragment;
    "PlatypusCreation(uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlatypusCreation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string;
    approved: string;
    tokenId: BigNumber;
  }
>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean] & {
    owner: string;
    operator: string;
    approved: boolean;
  }
>;

export type MintRequestEvent = TypedEvent<
  [BigNumber, BigNumber] & { from: BigNumber; length: BigNumber }
>;

export type OwnerUpdatedEvent = TypedEvent<[string] & { newOwner: string }>;

export type PlatypusCreationEvent = TypedEvent<
  [BigNumber, BigNumber] & { from: BigNumber; length: BigNumber }
>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; tokenId: BigNumber }
>;

export class IPlatypusNFT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IPlatypusNFTInterface;

  functions: {
    addCaretaker(
      caretaker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    availableTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    caretakers(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    changeMintCost(
      cost: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { operator: string }>;

    getPlatypusDetails(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number] & {
        level: number;
        ability: number;
        power: number;
      }
    >;

    increaseAvailableTotalSupply(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    levelUp(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    mintCost(overrides?: CallOverrides): Promise<[BigNumber]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    platypuses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ] & {
        power: number;
        level: number;
        score: number;
        eyes: number;
        mouth: number;
        foot: number;
        body: number;
        tail: number;
        accessories: number;
        ability: number;
      }
    >;

    platypusesLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    preSaleDeadline(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeCaretaker(
      caretaker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestMint(
      numberOfMints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestMintTicket(
      numberOfMints: BigNumberish,
      proof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { _receiver: string; _royaltyAmount: BigNumber }
    >;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBaseURI(
      _baseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNewRoyaltyDetails(
      _newAddress: string,
      _newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSaleDetails(
      _root: BytesLike,
      _preSaleDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { tokenId: BigNumber }>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    usedPresaleTicket(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdrawLINK(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawPTP(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addCaretaker(
    caretaker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  availableTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  caretakers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  changeMintCost(
    cost: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getPlatypusDetails(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, number, number] & { level: number; ability: number; power: number }
  >;

  increaseAvailableTotalSupply(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  levelUp(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  mintCost(overrides?: CallOverrides): Promise<BigNumber>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  platypuses(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ] & {
      power: number;
      level: number;
      score: number;
      eyes: number;
      mouth: number;
      foot: number;
      body: number;
      tail: number;
      accessories: number;
      ability: number;
    }
  >;

  platypusesLength(overrides?: CallOverrides): Promise<BigNumber>;

  preSaleDeadline(overrides?: CallOverrides): Promise<BigNumber>;

  removeCaretaker(
    caretaker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestMint(
    numberOfMints: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestMintTicket(
    numberOfMints: BigNumberish,
    proof: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  royaltyInfo(
    _tokenId: BigNumberish,
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber] & { _receiver: string; _royaltyAmount: BigNumber }
  >;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    _approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBaseURI(
    _baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNewRoyaltyDetails(
    _newAddress: string,
    _newFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSaleDetails(
    _root: BytesLike,
    _preSaleDeadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokenByIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  usedPresaleTicket(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  withdrawLINK(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawPTP(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addCaretaker(caretaker: string, overrides?: CallOverrides): Promise<void>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    availableTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    caretakers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    changeMintCost(
      cost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getPlatypusDetails(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number] & {
        level: number;
        ability: number;
        power: number;
      }
    >;

    increaseAvailableTotalSupply(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    levelUp(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    mintCost(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    platypuses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ] & {
        power: number;
        level: number;
        score: number;
        eyes: number;
        mouth: number;
        foot: number;
        body: number;
        tail: number;
        accessories: number;
        ability: number;
      }
    >;

    platypusesLength(overrides?: CallOverrides): Promise<BigNumber>;

    preSaleDeadline(overrides?: CallOverrides): Promise<BigNumber>;

    removeCaretaker(
      caretaker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    requestMint(
      numberOfMints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requestMintTicket(
      numberOfMints: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { _receiver: string; _royaltyAmount: BigNumber }
    >;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setBaseURI(_baseURI: string, overrides?: CallOverrides): Promise<void>;

    setNewRoyaltyDetails(
      _newAddress: string,
      _newFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    setSaleDetails(
      _root: BytesLike,
      _preSaleDeadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    usedPresaleTicket(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdrawLINK(overrides?: CallOverrides): Promise<void>;

    withdrawPTP(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; approved: string; tokenId: BigNumber }
    >;

    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; approved: string; tokenId: BigNumber }
    >;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { owner: string; operator: string; approved: boolean }
    >;

    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { owner: string; operator: string; approved: boolean }
    >;

    "MintRequest(uint256,uint256)"(
      from?: null,
      length?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { from: BigNumber; length: BigNumber }
    >;

    MintRequest(
      from?: null,
      length?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { from: BigNumber; length: BigNumber }
    >;

    "OwnerUpdated(address)"(
      newOwner?: string | null
    ): TypedEventFilter<[string], { newOwner: string }>;

    OwnerUpdated(
      newOwner?: string | null
    ): TypedEventFilter<[string], { newOwner: string }>;

    "PlatypusCreation(uint256,uint256)"(
      from?: null,
      length?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { from: BigNumber; length: BigNumber }
    >;

    PlatypusCreation(
      from?: null,
      length?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { from: BigNumber; length: BigNumber }
    >;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; tokenId: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; tokenId: BigNumber }
    >;
  };

  estimateGas: {
    addCaretaker(
      caretaker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    availableTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    caretakers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    changeMintCost(
      cost: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlatypusDetails(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAvailableTotalSupply(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levelUp(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    mintCost(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    platypuses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    platypusesLength(overrides?: CallOverrides): Promise<BigNumber>;

    preSaleDeadline(overrides?: CallOverrides): Promise<BigNumber>;

    removeCaretaker(
      caretaker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestMint(
      numberOfMints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestMintTicket(
      numberOfMints: BigNumberish,
      proof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBaseURI(
      _baseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNewRoyaltyDetails(
      _newAddress: string,
      _newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSaleDetails(
      _root: BytesLike,
      _preSaleDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    usedPresaleTicket(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawLINK(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawPTP(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCaretaker(
      caretaker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    availableTotalSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    caretakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeMintCost(
      cost: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlatypusDetails(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAvailableTotalSupply(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    levelUp(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintCost(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    platypuses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    platypusesLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    preSaleDeadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeCaretaker(
      caretaker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestMint(
      numberOfMints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestMintTicket(
      numberOfMints: BigNumberish,
      proof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBaseURI(
      _baseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNewRoyaltyDetails(
      _newAddress: string,
      _newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSaleDetails(
      _root: BytesLike,
      _preSaleDeadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    usedPresaleTicket(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawLINK(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawPTP(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
