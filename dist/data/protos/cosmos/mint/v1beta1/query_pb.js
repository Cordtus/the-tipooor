"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/mint/v1beta1/query.proto (package cosmos.mint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAnnualProvisionsResponse = exports.QueryAnnualProvisionsRequest = exports.QueryInflationResponse = exports.QueryInflationRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const mint_pb_js_1 = require("./mint_pb.js");
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryParamsRequest
 */
class QueryParamsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryParamsRequest, a, b);
    }
}
exports.QueryParamsRequest = QueryParamsRequest;
QueryParamsRequest.runtime = protobuf_1.proto3;
QueryParamsRequest.typeName = "cosmos.mint.v1beta1.QueryParamsRequest";
QueryParamsRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryParamsResponse
 */
class QueryParamsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryParamsResponse, a, b);
    }
}
exports.QueryParamsResponse = QueryParamsResponse;
QueryParamsResponse.runtime = protobuf_1.proto3;
QueryParamsResponse.typeName = "cosmos.mint.v1beta1.QueryParamsResponse";
QueryParamsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: mint_pb_js_1.Params },
]);
/**
 * QueryInflationRequest is the request type for the Query/Inflation RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryInflationRequest
 */
class QueryInflationRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryInflationRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryInflationRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryInflationRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryInflationRequest, a, b);
    }
}
exports.QueryInflationRequest = QueryInflationRequest;
QueryInflationRequest.runtime = protobuf_1.proto3;
QueryInflationRequest.typeName = "cosmos.mint.v1beta1.QueryInflationRequest";
QueryInflationRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryInflationResponse
 */
class QueryInflationResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * inflation is the current minting inflation value.
         *
         * @generated from field: bytes inflation = 1;
         */
        this.inflation = new Uint8Array(0);
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryInflationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryInflationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryInflationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryInflationResponse, a, b);
    }
}
exports.QueryInflationResponse = QueryInflationResponse;
QueryInflationResponse.runtime = protobuf_1.proto3;
QueryInflationResponse.typeName = "cosmos.mint.v1beta1.QueryInflationResponse";
QueryInflationResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "inflation", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryAnnualProvisionsRequest
 */
class QueryAnnualProvisionsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAnnualProvisionsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAnnualProvisionsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAnnualProvisionsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryAnnualProvisionsRequest, a, b);
    }
}
exports.QueryAnnualProvisionsRequest = QueryAnnualProvisionsRequest;
QueryAnnualProvisionsRequest.runtime = protobuf_1.proto3;
QueryAnnualProvisionsRequest.typeName = "cosmos.mint.v1beta1.QueryAnnualProvisionsRequest";
QueryAnnualProvisionsRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryAnnualProvisionsResponse
 */
class QueryAnnualProvisionsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * annual_provisions is the current minting annual provisions value.
         *
         * @generated from field: bytes annual_provisions = 1;
         */
        this.annualProvisions = new Uint8Array(0);
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAnnualProvisionsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAnnualProvisionsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAnnualProvisionsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryAnnualProvisionsResponse, a, b);
    }
}
exports.QueryAnnualProvisionsResponse = QueryAnnualProvisionsResponse;
QueryAnnualProvisionsResponse.runtime = protobuf_1.proto3;
QueryAnnualProvisionsResponse.typeName = "cosmos.mint.v1beta1.QueryAnnualProvisionsResponse";
QueryAnnualProvisionsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "annual_provisions", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
