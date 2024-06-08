"use strict";
// Since: cosmos-sdk 0.47
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const params_pb_js_1 = require("../../../tendermint/types/params_pb.js");
/**
 * QueryParamsRequest defines the request type for querying x/consensus parameters.
 *
 * @generated from message cosmos.consensus.v1.QueryParamsRequest
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
QueryParamsRequest.typeName = "cosmos.consensus.v1.QueryParamsRequest";
QueryParamsRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * QueryParamsResponse defines the response type for querying x/consensus parameters.
 *
 * @generated from message cosmos.consensus.v1.QueryParamsResponse
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
QueryParamsResponse.typeName = "cosmos.consensus.v1.QueryParamsResponse";
QueryParamsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: params_pb_js_1.ConsensusParams },
]);
