"use strict";
// Since: cosmos-sdk 0.43
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRevokeResponse = exports.MsgRevoke = exports.MsgGrantResponse = exports.MsgExec = exports.MsgExecResponse = exports.MsgGrant = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const authz_pb_js_1 = require("./authz_pb.js");
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 *
 * @generated from message cosmos.authz.v1beta1.MsgGrant
 */
class MsgGrant extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string granter = 1;
         */
        this.granter = "";
        /**
         * @generated from field: string grantee = 2;
         */
        this.grantee = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgGrant().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgGrant().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgGrant().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgGrant, a, b);
    }
}
exports.MsgGrant = MsgGrant;
MsgGrant.runtime = protobuf_1.proto3;
MsgGrant.typeName = "cosmos.authz.v1beta1.MsgGrant";
MsgGrant.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "grant", kind: "message", T: authz_pb_js_1.Grant },
]);
/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgExecResponse
 */
class MsgExecResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated bytes results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExecResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExecResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExecResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgExecResponse, a, b);
    }
}
exports.MsgExecResponse = MsgExecResponse;
MsgExecResponse.runtime = protobuf_1.proto3;
MsgExecResponse.typeName = "cosmos.authz.v1beta1.MsgExecResponse";
MsgExecResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
]);
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 *
 * @generated from message cosmos.authz.v1beta1.MsgExec
 */
class MsgExec extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string grantee = 1;
         */
        this.grantee = "";
        /**
         * Execute Msg.
         * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
         * triple and validate it.
         *
         * @generated from field: repeated google.protobuf.Any msgs = 2;
         */
        this.msgs = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExec().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExec().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExec().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgExec, a, b);
    }
}
exports.MsgExec = MsgExec;
MsgExec.runtime = protobuf_1.proto3;
MsgExec.typeName = "cosmos.authz.v1beta1.MsgExec";
MsgExec.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msgs", kind: "message", T: protobuf_1.Any, repeated: true },
]);
/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgGrantResponse
 */
class MsgGrantResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgGrantResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgGrantResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgGrantResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgGrantResponse, a, b);
    }
}
exports.MsgGrantResponse = MsgGrantResponse;
MsgGrantResponse.runtime = protobuf_1.proto3;
MsgGrantResponse.typeName = "cosmos.authz.v1beta1.MsgGrantResponse";
MsgGrantResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 *
 * @generated from message cosmos.authz.v1beta1.MsgRevoke
 */
class MsgRevoke extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string granter = 1;
         */
        this.granter = "";
        /**
         * @generated from field: string grantee = 2;
         */
        this.grantee = "";
        /**
         * @generated from field: string msg_type_url = 3;
         */
        this.msgTypeUrl = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRevoke().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRevoke().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRevoke().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgRevoke, a, b);
    }
}
exports.MsgRevoke = MsgRevoke;
MsgRevoke.runtime = protobuf_1.proto3;
MsgRevoke.typeName = "cosmos.authz.v1beta1.MsgRevoke";
MsgRevoke.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgRevokeResponse
 */
class MsgRevokeResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRevokeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRevokeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRevokeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgRevokeResponse, a, b);
    }
}
exports.MsgRevokeResponse = MsgRevokeResponse;
MsgRevokeResponse.runtime = protobuf_1.proto3;
MsgRevokeResponse.typeName = "cosmos.authz.v1beta1.MsgRevokeResponse";
MsgRevokeResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
