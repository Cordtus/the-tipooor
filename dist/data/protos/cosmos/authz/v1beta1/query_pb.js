"use strict";
// Since: cosmos-sdk 0.43
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGranteeGrantsResponse = exports.QueryGranteeGrantsRequest = exports.QueryGranterGrantsResponse = exports.QueryGranterGrantsRequest = exports.QueryGrantsResponse = exports.QueryGrantsRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const pagination_pb_js_1 = require("../../base/query/v1beta1/pagination_pb.js");
const authz_pb_js_1 = require("./authz_pb.js");
/**
 * QueryGrantsRequest is the request type for the Query/Grants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGrantsRequest
 */
class QueryGrantsRequest extends protobuf_1.Message {
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
         * Optional, msg_type_url, when set, will query only grants matching given msg type.
         *
         * @generated from field: string msg_type_url = 3;
         */
        this.msgTypeUrl = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGrantsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGrantsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGrantsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGrantsRequest, a, b);
    }
}
exports.QueryGrantsRequest = QueryGrantsRequest;
QueryGrantsRequest.runtime = protobuf_1.proto3;
QueryGrantsRequest.typeName = "cosmos.authz.v1beta1.QueryGrantsRequest";
QueryGrantsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGrantsResponse
 */
class QueryGrantsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * authorizations is a list of grants granted for grantee by granter.
         *
         * @generated from field: repeated cosmos.authz.v1beta1.Grant grants = 1;
         */
        this.grants = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGrantsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGrantsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGrantsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGrantsResponse, a, b);
    }
}
exports.QueryGrantsResponse = QueryGrantsResponse;
QueryGrantsResponse.runtime = protobuf_1.proto3;
QueryGrantsResponse.typeName = "cosmos.authz.v1beta1.QueryGrantsResponse";
QueryGrantsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: authz_pb_js_1.Grant, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranterGrantsRequest
 */
class QueryGranterGrantsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string granter = 1;
         */
        this.granter = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGranterGrantsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGranterGrantsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGranterGrantsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGranterGrantsRequest, a, b);
    }
}
exports.QueryGranterGrantsRequest = QueryGranterGrantsRequest;
QueryGranterGrantsRequest.runtime = protobuf_1.proto3;
QueryGranterGrantsRequest.typeName = "cosmos.authz.v1beta1.QueryGranterGrantsRequest";
QueryGranterGrantsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranterGrantsResponse
 */
class QueryGranterGrantsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * grants is a list of grants granted by the granter.
         *
         * @generated from field: repeated cosmos.authz.v1beta1.GrantAuthorization grants = 1;
         */
        this.grants = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGranterGrantsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGranterGrantsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGranterGrantsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGranterGrantsResponse, a, b);
    }
}
exports.QueryGranterGrantsResponse = QueryGranterGrantsResponse;
QueryGranterGrantsResponse.runtime = protobuf_1.proto3;
QueryGranterGrantsResponse.typeName = "cosmos.authz.v1beta1.QueryGranterGrantsResponse";
QueryGranterGrantsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: authz_pb_js_1.GrantAuthorization, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranteeGrantsRequest
 */
class QueryGranteeGrantsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string grantee = 1;
         */
        this.grantee = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGranteeGrantsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGranteeGrantsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGranteeGrantsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGranteeGrantsRequest, a, b);
    }
}
exports.QueryGranteeGrantsRequest = QueryGranteeGrantsRequest;
QueryGranteeGrantsRequest.runtime = protobuf_1.proto3;
QueryGranteeGrantsRequest.typeName = "cosmos.authz.v1beta1.QueryGranteeGrantsRequest";
QueryGranteeGrantsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranteeGrantsResponse
 */
class QueryGranteeGrantsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * grants is a list of grants granted to the grantee.
         *
         * @generated from field: repeated cosmos.authz.v1beta1.GrantAuthorization grants = 1;
         */
        this.grants = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGranteeGrantsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGranteeGrantsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGranteeGrantsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGranteeGrantsResponse, a, b);
    }
}
exports.QueryGranteeGrantsResponse = QueryGranteeGrantsResponse;
QueryGranteeGrantsResponse.runtime = protobuf_1.proto3;
QueryGranteeGrantsResponse.typeName = "cosmos.authz.v1beta1.QueryGranteeGrantsResponse";
QueryGranteeGrantsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: authz_pb_js_1.GrantAuthorization, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
