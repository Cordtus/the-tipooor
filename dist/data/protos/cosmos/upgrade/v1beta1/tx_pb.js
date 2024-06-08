"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCancelUpgradeResponse = exports.MsgCancelUpgrade = exports.MsgSoftwareUpgradeResponse = exports.MsgSoftwareUpgrade = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const upgrade_pb_js_1 = require("./upgrade_pb.js");
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
class MsgSoftwareUpgrade extends protobuf_1.Message {
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
        return new MsgSoftwareUpgrade().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSoftwareUpgrade().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSoftwareUpgrade().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgSoftwareUpgrade, a, b);
    }
}
exports.MsgSoftwareUpgrade = MsgSoftwareUpgrade;
MsgSoftwareUpgrade.runtime = protobuf_1.proto3;
MsgSoftwareUpgrade.typeName = "cosmos.upgrade.v1beta1.MsgSoftwareUpgrade";
MsgSoftwareUpgrade.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "plan", kind: "message", T: upgrade_pb_js_1.Plan },
]);
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
class MsgSoftwareUpgradeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSoftwareUpgradeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSoftwareUpgradeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSoftwareUpgradeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgSoftwareUpgradeResponse, a, b);
    }
}
exports.MsgSoftwareUpgradeResponse = MsgSoftwareUpgradeResponse;
MsgSoftwareUpgradeResponse.runtime = protobuf_1.proto3;
MsgSoftwareUpgradeResponse.typeName = "cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse";
MsgSoftwareUpgradeResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
class MsgCancelUpgrade extends protobuf_1.Message {
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
        return new MsgCancelUpgrade().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCancelUpgrade().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCancelUpgrade().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCancelUpgrade, a, b);
    }
}
exports.MsgCancelUpgrade = MsgCancelUpgrade;
MsgCancelUpgrade.runtime = protobuf_1.proto3;
MsgCancelUpgrade.typeName = "cosmos.upgrade.v1beta1.MsgCancelUpgrade";
MsgCancelUpgrade.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
class MsgCancelUpgradeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCancelUpgradeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCancelUpgradeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCancelUpgradeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCancelUpgradeResponse, a, b);
    }
}
exports.MsgCancelUpgradeResponse = MsgCancelUpgradeResponse;
MsgCancelUpgradeResponse.runtime = protobuf_1.proto3;
MsgCancelUpgradeResponse.typeName = "cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse";
MsgCancelUpgradeResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
