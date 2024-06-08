"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/query.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySendEnabledResponse = exports.QuerySendEnabledRequest = exports.QueryDenomOwnersResponse = exports.DenomOwner = exports.QueryDenomOwnersRequest = exports.QueryDenomMetadataResponse = exports.QueryDenomMetadataRequest = exports.QueryDenomsMetadataResponse = exports.QueryDenomsMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QuerySupplyOfResponse = exports.QuerySupplyOfRequest = exports.QueryTotalSupplyResponse = exports.QueryTotalSupplyRequest = exports.QuerySpendableBalanceByDenomResponse = exports.QuerySpendableBalanceByDenomRequest = exports.QuerySpendableBalancesResponse = exports.QuerySpendableBalancesRequest = exports.QueryAllBalancesResponse = exports.QueryAllBalancesRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const coin_pb_js_1 = require("../../base/v1beta1/coin_pb.js");
const pagination_pb_js_1 = require("../../base/query/v1beta1/pagination_pb.js");
const bank_pb_js_1 = require("./bank_pb.js");
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryBalanceRequest
 */
class QueryBalanceRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address is the address to query balances for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * denom is the coin denom to query balances for.
         *
         * @generated from field: string denom = 2;
         */
        this.denom = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBalanceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBalanceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBalanceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryBalanceRequest, a, b);
    }
}
exports.QueryBalanceRequest = QueryBalanceRequest;
QueryBalanceRequest.runtime = protobuf_1.proto3;
QueryBalanceRequest.typeName = "cosmos.bank.v1beta1.QueryBalanceRequest";
QueryBalanceRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryBalanceResponse
 */
class QueryBalanceResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBalanceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBalanceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBalanceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryBalanceResponse, a, b);
    }
}
exports.QueryBalanceResponse = QueryBalanceResponse;
QueryBalanceResponse.runtime = protobuf_1.proto3;
QueryBalanceResponse.typeName = "cosmos.bank.v1beta1.QueryBalanceResponse";
QueryBalanceResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "balance", kind: "message", T: coin_pb_js_1.Coin },
]);
/**
 * QueryBalanceRequest is the request type for the Query/AllBalances RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryAllBalancesRequest
 */
class QueryAllBalancesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address is the address to query balances for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllBalancesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllBalancesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllBalancesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryAllBalancesRequest, a, b);
    }
}
exports.QueryAllBalancesRequest = QueryAllBalancesRequest;
QueryAllBalancesRequest.runtime = protobuf_1.proto3;
QueryAllBalancesRequest.typeName = "cosmos.bank.v1beta1.QueryAllBalancesRequest";
QueryAllBalancesRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryAllBalancesResponse
 */
class QueryAllBalancesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * balances is the balances of all the coins.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin balances = 1;
         */
        this.balances = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllBalancesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllBalancesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllBalancesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryAllBalancesResponse, a, b);
    }
}
exports.QueryAllBalancesResponse = QueryAllBalancesResponse;
QueryAllBalancesResponse.runtime = protobuf_1.proto3;
QueryAllBalancesResponse.typeName = "cosmos.bank.v1beta1.QueryAllBalancesResponse";
QueryAllBalancesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "balances", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalancesRequest
 */
class QuerySpendableBalancesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address is the address to query spendable balances for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySpendableBalancesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySpendableBalancesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySpendableBalancesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QuerySpendableBalancesRequest, a, b);
    }
}
exports.QuerySpendableBalancesRequest = QuerySpendableBalancesRequest;
QuerySpendableBalancesRequest.runtime = protobuf_1.proto3;
QuerySpendableBalancesRequest.typeName = "cosmos.bank.v1beta1.QuerySpendableBalancesRequest";
QuerySpendableBalancesRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalancesResponse
 */
class QuerySpendableBalancesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * balances is the spendable balances of all the coins.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin balances = 1;
         */
        this.balances = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySpendableBalancesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySpendableBalancesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySpendableBalancesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QuerySpendableBalancesResponse, a, b);
    }
}
exports.QuerySpendableBalancesResponse = QuerySpendableBalancesResponse;
QuerySpendableBalancesResponse.runtime = protobuf_1.proto3;
QuerySpendableBalancesResponse.typeName = "cosmos.bank.v1beta1.QuerySpendableBalancesResponse";
QuerySpendableBalancesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "balances", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest
 */
class QuerySpendableBalanceByDenomRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address is the address to query balances for.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * denom is the coin denom to query balances for.
         *
         * @generated from field: string denom = 2;
         */
        this.denom = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySpendableBalanceByDenomRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySpendableBalanceByDenomRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySpendableBalanceByDenomRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QuerySpendableBalanceByDenomRequest, a, b);
    }
}
exports.QuerySpendableBalanceByDenomRequest = QuerySpendableBalanceByDenomRequest;
QuerySpendableBalanceByDenomRequest.runtime = protobuf_1.proto3;
QuerySpendableBalanceByDenomRequest.typeName = "cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest";
QuerySpendableBalanceByDenomRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse
 */
class QuerySpendableBalanceByDenomResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySpendableBalanceByDenomResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySpendableBalanceByDenomResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySpendableBalanceByDenomResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QuerySpendableBalanceByDenomResponse, a, b);
    }
}
exports.QuerySpendableBalanceByDenomResponse = QuerySpendableBalanceByDenomResponse;
QuerySpendableBalanceByDenomResponse.runtime = protobuf_1.proto3;
QuerySpendableBalanceByDenomResponse.typeName = "cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse";
QuerySpendableBalanceByDenomResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "balance", kind: "message", T: coin_pb_js_1.Coin },
]);
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryTotalSupplyRequest
 */
class QueryTotalSupplyRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTotalSupplyRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTotalSupplyRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTotalSupplyRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryTotalSupplyRequest, a, b);
    }
}
exports.QueryTotalSupplyRequest = QueryTotalSupplyRequest;
QueryTotalSupplyRequest.runtime = protobuf_1.proto3;
QueryTotalSupplyRequest.typeName = "cosmos.bank.v1beta1.QueryTotalSupplyRequest";
QueryTotalSupplyRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 *
 * @generated from message cosmos.bank.v1beta1.QueryTotalSupplyResponse
 */
class QueryTotalSupplyResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * supply is the supply of the coins
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin supply = 1;
         */
        this.supply = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTotalSupplyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTotalSupplyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTotalSupplyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryTotalSupplyResponse, a, b);
    }
}
exports.QueryTotalSupplyResponse = QueryTotalSupplyResponse;
QueryTotalSupplyResponse.runtime = protobuf_1.proto3;
QueryTotalSupplyResponse.typeName = "cosmos.bank.v1beta1.QueryTotalSupplyResponse";
QueryTotalSupplyResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "supply", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QuerySupplyOfRequest
 */
class QuerySupplyOfRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * denom is the coin denom to query balances for.
         *
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySupplyOfRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySupplyOfRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySupplyOfRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QuerySupplyOfRequest, a, b);
    }
}
exports.QuerySupplyOfRequest = QuerySupplyOfRequest;
QuerySupplyOfRequest.runtime = protobuf_1.proto3;
QuerySupplyOfRequest.typeName = "cosmos.bank.v1beta1.QuerySupplyOfRequest";
QuerySupplyOfRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QuerySupplyOfResponse
 */
class QuerySupplyOfResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySupplyOfResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySupplyOfResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySupplyOfResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QuerySupplyOfResponse, a, b);
    }
}
exports.QuerySupplyOfResponse = QuerySupplyOfResponse;
QuerySupplyOfResponse.runtime = protobuf_1.proto3;
QuerySupplyOfResponse.typeName = "cosmos.bank.v1beta1.QuerySupplyOfResponse";
QuerySupplyOfResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: coin_pb_js_1.Coin },
]);
/**
 * QueryParamsRequest defines the request type for querying x/bank parameters.
 *
 * @generated from message cosmos.bank.v1beta1.QueryParamsRequest
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
QueryParamsRequest.typeName = "cosmos.bank.v1beta1.QueryParamsRequest";
QueryParamsRequest.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * QueryParamsResponse defines the response type for querying x/bank parameters.
 *
 * @generated from message cosmos.bank.v1beta1.QueryParamsResponse
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
QueryParamsResponse.typeName = "cosmos.bank.v1beta1.QueryParamsResponse";
QueryParamsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: bank_pb_js_1.Params },
]);
/**
 * QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomsMetadataRequest
 */
class QueryDenomsMetadataRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomsMetadataRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomsMetadataRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomsMetadataRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryDenomsMetadataRequest, a, b);
    }
}
exports.QueryDenomsMetadataRequest = QueryDenomsMetadataRequest;
QueryDenomsMetadataRequest.runtime = protobuf_1.proto3;
QueryDenomsMetadataRequest.typeName = "cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
QueryDenomsMetadataRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomsMetadataResponse
 */
class QueryDenomsMetadataResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * metadata provides the client information for all the registered tokens.
         *
         * @generated from field: repeated cosmos.bank.v1beta1.Metadata metadatas = 1;
         */
        this.metadatas = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomsMetadataResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomsMetadataResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomsMetadataResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryDenomsMetadataResponse, a, b);
    }
}
exports.QueryDenomsMetadataResponse = QueryDenomsMetadataResponse;
QueryDenomsMetadataResponse.runtime = protobuf_1.proto3;
QueryDenomsMetadataResponse.typeName = "cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
QueryDenomsMetadataResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "metadatas", kind: "message", T: bank_pb_js_1.Metadata, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataRequest
 */
class QueryDenomMetadataRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * denom is the coin denom to query the metadata for.
         *
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomMetadataRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomMetadataRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomMetadataRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryDenomMetadataRequest, a, b);
    }
}
exports.QueryDenomMetadataRequest = QueryDenomMetadataRequest;
QueryDenomMetadataRequest.runtime = protobuf_1.proto3;
QueryDenomMetadataRequest.typeName = "cosmos.bank.v1beta1.QueryDenomMetadataRequest";
QueryDenomMetadataRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataResponse
 */
class QueryDenomMetadataResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomMetadataResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomMetadataResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomMetadataResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryDenomMetadataResponse, a, b);
    }
}
exports.QueryDenomMetadataResponse = QueryDenomMetadataResponse;
QueryDenomMetadataResponse.runtime = protobuf_1.proto3;
QueryDenomMetadataResponse.typeName = "cosmos.bank.v1beta1.QueryDenomMetadataResponse";
QueryDenomMetadataResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: bank_pb_js_1.Metadata },
]);
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersRequest
 */
class QueryDenomOwnersRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * denom defines the coin denomination to query all account holders for.
         *
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomOwnersRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomOwnersRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomOwnersRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryDenomOwnersRequest, a, b);
    }
}
exports.QueryDenomOwnersRequest = QueryDenomOwnersRequest;
QueryDenomOwnersRequest.runtime = protobuf_1.proto3;
QueryDenomOwnersRequest.typeName = "cosmos.bank.v1beta1.QueryDenomOwnersRequest";
QueryDenomOwnersRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.DenomOwner
 */
class DenomOwner extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address defines the address that owns a particular denomination.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DenomOwner().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DenomOwner().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DenomOwner().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DenomOwner, a, b);
    }
}
exports.DenomOwner = DenomOwner;
DenomOwner.runtime = protobuf_1.proto3;
DenomOwner.typeName = "cosmos.bank.v1beta1.DenomOwner";
DenomOwner.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "balance", kind: "message", T: coin_pb_js_1.Coin },
]);
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersResponse
 */
class QueryDenomOwnersResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.bank.v1beta1.DenomOwner denom_owners = 1;
         */
        this.denomOwners = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomOwnersResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomOwnersResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomOwnersResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryDenomOwnersResponse, a, b);
    }
}
exports.QueryDenomOwnersResponse = QueryDenomOwnersResponse;
QueryDenomOwnersResponse.runtime = protobuf_1.proto3;
QueryDenomOwnersResponse.typeName = "cosmos.bank.v1beta1.QueryDenomOwnersResponse";
QueryDenomOwnersResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "denom_owners", kind: "message", T: DenomOwner, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySendEnabledRequest
 */
class QuerySendEnabledRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * denoms is the specific denoms you want look up. Leave empty to get all entries.
         *
         * @generated from field: repeated string denoms = 1;
         */
        this.denoms = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySendEnabledRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySendEnabledRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySendEnabledRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QuerySendEnabledRequest, a, b);
    }
}
exports.QuerySendEnabledRequest = QuerySendEnabledRequest;
QuerySendEnabledRequest.runtime = protobuf_1.proto3;
QuerySendEnabledRequest.typeName = "cosmos.bank.v1beta1.QuerySendEnabledRequest";
QuerySendEnabledRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "denoms", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 99, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySendEnabledResponse
 */
class QuerySendEnabledResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1;
         */
        this.sendEnabled = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySendEnabledResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySendEnabledResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySendEnabledResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QuerySendEnabledResponse, a, b);
    }
}
exports.QuerySendEnabledResponse = QuerySendEnabledResponse;
QuerySendEnabledResponse.runtime = protobuf_1.proto3;
QuerySendEnabledResponse.typeName = "cosmos.bank.v1beta1.QuerySendEnabledResponse";
QuerySendEnabledResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "send_enabled", kind: "message", T: bank_pb_js_1.SendEnabled, repeated: true },
    { no: 99, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);