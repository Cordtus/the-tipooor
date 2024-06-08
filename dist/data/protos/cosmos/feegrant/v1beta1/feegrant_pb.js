"use strict";
// Since: cosmos-sdk 0.43
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grant = exports.AllowedMsgAllowance = exports.PeriodicAllowance = exports.BasicAllowance = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const coin_pb_js_1 = require("../../base/v1beta1/coin_pb.js");
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 *
 * @generated from message cosmos.feegrant.v1beta1.BasicAllowance
 */
class BasicAllowance extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * spend_limit specifies the maximum amount of coins that can be spent
         * by this allowance and will be updated as coins are spent. If it is
         * empty, there is no spend limit and any amount of coins can be spent.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin spend_limit = 1;
         */
        this.spendLimit = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BasicAllowance().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BasicAllowance().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BasicAllowance().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(BasicAllowance, a, b);
    }
}
exports.BasicAllowance = BasicAllowance;
BasicAllowance.runtime = protobuf_1.proto3;
BasicAllowance.typeName = "cosmos.feegrant.v1beta1.BasicAllowance";
BasicAllowance.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "spend_limit", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 2, name: "expiration", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 *
 * @generated from message cosmos.feegrant.v1beta1.PeriodicAllowance
 */
class PeriodicAllowance extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * period_spend_limit specifies the maximum number of coins that can be spent
         * in the period
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin period_spend_limit = 3;
         */
        this.periodSpendLimit = [];
        /**
         * period_can_spend is the number of coins left to be spent before the period_reset time
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin period_can_spend = 4;
         */
        this.periodCanSpend = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PeriodicAllowance().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PeriodicAllowance().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PeriodicAllowance().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PeriodicAllowance, a, b);
    }
}
exports.PeriodicAllowance = PeriodicAllowance;
PeriodicAllowance.runtime = protobuf_1.proto3;
PeriodicAllowance.typeName = "cosmos.feegrant.v1beta1.PeriodicAllowance";
PeriodicAllowance.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "basic", kind: "message", T: BasicAllowance },
    { no: 2, name: "period", kind: "message", T: protobuf_1.Duration },
    { no: 3, name: "period_spend_limit", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 4, name: "period_can_spend", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 5, name: "period_reset", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * AllowedMsgAllowance creates allowance only for specified message types.
 *
 * @generated from message cosmos.feegrant.v1beta1.AllowedMsgAllowance
 */
class AllowedMsgAllowance extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * allowed_messages are the messages for which the grantee has the access.
         *
         * @generated from field: repeated string allowed_messages = 2;
         */
        this.allowedMessages = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AllowedMsgAllowance().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AllowedMsgAllowance().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AllowedMsgAllowance().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AllowedMsgAllowance, a, b);
    }
}
exports.AllowedMsgAllowance = AllowedMsgAllowance;
AllowedMsgAllowance.runtime = protobuf_1.proto3;
AllowedMsgAllowance.typeName = "cosmos.feegrant.v1beta1.AllowedMsgAllowance";
AllowedMsgAllowance.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "allowance", kind: "message", T: protobuf_1.Any },
    { no: 2, name: "allowed_messages", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * Grant is stored in the KVStore to record a grant with full context
 *
 * @generated from message cosmos.feegrant.v1beta1.Grant
 */
class Grant extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * granter is the address of the user granting an allowance of their funds.
         *
         * @generated from field: string granter = 1;
         */
        this.granter = "";
        /**
         * grantee is the address of the user being granted an allowance of another user's funds.
         *
         * @generated from field: string grantee = 2;
         */
        this.grantee = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Grant().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Grant().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Grant().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Grant, a, b);
    }
}
exports.Grant = Grant;
Grant.runtime = protobuf_1.proto3;
Grant.typeName = "cosmos.feegrant.v1beta1.Grant";
Grant.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "allowance", kind: "message", T: protobuf_1.Any },
]);
