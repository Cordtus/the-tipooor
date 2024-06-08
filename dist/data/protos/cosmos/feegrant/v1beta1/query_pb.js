"use strict";
// Since: cosmos-sdk 0.43
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAllowancesByGranterResponse = exports.QueryAllowancesByGranterRequest = exports.QueryAllowancesResponse = exports.QueryAllowancesRequest = exports.QueryAllowanceResponse = exports.QueryAllowanceRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const feegrant_pb_js_1 = require("./feegrant_pb.js");
const pagination_pb_js_1 = require("../../base/query/v1beta1/pagination_pb.js");
/**
 * QueryAllowanceRequest is the request type for the Query/Allowance RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowanceRequest
 */
class QueryAllowanceRequest extends protobuf_1.Message {
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
        return new QueryAllowanceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowanceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowanceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryAllowanceRequest, a, b);
    }
}
exports.QueryAllowanceRequest = QueryAllowanceRequest;
QueryAllowanceRequest.runtime = protobuf_1.proto3;
QueryAllowanceRequest.typeName = "cosmos.feegrant.v1beta1.QueryAllowanceRequest";
QueryAllowanceRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryAllowanceResponse is the response type for the Query/Allowance RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowanceResponse
 */
class QueryAllowanceResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowanceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowanceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowanceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryAllowanceResponse, a, b);
    }
}
exports.QueryAllowanceResponse = QueryAllowanceResponse;
QueryAllowanceResponse.runtime = protobuf_1.proto3;
QueryAllowanceResponse.typeName = "cosmos.feegrant.v1beta1.QueryAllowanceResponse";
QueryAllowanceResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "allowance", kind: "message", T: feegrant_pb_js_1.Grant },
]);
/**
 * QueryAllowancesRequest is the request type for the Query/Allowances RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesRequest
 */
class QueryAllowancesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string grantee = 1;
         */
        this.grantee = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowancesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowancesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowancesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryAllowancesRequest, a, b);
    }
}
exports.QueryAllowancesRequest = QueryAllowancesRequest;
QueryAllowancesRequest.runtime = protobuf_1.proto3;
QueryAllowancesRequest.typeName = "cosmos.feegrant.v1beta1.QueryAllowancesRequest";
QueryAllowancesRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryAllowancesResponse is the response type for the Query/Allowances RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesResponse
 */
class QueryAllowancesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * allowances are allowance's granted for grantee by granter.
         *
         * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
         */
        this.allowances = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowancesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowancesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowancesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryAllowancesResponse, a, b);
    }
}
exports.QueryAllowancesResponse = QueryAllowancesResponse;
QueryAllowancesResponse.runtime = protobuf_1.proto3;
QueryAllowancesResponse.typeName = "cosmos.feegrant.v1beta1.QueryAllowancesResponse";
QueryAllowancesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "allowances", kind: "message", T: feegrant_pb_js_1.Grant, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest
 */
class QueryAllowancesByGranterRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string granter = 1;
         */
        this.granter = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowancesByGranterRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowancesByGranterRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowancesByGranterRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryAllowancesByGranterRequest, a, b);
    }
}
exports.QueryAllowancesByGranterRequest = QueryAllowancesByGranterRequest;
QueryAllowancesByGranterRequest.runtime = protobuf_1.proto3;
QueryAllowancesByGranterRequest.typeName = "cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest";
QueryAllowancesByGranterRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse
 */
class QueryAllowancesByGranterResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * allowances that have been issued by the granter.
         *
         * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
         */
        this.allowances = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowancesByGranterResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowancesByGranterResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowancesByGranterResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryAllowancesByGranterResponse, a, b);
    }
}
exports.QueryAllowancesByGranterResponse = QueryAllowancesByGranterResponse;
QueryAllowancesByGranterResponse.runtime = protobuf_1.proto3;
QueryAllowancesByGranterResponse.typeName = "cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse";
QueryAllowancesByGranterResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "allowances", kind: "message", T: feegrant_pb_js_1.Grant, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
