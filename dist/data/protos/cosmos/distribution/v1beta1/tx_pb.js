"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/distribution/v1beta1/tx.proto (package cosmos.distribution.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCommunityPoolSpendResponse = exports.MsgCommunityPoolSpend = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgFundCommunityPoolResponse = exports.MsgFundCommunityPool = exports.MsgWithdrawValidatorCommissionResponse = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorRewardResponse = exports.MsgWithdrawDelegatorReward = exports.MsgSetWithdrawAddressResponse = exports.MsgSetWithdrawAddress = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const coin_pb_js_1 = require("../../base/v1beta1/coin_pb.js");
const distribution_pb_js_1 = require("./distribution_pb.js");
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 *
 * @generated from message cosmos.distribution.v1beta1.MsgSetWithdrawAddress
 */
class MsgSetWithdrawAddress extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * @generated from field: string withdraw_address = 2;
         */
        this.withdrawAddress = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetWithdrawAddress().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetWithdrawAddress().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetWithdrawAddress().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgSetWithdrawAddress, a, b);
    }
}
exports.MsgSetWithdrawAddress = MsgSetWithdrawAddress;
MsgSetWithdrawAddress.runtime = protobuf_1.proto3;
MsgSetWithdrawAddress.typeName = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
MsgSetWithdrawAddress.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "withdraw_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse
 */
class MsgSetWithdrawAddressResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetWithdrawAddressResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetWithdrawAddressResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetWithdrawAddressResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgSetWithdrawAddressResponse, a, b);
    }
}
exports.MsgSetWithdrawAddressResponse = MsgSetWithdrawAddressResponse;
MsgSetWithdrawAddressResponse.runtime = protobuf_1.proto3;
MsgSetWithdrawAddressResponse.typeName = "cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
MsgSetWithdrawAddressResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
 */
class MsgWithdrawDelegatorReward extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * @generated from field: string validator_address = 2;
         */
        this.validatorAddress = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawDelegatorReward().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawDelegatorReward().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawDelegatorReward().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgWithdrawDelegatorReward, a, b);
    }
}
exports.MsgWithdrawDelegatorReward = MsgWithdrawDelegatorReward;
MsgWithdrawDelegatorReward.runtime = protobuf_1.proto3;
MsgWithdrawDelegatorReward.typeName = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
MsgWithdrawDelegatorReward.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse
 */
class MsgWithdrawDelegatorRewardResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Since: cosmos-sdk 0.46
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
         */
        this.amount = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawDelegatorRewardResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawDelegatorRewardResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawDelegatorRewardResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgWithdrawDelegatorRewardResponse, a, b);
    }
}
exports.MsgWithdrawDelegatorRewardResponse = MsgWithdrawDelegatorRewardResponse;
MsgWithdrawDelegatorRewardResponse.runtime = protobuf_1.proto3;
MsgWithdrawDelegatorRewardResponse.typeName = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
MsgWithdrawDelegatorRewardResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
]);
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission
 */
class MsgWithdrawValidatorCommission extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawValidatorCommission().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawValidatorCommission().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawValidatorCommission().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgWithdrawValidatorCommission, a, b);
    }
}
exports.MsgWithdrawValidatorCommission = MsgWithdrawValidatorCommission;
MsgWithdrawValidatorCommission.runtime = protobuf_1.proto3;
MsgWithdrawValidatorCommission.typeName = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
MsgWithdrawValidatorCommission.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse
 */
class MsgWithdrawValidatorCommissionResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Since: cosmos-sdk 0.46
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
         */
        this.amount = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawValidatorCommissionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawValidatorCommissionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawValidatorCommissionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgWithdrawValidatorCommissionResponse, a, b);
    }
}
exports.MsgWithdrawValidatorCommissionResponse = MsgWithdrawValidatorCommissionResponse;
MsgWithdrawValidatorCommissionResponse.runtime = protobuf_1.proto3;
MsgWithdrawValidatorCommissionResponse.typeName = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
MsgWithdrawValidatorCommissionResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
]);
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgFundCommunityPool
 */
class MsgFundCommunityPool extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
         */
        this.amount = [];
        /**
         * @generated from field: string depositor = 2;
         */
        this.depositor = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgFundCommunityPool().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgFundCommunityPool().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgFundCommunityPool().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgFundCommunityPool, a, b);
    }
}
exports.MsgFundCommunityPool = MsgFundCommunityPool;
MsgFundCommunityPool.runtime = protobuf_1.proto3;
MsgFundCommunityPool.typeName = "cosmos.distribution.v1beta1.MsgFundCommunityPool";
MsgFundCommunityPool.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse
 */
class MsgFundCommunityPoolResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgFundCommunityPoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgFundCommunityPoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgFundCommunityPoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgFundCommunityPoolResponse, a, b);
    }
}
exports.MsgFundCommunityPoolResponse = MsgFundCommunityPoolResponse;
MsgFundCommunityPoolResponse.runtime = protobuf_1.proto3;
MsgFundCommunityPoolResponse.typeName = "cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
MsgFundCommunityPoolResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgUpdateParams
 */
class MsgUpdateParams extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateParams, a, b);
    }
}
exports.MsgUpdateParams = MsgUpdateParams;
MsgUpdateParams.runtime = protobuf_1.proto3;
MsgUpdateParams.typeName = "cosmos.distribution.v1beta1.MsgUpdateParams";
MsgUpdateParams.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: distribution_pb_js_1.Params },
]);
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgUpdateParamsResponse
 */
class MsgUpdateParamsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateParamsResponse, a, b);
    }
}
exports.MsgUpdateParamsResponse = MsgUpdateParamsResponse;
MsgUpdateParamsResponse.runtime = protobuf_1.proto3;
MsgUpdateParamsResponse.typeName = "cosmos.distribution.v1beta1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgCommunityPoolSpend
 */
class MsgCommunityPoolSpend extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        /**
         * @generated from field: string recipient = 2;
         */
        this.recipient = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
         */
        this.amount = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCommunityPoolSpend().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCommunityPoolSpend().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCommunityPoolSpend().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCommunityPoolSpend, a, b);
    }
}
exports.MsgCommunityPoolSpend = MsgCommunityPoolSpend;
MsgCommunityPoolSpend.runtime = protobuf_1.proto3;
MsgCommunityPoolSpend.typeName = "cosmos.distribution.v1beta1.MsgCommunityPoolSpend";
MsgCommunityPoolSpend.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
]);
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse
 */
class MsgCommunityPoolSpendResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCommunityPoolSpendResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCommunityPoolSpendResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCommunityPoolSpendResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCommunityPoolSpendResponse, a, b);
    }
}
exports.MsgCommunityPoolSpendResponse = MsgCommunityPoolSpendResponse;
MsgCommunityPoolSpendResponse.runtime = protobuf_1.proto3;
MsgCommunityPoolSpendResponse.typeName = "cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse";
MsgCommunityPoolSpendResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
