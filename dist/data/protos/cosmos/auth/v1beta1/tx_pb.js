"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/auth/v1beta1/tx.proto (package cosmos.auth.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const auth_pb_js_1 = require("./auth_pb.js");
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.auth.v1beta1.MsgUpdateParams
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
MsgUpdateParams.typeName = "cosmos.auth.v1beta1.MsgUpdateParams";
MsgUpdateParams.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: auth_pb_js_1.Params },
]);
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.auth.v1beta1.MsgUpdateParamsResponse
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
MsgUpdateParamsResponse.typeName = "cosmos.auth.v1beta1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
