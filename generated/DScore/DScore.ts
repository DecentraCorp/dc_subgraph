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

export class DScoreDecreased extends ethereum.Event {
  get params(): DScoreDecreased__Params {
    return new DScoreDecreased__Params(this);
  }
}

export class DScoreDecreased__Params {
  _event: DScoreDecreased;

  constructor(event: DScoreDecreased) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get factor(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amountDecreased(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class DScoreIncreased extends ethereum.Event {
  get params(): DScoreIncreased__Params {
    return new DScoreIncreased__Params(this);
  }
}

export class DScoreIncreased__Params {
  _event: DScoreIncreased;

  constructor(event: DScoreIncreased) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get factor(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amountIncreased(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Memberfrozen extends ethereum.Event {
  get params(): Memberfrozen__Params {
    return new Memberfrozen__Params(this);
  }
}

export class Memberfrozen__Params {
  _event: Memberfrozen;

  constructor(event: Memberfrozen) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get timeFrozen(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MembershipStaked extends ethereum.Event {
  get params(): MembershipStaked__Params {
    return new MembershipStaked__Params(this);
  }
}

export class MembershipStaked__Params {
  _event: MembershipStaked;

  constructor(event: MembershipStaked) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountStaked(): BigInt {
    return this._event.parameters[1].value.toBigInt();
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

export class DScore__getDscoreResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class DScore__membersResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class DScore extends ethereum.SmartContract {
  static bind(address: Address): DScore {
    return new DScore("DScore", address);
  }

  calculateVotingPower(_member: Address): BigInt {
    let result = super.call(
      "calculateVotingPower",
      "calculateVotingPower(address):(uint256)",
      [ethereum.Value.fromAddress(_member)]
    );

    return result[0].toBigInt();
  }

  try_calculateVotingPower(_member: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateVotingPower",
      "calculateVotingPower(address):(uint256)",
      [ethereum.Value.fromAddress(_member)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkStaked(_member: Address): boolean {
    let result = super.call("checkStaked", "checkStaked(address):(bool)", [
      ethereum.Value.fromAddress(_member)
    ]);

    return result[0].toBoolean();
  }

  try_checkStaked(_member: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("checkStaked", "checkStaked(address):(bool)", [
      ethereum.Value.fromAddress(_member)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  dc(): Address {
    let result = super.call("dc", "dc():(address)", []);

    return result[0].toAddress();
  }

  try_dc(): ethereum.CallResult<Address> {
    let result = super.tryCall("dc", "dc():(address)", []);
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

  getDscore(_member: Address): DScore__getDscoreResult {
    let result = super.call(
      "getDscore",
      "getDscore(address):(uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(_member)]
    );

    return new DScore__getDscoreResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  try_getDscore(
    _member: Address
  ): ethereum.CallResult<DScore__getDscoreResult> {
    let result = super.tryCall(
      "getDscore",
      "getDscore(address):(uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(_member)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DScore__getDscoreResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt()
      )
    );
  }

  members(param0: Address): DScore__membersResult {
    let result = super.call(
      "members",
      "members(address):(uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new DScore__membersResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  try_members(param0: Address): ethereum.CallResult<DScore__membersResult> {
    let result = super.tryCall(
      "members",
      "members(address):(uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DScore__membersResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt()
      )
    );
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

  stakedCounter(): BigInt {
    let result = super.call("stakedCounter", "stakedCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try_stakedCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "stakedCounter",
      "stakedCounter():(uint256)",
      []
    );
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

  get _dStock(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DecreaseDScoreCall extends ethereum.Call {
  get inputs(): DecreaseDScoreCall__Inputs {
    return new DecreaseDScoreCall__Inputs(this);
  }

  get outputs(): DecreaseDScoreCall__Outputs {
    return new DecreaseDScoreCall__Outputs(this);
  }
}

export class DecreaseDScoreCall__Inputs {
  _call: DecreaseDScoreCall;

  constructor(call: DecreaseDScoreCall) {
    this._call = call;
  }

  get _member(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _factor(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DecreaseDScoreCall__Outputs {
  _call: DecreaseDScoreCall;

  constructor(call: DecreaseDScoreCall) {
    this._call = call;
  }
}

export class IncreaseDScoreCall extends ethereum.Call {
  get inputs(): IncreaseDScoreCall__Inputs {
    return new IncreaseDScoreCall__Inputs(this);
  }

  get outputs(): IncreaseDScoreCall__Outputs {
    return new IncreaseDScoreCall__Outputs(this);
  }
}

export class IncreaseDScoreCall__Inputs {
  _call: IncreaseDScoreCall;

  constructor(call: IncreaseDScoreCall) {
    this._call = call;
  }

  get _member(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _factor(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class IncreaseDScoreCall__Outputs {
  _call: IncreaseDScoreCall;

  constructor(call: IncreaseDScoreCall) {
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

export class SetDCCall extends ethereum.Call {
  get inputs(): SetDCCall__Inputs {
    return new SetDCCall__Inputs(this);
  }

  get outputs(): SetDCCall__Outputs {
    return new SetDCCall__Outputs(this);
  }
}

export class SetDCCall__Inputs {
  _call: SetDCCall;

  constructor(call: SetDCCall) {
    this._call = call;
  }

  get _dCore(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDCCall__Outputs {
  _call: SetDCCall;

  constructor(call: SetDCCall) {
    this._call = call;
  }
}

export class StakeMembershipCall extends ethereum.Call {
  get inputs(): StakeMembershipCall__Inputs {
    return new StakeMembershipCall__Inputs(this);
  }

  get outputs(): StakeMembershipCall__Outputs {
    return new StakeMembershipCall__Outputs(this);
  }
}

export class StakeMembershipCall__Inputs {
  _call: StakeMembershipCall;

  constructor(call: StakeMembershipCall) {
    this._call = call;
  }

  get _stakeAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakeMembershipCall__Outputs {
  _call: StakeMembershipCall;

  constructor(call: StakeMembershipCall) {
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
