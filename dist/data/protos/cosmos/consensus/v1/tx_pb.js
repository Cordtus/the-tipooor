"use strict";
// Since: cosmos-sdk 0.47
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const params_pb_js_1 = require("../../../tendermint/types/params_pb.js");
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message cosmos.consensus.v1.MsgUpdateParams
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
MsgUpdateParams.typeName = "cosmos.consensus.v1.MsgUpdateParams";
MsgUpdateParams.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "block", kind: "message", T: params_pb_js_1.BlockParams },
    { no: 3, name: "evidence", kind: "message", T: params_pb_js_1.EvidenceParams },
    { no: 4, name: "validator", kind: "message", T: params_pb_js_1.ValidatorParams },
]);
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message cosmos.consensus.v1.MsgUpdateParamsResponse
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
MsgUpdateParamsResponse.typeName = "cosmos.consensus.v1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
