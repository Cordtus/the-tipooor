"use strict";
// Since: cosmos-sdk 0.43
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRevokeAllowanceResponse = exports.MsgRevokeAllowance = exports.MsgGrantAllowanceResponse = exports.MsgGrantAllowance = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 *
 * @generated from message cosmos.feegrant.v1beta1.MsgGrantAllowance
 */
class MsgGrantAllowance extends protobuf_1.Message {
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
        return new MsgGrantAllowance().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgGrantAllowance().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgGrantAllowance().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgGrantAllowance, a, b);
    }
}
exports.MsgGrantAllowance = MsgGrantAllowance;
MsgGrantAllowance.runtime = protobuf_1.proto3;
MsgGrantAllowance.typeName = "cosmos.feegrant.v1beta1.MsgGrantAllowance";
MsgGrantAllowance.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "allowance", kind: "message", T: protobuf_1.Any },
]);
/**
 * MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type.
 *
 * @generated from message cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse
 */
class MsgGrantAllowanceResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgGrantAllowanceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgGrantAllowanceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgGrantAllowanceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgGrantAllowanceResponse, a, b);
    }
}
exports.MsgGrantAllowanceResponse = MsgGrantAllowanceResponse;
MsgGrantAllowanceResponse.runtime = protobuf_1.proto3;
MsgGrantAllowanceResponse.typeName = "cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse";
MsgGrantAllowanceResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgRevokeAllowance removes any existing Allowance from Granter to Grantee.
 *
 * @generated from message cosmos.feegrant.v1beta1.MsgRevokeAllowance
 */
class MsgRevokeAllowance extends protobuf_1.Message {
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
        return new MsgRevokeAllowance().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRevokeAllowance().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRevokeAllowance().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgRevokeAllowance, a, b);
    }
}
exports.MsgRevokeAllowance = MsgRevokeAllowance;
MsgRevokeAllowance.runtime = protobuf_1.proto3;
MsgRevokeAllowance.typeName = "cosmos.feegrant.v1beta1.MsgRevokeAllowance";
MsgRevokeAllowance.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type.
 *
 * @generated from message cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse
 */
class MsgRevokeAllowanceResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRevokeAllowanceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRevokeAllowanceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRevokeAllowanceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgRevokeAllowanceResponse, a, b);
    }
}
exports.MsgRevokeAllowanceResponse = MsgRevokeAllowanceResponse;
MsgRevokeAllowanceResponse.runtime = protobuf_1.proto3;
MsgRevokeAllowanceResponse.typeName = "cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse";
MsgRevokeAllowanceResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
