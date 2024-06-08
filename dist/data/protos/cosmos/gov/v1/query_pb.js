"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTallyResultResponse = exports.QueryTallyResultRequest = exports.QueryDepositsResponse = exports.QueryDepositsRequest = exports.QueryDepositResponse = exports.QueryDepositRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryVotesResponse = exports.QueryVotesRequest = exports.QueryVoteResponse = exports.QueryVoteRequest = exports.QueryProposalsResponse = exports.QueryProposalsRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const gov_pb_js_1 = require("./gov_pb.js");
const pagination_pb_js_1 = require("../../base/query/v1beta1/pagination_pb.js");
/**
 * QueryProposalRequest is the request type for the Query/Proposal RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalRequest
 */
class QueryProposalRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryProposalRequest, a, b);
    }
}
exports.QueryProposalRequest = QueryProposalRequest;
QueryProposalRequest.runtime = protobuf_1.proto3;
QueryProposalRequest.typeName = "cosmos.gov.v1.QueryProposalRequest";
QueryProposalRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * QueryProposalResponse is the response type for the Query/Proposal RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalResponse
 */
class QueryProposalResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryProposalResponse, a, b);
    }
}
exports.QueryProposalResponse = QueryProposalResponse;
QueryProposalResponse.runtime = protobuf_1.proto3;
QueryProposalResponse.typeName = "cosmos.gov.v1.QueryProposalResponse";
QueryProposalResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal", kind: "message", T: gov_pb_js_1.Proposal },
]);
/**
 * QueryProposalsRequest is the request type for the Query/Proposals RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalsRequest
 */
class QueryProposalsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_status defines the status of the proposals.
         *
         * @generated from field: cosmos.gov.v1.ProposalStatus proposal_status = 1;
         */
        this.proposalStatus = gov_pb_js_1.ProposalStatus.UNSPECIFIED;
        /**
         * voter defines the voter address for the proposals.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        /**
         * depositor defines the deposit addresses from the proposals.
         *
         * @generated from field: string depositor = 3;
         */
        this.depositor = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryProposalsRequest, a, b);
    }
}
exports.QueryProposalsRequest = QueryProposalsRequest;
QueryProposalsRequest.runtime = protobuf_1.proto3;
QueryProposalsRequest.typeName = "cosmos.gov.v1.QueryProposalsRequest";
QueryProposalsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_status", kind: "enum", T: protobuf_1.proto3.getEnumType(gov_pb_js_1.ProposalStatus) },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalsResponse
 */
class QueryProposalsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposals defines all the requested governance proposals.
         *
         * @generated from field: repeated cosmos.gov.v1.Proposal proposals = 1;
         */
        this.proposals = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryProposalsResponse, a, b);
    }
}
exports.QueryProposalsResponse = QueryProposalsResponse;
QueryProposalsResponse.runtime = protobuf_1.proto3;
QueryProposalsResponse.typeName = "cosmos.gov.v1.QueryProposalsResponse";
QueryProposalsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposals", kind: "message", T: gov_pb_js_1.Proposal, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryVoteRequest is the request type for the Query/Vote RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVoteRequest
 */
class QueryVoteRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * voter defines the voter address for the proposals.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVoteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVoteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVoteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryVoteRequest, a, b);
    }
}
exports.QueryVoteRequest = QueryVoteRequest;
QueryVoteRequest.runtime = protobuf_1.proto3;
QueryVoteRequest.typeName = "cosmos.gov.v1.QueryVoteRequest";
QueryVoteRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryVoteResponse is the response type for the Query/Vote RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVoteResponse
 */
class QueryVoteResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVoteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVoteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVoteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryVoteResponse, a, b);
    }
}
exports.QueryVoteResponse = QueryVoteResponse;
QueryVoteResponse.runtime = protobuf_1.proto3;
QueryVoteResponse.typeName = "cosmos.gov.v1.QueryVoteResponse";
QueryVoteResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "vote", kind: "message", T: gov_pb_js_1.Vote },
]);
/**
 * QueryVotesRequest is the request type for the Query/Votes RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVotesRequest
 */
class QueryVotesRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryVotesRequest, a, b);
    }
}
exports.QueryVotesRequest = QueryVotesRequest;
QueryVotesRequest.runtime = protobuf_1.proto3;
QueryVotesRequest.typeName = "cosmos.gov.v1.QueryVotesRequest";
QueryVotesRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryVotesResponse is the response type for the Query/Votes RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVotesResponse
 */
class QueryVotesResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * votes defines the queried votes.
         *
         * @generated from field: repeated cosmos.gov.v1.Vote votes = 1;
         */
        this.votes = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryVotesResponse, a, b);
    }
}
exports.QueryVotesResponse = QueryVotesResponse;
QueryVotesResponse.runtime = protobuf_1.proto3;
QueryVotesResponse.typeName = "cosmos.gov.v1.QueryVotesResponse";
QueryVotesResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "votes", kind: "message", T: gov_pb_js_1.Vote, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryParamsRequest
 */
class QueryParamsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * params_type defines which parameters to query for, can be one of "voting",
         * "tallying" or "deposit".
         *
         * @generated from field: string params_type = 1;
         */
        this.paramsType = "";
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
QueryParamsRequest.typeName = "cosmos.gov.v1.QueryParamsRequest";
QueryParamsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "params_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryParamsResponse
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
QueryParamsResponse.typeName = "cosmos.gov.v1.QueryParamsResponse";
QueryParamsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "voting_params", kind: "message", T: gov_pb_js_1.VotingParams },
    { no: 2, name: "deposit_params", kind: "message", T: gov_pb_js_1.DepositParams },
    { no: 3, name: "tally_params", kind: "message", T: gov_pb_js_1.TallyParams },
    { no: 4, name: "params", kind: "message", T: gov_pb_js_1.Params },
]);
/**
 * QueryDepositRequest is the request type for the Query/Deposit RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositRequest
 */
class QueryDepositRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * depositor defines the deposit addresses from the proposals.
         *
         * @generated from field: string depositor = 2;
         */
        this.depositor = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDepositRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDepositRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDepositRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryDepositRequest, a, b);
    }
}
exports.QueryDepositRequest = QueryDepositRequest;
QueryDepositRequest.runtime = protobuf_1.proto3;
QueryDepositRequest.typeName = "cosmos.gov.v1.QueryDepositRequest";
QueryDepositRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryDepositResponse is the response type for the Query/Deposit RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositResponse
 */
class QueryDepositResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDepositResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDepositResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDepositResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryDepositResponse, a, b);
    }
}
exports.QueryDepositResponse = QueryDepositResponse;
QueryDepositResponse.runtime = protobuf_1.proto3;
QueryDepositResponse.typeName = "cosmos.gov.v1.QueryDepositResponse";
QueryDepositResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "deposit", kind: "message", T: gov_pb_js_1.Deposit },
]);
/**
 * QueryDepositsRequest is the request type for the Query/Deposits RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositsRequest
 */
class QueryDepositsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDepositsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDepositsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDepositsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryDepositsRequest, a, b);
    }
}
exports.QueryDepositsRequest = QueryDepositsRequest;
QueryDepositsRequest.runtime = protobuf_1.proto3;
QueryDepositsRequest.typeName = "cosmos.gov.v1.QueryDepositsRequest";
QueryDepositsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositsResponse
 */
class QueryDepositsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * deposits defines the requested deposits.
         *
         * @generated from field: repeated cosmos.gov.v1.Deposit deposits = 1;
         */
        this.deposits = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDepositsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDepositsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDepositsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryDepositsResponse, a, b);
    }
}
exports.QueryDepositsResponse = QueryDepositsResponse;
QueryDepositsResponse.runtime = protobuf_1.proto3;
QueryDepositsResponse.typeName = "cosmos.gov.v1.QueryDepositsResponse";
QueryDepositsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "deposits", kind: "message", T: gov_pb_js_1.Deposit, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryTallyResultRequest is the request type for the Query/Tally RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryTallyResultRequest
 */
class QueryTallyResultRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTallyResultRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTallyResultRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTallyResultRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryTallyResultRequest, a, b);
    }
}
exports.QueryTallyResultRequest = QueryTallyResultRequest;
QueryTallyResultRequest.runtime = protobuf_1.proto3;
QueryTallyResultRequest.typeName = "cosmos.gov.v1.QueryTallyResultRequest";
QueryTallyResultRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * QueryTallyResultResponse is the response type for the Query/Tally RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryTallyResultResponse
 */
class QueryTallyResultResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTallyResultResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTallyResultResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTallyResultResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryTallyResultResponse, a, b);
    }
}
exports.QueryTallyResultResponse = QueryTallyResultResponse;
QueryTallyResultResponse.runtime = protobuf_1.proto3;
QueryTallyResultResponse.typeName = "cosmos.gov.v1.QueryTallyResultResponse";
QueryTallyResultResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tally", kind: "message", T: gov_pb_js_1.TallyResult },
]);
