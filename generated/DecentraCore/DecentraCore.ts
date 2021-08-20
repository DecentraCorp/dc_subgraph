// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FunctionCallDelegated extends ethereum.Event {
  get params(): FunctionCallDelegated__Params {
    return new FunctionCallDelegated__Params(this);
  }
}

export class FunctionCallDelegated__Params {
  _event: FunctionCallDelegated;

  constructor(event: FunctionCallDelegated) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get call_data(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class NewProposal extends ethereum.Event {
  get params(): NewProposal__Params {
    return new NewProposal__Params(this);
  }
}

export class NewProposal__Params {
  _event: NewProposal;

  constructor(event: NewProposal) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get proposalAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get target(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get call_data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class NewVote extends ethereum.Event {
  get params(): NewVote__Params {
    return new NewVote__Params(this);
  }
}

export class NewVote__Params {
  _event: NewVote;

  constructor(event: NewVote) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get voter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get vote(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProposalApproved extends ethereum.Event {
  get params(): ProposalApproved__Params {
    return new ProposalApproved__Params(this);
  }
}

export class ProposalApproved__Params {
  _event: ProposalApproved;

  constructor(event: ProposalApproved) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get success(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class DecentraCore__getProposalResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: boolean;
  value6: string;
  value7: Bytes;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: boolean,
    value6: string,
    value7: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromString(this.value6));
    map.set("value7", ethereum.Value.fromBytes(this.value7));
    return map;
  }
}

export class DecentraCore__proposalsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: boolean;
  value6: boolean;
  value7: string;
  value8: Bytes;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: boolean,
    value6: boolean,
    value7: string,
    value8: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromString(this.value7));
    map.set("value8", ethereum.Value.fromBytes(this.value8));
    return map;
  }
}

export class DecentraCore extends ethereum.SmartContract {
  static bind(address: Address): DecentraCore {
    return new DecentraCore("DecentraCore", address);
  }

  burners(param0: Address): boolean {
    let result = super.call("burners", "burners(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_burners(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("burners", "burners(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  dScore(): Address {
    let result = super.call("dScore", "dScore():(address)", []);

    return result[0].toAddress();
  }

  try_dScore(): ethereum.CallResult<Address> {
    let result = super.tryCall("dScore", "dScore():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  dScoreMod(param0: Address): boolean {
    let result = super.call("dScoreMod", "dScoreMod(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_dScoreMod(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("dScoreMod", "dScoreMod(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  dd(): Address {
    let result = super.call("dd", "dd():(address)", []);

    return result[0].toAddress();
  }

  try_dd(): ethereum.CallResult<Address> {
    let result = super.tryCall("dd", "dd():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ds(): Address {
    let result = super.call("ds", "ds():(address)", []);

    return result[0].toAddress();
  }

  try_ds(): ethereum.CallResult<Address> {
    let result = super.tryCall("ds", "ds():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  freezeFrame(param0: Address): BigInt {
    let result = super.call("freezeFrame", "freezeFrame(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_freezeFrame(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "freezeFrame",
      "freezeFrame(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  frozenAccounts(param0: Address): boolean {
    let result = super.call(
      "frozenAccounts",
      "frozenAccounts(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_frozenAccounts(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "frozenAccounts",
      "frozenAccounts(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getProposal(_id: BigInt): DecentraCore__getProposalResult {
    let result = super.call(
      "getProposal",
      "getProposal(uint256):(address,address,uint256,uint256,uint256,bool,string,bytes)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return new DecentraCore__getProposalResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBoolean(),
      result[6].toString(),
      result[7].toBytes()
    );
  }

  try_getProposal(
    _id: BigInt
  ): ethereum.CallResult<DecentraCore__getProposalResult> {
    let result = super.tryCall(
      "getProposal",
      "getProposal(uint256):(address,address,uint256,uint256,uint256,bool,string,bytes)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DecentraCore__getProposalResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBoolean(),
        value[6].toString(),
        value[7].toBytes()
      )
    );
  }

  minters(param0: Address): boolean {
    let result = super.call("minters", "minters(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_minters(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("minters", "minters(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proposalID(): BigInt {
    let result = super.call("proposalID", "proposalID():(uint256)", []);

    return result[0].toBigInt();
  }

  try_proposalID(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("proposalID", "proposalID():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposalTime(): BigInt {
    let result = super.call("proposalTime", "proposalTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_proposalTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("proposalTime", "proposalTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposals(param0: BigInt): DecentraCore__proposalsResult {
    let result = super.call(
      "proposals",
      "proposals(uint256):(address,address,uint256,uint256,uint256,bool,bool,string,bytes)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new DecentraCore__proposalsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBoolean(),
      result[6].toBoolean(),
      result[7].toString(),
      result[8].toBytes()
    );
  }

  try_proposals(
    param0: BigInt
  ): ethereum.CallResult<DecentraCore__proposalsResult> {
    let result = super.tryCall(
      "proposals",
      "proposals(uint256):(address,address,uint256,uint256,uint256,bool,bool,string,bytes)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DecentraCore__proposalsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBoolean(),
        value[6].toBoolean(),
        value[7].toString(),
        value[8].toBytes()
      )
    );
  }

  quorum(): BigInt {
    let result = super.call("quorum", "quorum():(uint256)", []);

    return result[0].toBigInt();
  }

  try_quorum(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("quorum", "quorum():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _dDollar(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _dStock(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _dScore(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class FreezeMemberCall extends ethereum.Call {
  get inputs(): FreezeMemberCall__Inputs {
    return new FreezeMemberCall__Inputs(this);
  }

  get outputs(): FreezeMemberCall__Outputs {
    return new FreezeMemberCall__Outputs(this);
  }
}

export class FreezeMemberCall__Inputs {
  _call: FreezeMemberCall;

  constructor(call: FreezeMemberCall) {
    this._call = call;
  }

  get _member(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class FreezeMemberCall__Outputs {
  _call: FreezeMemberCall;

  constructor(call: FreezeMemberCall) {
    this._call = call;
  }
}

export class NewProposalCall extends ethereum.Call {
  get inputs(): NewProposalCall__Inputs {
    return new NewProposalCall__Inputs(this);
  }

  get outputs(): NewProposalCall__Outputs {
    return new NewProposalCall__Outputs(this);
  }
}

export class NewProposalCall__Inputs {
  _call: NewProposalCall;

  constructor(call: NewProposalCall) {
    this._call = call;
  }

  get _target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _proposalHash(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _calldata(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class NewProposalCall__Outputs {
  _call: NewProposalCall;

  constructor(call: NewProposalCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ProxyBurnDDCall extends ethereum.Call {
  get inputs(): ProxyBurnDDCall__Inputs {
    return new ProxyBurnDDCall__Inputs(this);
  }

  get outputs(): ProxyBurnDDCall__Outputs {
    return new ProxyBurnDDCall__Outputs(this);
  }
}

export class ProxyBurnDDCall__Inputs {
  _call: ProxyBurnDDCall;

  constructor(call: ProxyBurnDDCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ProxyBurnDDCall__Outputs {
  _call: ProxyBurnDDCall;

  constructor(call: ProxyBurnDDCall) {
    this._call = call;
  }
}

export class ProxyBurnDSCall extends ethereum.Call {
  get inputs(): ProxyBurnDSCall__Inputs {
    return new ProxyBurnDSCall__Inputs(this);
  }

  get outputs(): ProxyBurnDSCall__Outputs {
    return new ProxyBurnDSCall__Outputs(this);
  }
}

export class ProxyBurnDSCall__Inputs {
  _call: ProxyBurnDSCall;

  constructor(call: ProxyBurnDSCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ProxyBurnDSCall__Outputs {
  _call: ProxyBurnDSCall;

  constructor(call: ProxyBurnDSCall) {
    this._call = call;
  }
}

export class ProxyMintDDCall extends ethereum.Call {
  get inputs(): ProxyMintDDCall__Inputs {
    return new ProxyMintDDCall__Inputs(this);
  }

  get outputs(): ProxyMintDDCall__Outputs {
    return new ProxyMintDDCall__Outputs(this);
  }
}

export class ProxyMintDDCall__Inputs {
  _call: ProxyMintDDCall;

  constructor(call: ProxyMintDDCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ProxyMintDDCall__Outputs {
  _call: ProxyMintDDCall;

  constructor(call: ProxyMintDDCall) {
    this._call = call;
  }
}

export class ProxyMintDSCall extends ethereum.Call {
  get inputs(): ProxyMintDSCall__Inputs {
    return new ProxyMintDSCall__Inputs(this);
  }

  get outputs(): ProxyMintDSCall__Outputs {
    return new ProxyMintDSCall__Outputs(this);
  }
}

export class ProxyMintDSCall__Inputs {
  _call: ProxyMintDSCall;

  constructor(call: ProxyMintDSCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ProxyMintDSCall__Outputs {
  _call: ProxyMintDSCall;

  constructor(call: ProxyMintDSCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetApprovedContractCall extends ethereum.Call {
  get inputs(): SetApprovedContractCall__Inputs {
    return new SetApprovedContractCall__Inputs(this);
  }

  get outputs(): SetApprovedContractCall__Outputs {
    return new SetApprovedContractCall__Outputs(this);
  }
}

export class SetApprovedContractCall__Inputs {
  _call: SetApprovedContractCall;

  constructor(call: SetApprovedContractCall) {
    this._call = call;
  }

  get _contract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _privledge(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetApprovedContractCall__Outputs {
  _call: SetApprovedContractCall;

  constructor(call: SetApprovedContractCall) {
    this._call = call;
  }
}

export class SetQuorumCall extends ethereum.Call {
  get inputs(): SetQuorumCall__Inputs {
    return new SetQuorumCall__Inputs(this);
  }

  get outputs(): SetQuorumCall__Outputs {
    return new SetQuorumCall__Outputs(this);
  }
}

export class SetQuorumCall__Inputs {
  _call: SetQuorumCall;

  constructor(call: SetQuorumCall) {
    this._call = call;
  }

  get _quorum(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetQuorumCall__Outputs {
  _call: SetQuorumCall;

  constructor(call: SetQuorumCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class TransferxDAICall extends ethereum.Call {
  get inputs(): TransferxDAICall__Inputs {
    return new TransferxDAICall__Inputs(this);
  }

  get outputs(): TransferxDAICall__Outputs {
    return new TransferxDAICall__Outputs(this);
  }
}

export class TransferxDAICall__Inputs {
  _call: TransferxDAICall;

  constructor(call: TransferxDAICall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferxDAICall__Outputs {
  _call: TransferxDAICall;

  constructor(call: TransferxDAICall) {
    this._call = call;
  }
}

export class VoteCall extends ethereum.Call {
  get inputs(): VoteCall__Inputs {
    return new VoteCall__Inputs(this);
  }

  get outputs(): VoteCall__Outputs {
    return new VoteCall__Outputs(this);
  }
}

export class VoteCall__Inputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }

  get _ProposalID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get supportsProposal(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class VoteCall__Outputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }
}