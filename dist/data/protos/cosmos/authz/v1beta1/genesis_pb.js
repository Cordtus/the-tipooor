"use strict";
// Since: cosmos-sdk 0.43
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const authz_pb_js_1 = require("./authz_pb.js");
/**
 * GenesisState defines the authz module's genesis state.
 *
 * @generated from message cosmos.authz.v1beta1.GenesisState
 */
class GenesisState extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.authz.v1beta1.GrantAuthorization authorization = 1;
         */
        this.authorization = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GenesisState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GenesisState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GenesisState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GenesisState, a, b);
    }
}
exports.GenesisState = GenesisState;
GenesisState.runtime = protobuf_1.proto3;
GenesisState.typeName = "cosmos.authz.v1beta1.GenesisState";
GenesisState.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "authorization", kind: "message", T: authz_pb_js_1.GrantAuthorization, repeated: true },
]);
