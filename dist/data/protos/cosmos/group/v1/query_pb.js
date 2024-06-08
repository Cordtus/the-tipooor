"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGroupsResponse = exports.QueryGroupsRequest = exports.QueryTallyResultResponse = exports.QueryTallyResultRequest = exports.QueryGroupsByMemberResponse = exports.QueryGroupsByMemberRequest = exports.QueryVotesByVoterResponse = exports.QueryVotesByVoterRequest = exports.QueryVotesByProposalResponse = exports.QueryVotesByProposalRequest = exports.QueryVoteByProposalVoterResponse = exports.QueryVoteByProposalVoterRequest = exports.QueryProposalsByGroupPolicyResponse = exports.QueryProposalsByGroupPolicyRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = exports.QueryGroupPoliciesByAdminResponse = exports.QueryGroupPoliciesByAdminRequest = exports.QueryGroupPoliciesByGroupResponse = exports.QueryGroupPoliciesByGroupRequest = exports.QueryGroupsByAdminResponse = exports.QueryGroupsByAdminRequest = exports.QueryGroupMembersResponse = exports.QueryGroupMembersRequest = exports.QueryGroupPolicyInfoResponse = exports.QueryGroupPolicyInfoRequest = exports.QueryGroupInfoResponse = exports.QueryGroupInfoRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const types_pb_js_1 = require("./types_pb.js");
const pagination_pb_js_1 = require("../../base/query/v1beta1/pagination_pb.js");
/**
 * QueryGroupInfoRequest is the Query/GroupInfo request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupInfoRequest
 */
class QueryGroupInfoRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupInfoRequest, a, b);
    }
}
exports.QueryGroupInfoRequest = QueryGroupInfoRequest;
QueryGroupInfoRequest.runtime = protobuf_1.proto3;
QueryGroupInfoRequest.typeName = "cosmos.group.v1.QueryGroupInfoRequest";
QueryGroupInfoRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * QueryGroupInfoResponse is the Query/GroupInfo response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupInfoResponse
 */
class QueryGroupInfoResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupInfoResponse, a, b);
    }
}
exports.QueryGroupInfoResponse = QueryGroupInfoResponse;
QueryGroupInfoResponse.runtime = protobuf_1.proto3;
QueryGroupInfoResponse.typeName = "cosmos.group.v1.QueryGroupInfoResponse";
QueryGroupInfoResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: types_pb_js_1.GroupInfo },
]);
/**
 * QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPolicyInfoRequest
 */
class QueryGroupPolicyInfoRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address is the account address of the group policy.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPolicyInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPolicyInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPolicyInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupPolicyInfoRequest, a, b);
    }
}
exports.QueryGroupPolicyInfoRequest = QueryGroupPolicyInfoRequest;
QueryGroupPolicyInfoRequest.runtime = protobuf_1.proto3;
QueryGroupPolicyInfoRequest.typeName = "cosmos.group.v1.QueryGroupPolicyInfoRequest";
QueryGroupPolicyInfoRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPolicyInfoResponse
 */
class QueryGroupPolicyInfoResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPolicyInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPolicyInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPolicyInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupPolicyInfoResponse, a, b);
    }
}
exports.QueryGroupPolicyInfoResponse = QueryGroupPolicyInfoResponse;
QueryGroupPolicyInfoResponse.runtime = protobuf_1.proto3;
QueryGroupPolicyInfoResponse.typeName = "cosmos.group.v1.QueryGroupPolicyInfoResponse";
QueryGroupPolicyInfoResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: types_pb_js_1.GroupPolicyInfo },
]);
/**
 * QueryGroupMembersRequest is the Query/GroupMembers request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupMembersRequest
 */
class QueryGroupMembersRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupMembersRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupMembersRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupMembersRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupMembersRequest, a, b);
    }
}
exports.QueryGroupMembersRequest = QueryGroupMembersRequest;
QueryGroupMembersRequest.runtime = protobuf_1.proto3;
QueryGroupMembersRequest.typeName = "cosmos.group.v1.QueryGroupMembersRequest";
QueryGroupMembersRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryGroupMembersResponse is the Query/GroupMembersResponse response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupMembersResponse
 */
class QueryGroupMembersResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * members are the members of the group with given group_id.
         *
         * @generated from field: repeated cosmos.group.v1.GroupMember members = 1;
         */
        this.members = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupMembersResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupMembersResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupMembersResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupMembersResponse, a, b);
    }
}
exports.QueryGroupMembersResponse = QueryGroupMembersResponse;
QueryGroupMembersResponse.runtime = protobuf_1.proto3;
QueryGroupMembersResponse.typeName = "cosmos.group.v1.QueryGroupMembersResponse";
QueryGroupMembersResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "members", kind: "message", T: types_pb_js_1.GroupMember, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByAdminRequest
 */
class QueryGroupsByAdminRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of a group's admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsByAdminRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsByAdminRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsByAdminRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupsByAdminRequest, a, b);
    }
}
exports.QueryGroupsByAdminRequest = QueryGroupsByAdminRequest;
QueryGroupsByAdminRequest.runtime = protobuf_1.proto3;
QueryGroupsByAdminRequest.typeName = "cosmos.group.v1.QueryGroupsByAdminRequest";
QueryGroupsByAdminRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByAdminResponse
 */
class QueryGroupsByAdminResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * groups are the groups info with the provided admin.
         *
         * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 1;
         */
        this.groups = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsByAdminResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsByAdminResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsByAdminResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupsByAdminResponse, a, b);
    }
}
exports.QueryGroupsByAdminResponse = QueryGroupsByAdminResponse;
QueryGroupsByAdminResponse.runtime = protobuf_1.proto3;
QueryGroupsByAdminResponse.typeName = "cosmos.group.v1.QueryGroupsByAdminResponse";
QueryGroupsByAdminResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "groups", kind: "message", T: types_pb_js_1.GroupInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByGroupRequest
 */
class QueryGroupPoliciesByGroupRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the group policy's group.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPoliciesByGroupRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPoliciesByGroupRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPoliciesByGroupRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupPoliciesByGroupRequest, a, b);
    }
}
exports.QueryGroupPoliciesByGroupRequest = QueryGroupPoliciesByGroupRequest;
QueryGroupPoliciesByGroupRequest.runtime = protobuf_1.proto3;
QueryGroupPoliciesByGroupRequest.typeName = "cosmos.group.v1.QueryGroupPoliciesByGroupRequest";
QueryGroupPoliciesByGroupRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByGroupResponse
 */
class QueryGroupPoliciesByGroupResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * group_policies are the group policies info associated with the provided group.
         *
         * @generated from field: repeated cosmos.group.v1.GroupPolicyInfo group_policies = 1;
         */
        this.groupPolicies = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPoliciesByGroupResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPoliciesByGroupResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPoliciesByGroupResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupPoliciesByGroupResponse, a, b);
    }
}
exports.QueryGroupPoliciesByGroupResponse = QueryGroupPoliciesByGroupResponse;
QueryGroupPoliciesByGroupResponse.runtime = protobuf_1.proto3;
QueryGroupPoliciesByGroupResponse.typeName = "cosmos.group.v1.QueryGroupPoliciesByGroupResponse";
QueryGroupPoliciesByGroupResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_policies", kind: "message", T: types_pb_js_1.GroupPolicyInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByAdminRequest
 */
class QueryGroupPoliciesByAdminRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the admin address of the group policy.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPoliciesByAdminRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPoliciesByAdminRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPoliciesByAdminRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupPoliciesByAdminRequest, a, b);
    }
}
exports.QueryGroupPoliciesByAdminRequest = QueryGroupPoliciesByAdminRequest;
QueryGroupPoliciesByAdminRequest.runtime = protobuf_1.proto3;
QueryGroupPoliciesByAdminRequest.typeName = "cosmos.group.v1.QueryGroupPoliciesByAdminRequest";
QueryGroupPoliciesByAdminRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByAdminResponse
 */
class QueryGroupPoliciesByAdminResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * group_policies are the group policies info with provided admin.
         *
         * @generated from field: repeated cosmos.group.v1.GroupPolicyInfo group_policies = 1;
         */
        this.groupPolicies = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPoliciesByAdminResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPoliciesByAdminResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPoliciesByAdminResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupPoliciesByAdminResponse, a, b);
    }
}
exports.QueryGroupPoliciesByAdminResponse = QueryGroupPoliciesByAdminResponse;
QueryGroupPoliciesByAdminResponse.runtime = protobuf_1.proto3;
QueryGroupPoliciesByAdminResponse.typeName = "cosmos.group.v1.QueryGroupPoliciesByAdminResponse";
QueryGroupPoliciesByAdminResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_policies", kind: "message", T: types_pb_js_1.GroupPolicyInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryProposalRequest is the Query/Proposal request type.
 *
 * @generated from message cosmos.group.v1.QueryProposalRequest
 */
class QueryProposalRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of a proposal.
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
QueryProposalRequest.typeName = "cosmos.group.v1.QueryProposalRequest";
QueryProposalRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * QueryProposalResponse is the Query/Proposal response type.
 *
 * @generated from message cosmos.group.v1.QueryProposalResponse
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
QueryProposalResponse.typeName = "cosmos.group.v1.QueryProposalResponse";
QueryProposalResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal", kind: "message", T: types_pb_js_1.Proposal },
]);
/**
 * QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type.
 *
 * @generated from message cosmos.group.v1.QueryProposalsByGroupPolicyRequest
 */
class QueryProposalsByGroupPolicyRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address is the account address of the group policy related to proposals.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalsByGroupPolicyRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalsByGroupPolicyRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalsByGroupPolicyRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryProposalsByGroupPolicyRequest, a, b);
    }
}
exports.QueryProposalsByGroupPolicyRequest = QueryProposalsByGroupPolicyRequest;
QueryProposalsByGroupPolicyRequest.runtime = protobuf_1.proto3;
QueryProposalsByGroupPolicyRequest.typeName = "cosmos.group.v1.QueryProposalsByGroupPolicyRequest";
QueryProposalsByGroupPolicyRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type.
 *
 * @generated from message cosmos.group.v1.QueryProposalsByGroupPolicyResponse
 */
class QueryProposalsByGroupPolicyResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposals are the proposals with given group policy.
         *
         * @generated from field: repeated cosmos.group.v1.Proposal proposals = 1;
         */
        this.proposals = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalsByGroupPolicyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalsByGroupPolicyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalsByGroupPolicyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryProposalsByGroupPolicyResponse, a, b);
    }
}
exports.QueryProposalsByGroupPolicyResponse = QueryProposalsByGroupPolicyResponse;
QueryProposalsByGroupPolicyResponse.runtime = protobuf_1.proto3;
QueryProposalsByGroupPolicyResponse.typeName = "cosmos.group.v1.QueryProposalsByGroupPolicyResponse";
QueryProposalsByGroupPolicyResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposals", kind: "message", T: types_pb_js_1.Proposal, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type.
 *
 * @generated from message cosmos.group.v1.QueryVoteByProposalVoterRequest
 */
class QueryVoteByProposalVoterRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of a proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * voter is a proposal voter account address.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVoteByProposalVoterRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVoteByProposalVoterRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVoteByProposalVoterRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryVoteByProposalVoterRequest, a, b);
    }
}
exports.QueryVoteByProposalVoterRequest = QueryVoteByProposalVoterRequest;
QueryVoteByProposalVoterRequest.runtime = protobuf_1.proto3;
QueryVoteByProposalVoterRequest.typeName = "cosmos.group.v1.QueryVoteByProposalVoterRequest";
QueryVoteByProposalVoterRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type.
 *
 * @generated from message cosmos.group.v1.QueryVoteByProposalVoterResponse
 */
class QueryVoteByProposalVoterResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVoteByProposalVoterResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVoteByProposalVoterResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVoteByProposalVoterResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryVoteByProposalVoterResponse, a, b);
    }
}
exports.QueryVoteByProposalVoterResponse = QueryVoteByProposalVoterResponse;
QueryVoteByProposalVoterResponse.runtime = protobuf_1.proto3;
QueryVoteByProposalVoterResponse.typeName = "cosmos.group.v1.QueryVoteByProposalVoterResponse";
QueryVoteByProposalVoterResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "vote", kind: "message", T: types_pb_js_1.Vote },
]);
/**
 * QueryVotesByProposalRequest is the Query/VotesByProposal request type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByProposalRequest
 */
class QueryVotesByProposalRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of a proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesByProposalRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesByProposalRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesByProposalRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryVotesByProposalRequest, a, b);
    }
}
exports.QueryVotesByProposalRequest = QueryVotesByProposalRequest;
QueryVotesByProposalRequest.runtime = protobuf_1.proto3;
QueryVotesByProposalRequest.typeName = "cosmos.group.v1.QueryVotesByProposalRequest";
QueryVotesByProposalRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryVotesByProposalResponse is the Query/VotesByProposal response type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByProposalResponse
 */
class QueryVotesByProposalResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * votes are the list of votes for given proposal_id.
         *
         * @generated from field: repeated cosmos.group.v1.Vote votes = 1;
         */
        this.votes = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesByProposalResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesByProposalResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesByProposalResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryVotesByProposalResponse, a, b);
    }
}
exports.QueryVotesByProposalResponse = QueryVotesByProposalResponse;
QueryVotesByProposalResponse.runtime = protobuf_1.proto3;
QueryVotesByProposalResponse.typeName = "cosmos.group.v1.QueryVotesByProposalResponse";
QueryVotesByProposalResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "votes", kind: "message", T: types_pb_js_1.Vote, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryVotesByVoterRequest is the Query/VotesByVoter request type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByVoterRequest
 */
class QueryVotesByVoterRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * voter is a proposal voter account address.
         *
         * @generated from field: string voter = 1;
         */
        this.voter = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesByVoterRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesByVoterRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesByVoterRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryVotesByVoterRequest, a, b);
    }
}
exports.QueryVotesByVoterRequest = QueryVotesByVoterRequest;
QueryVotesByVoterRequest.runtime = protobuf_1.proto3;
QueryVotesByVoterRequest.typeName = "cosmos.group.v1.QueryVotesByVoterRequest";
QueryVotesByVoterRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryVotesByVoterResponse is the Query/VotesByVoter response type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByVoterResponse
 */
class QueryVotesByVoterResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * votes are the list of votes by given voter.
         *
         * @generated from field: repeated cosmos.group.v1.Vote votes = 1;
         */
        this.votes = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesByVoterResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesByVoterResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesByVoterResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryVotesByVoterResponse, a, b);
    }
}
exports.QueryVotesByVoterResponse = QueryVotesByVoterResponse;
QueryVotesByVoterResponse.runtime = protobuf_1.proto3;
QueryVotesByVoterResponse.typeName = "cosmos.group.v1.QueryVotesByVoterResponse";
QueryVotesByVoterResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "votes", kind: "message", T: types_pb_js_1.Vote, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryGroupsByMemberRequest is the Query/GroupsByMember request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByMemberRequest
 */
class QueryGroupsByMemberRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address is the group member address.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsByMemberRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsByMemberRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsByMemberRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupsByMemberRequest, a, b);
    }
}
exports.QueryGroupsByMemberRequest = QueryGroupsByMemberRequest;
QueryGroupsByMemberRequest.runtime = protobuf_1.proto3;
QueryGroupsByMemberRequest.typeName = "cosmos.group.v1.QueryGroupsByMemberRequest";
QueryGroupsByMemberRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryGroupsByMemberResponse is the Query/GroupsByMember response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByMemberResponse
 */
class QueryGroupsByMemberResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * groups are the groups info with the provided group member.
         *
         * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 1;
         */
        this.groups = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsByMemberResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsByMemberResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsByMemberResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupsByMemberResponse, a, b);
    }
}
exports.QueryGroupsByMemberResponse = QueryGroupsByMemberResponse;
QueryGroupsByMemberResponse.runtime = protobuf_1.proto3;
QueryGroupsByMemberResponse.typeName = "cosmos.group.v1.QueryGroupsByMemberResponse";
QueryGroupsByMemberResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "groups", kind: "message", T: types_pb_js_1.GroupInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
/**
 * QueryTallyResultRequest is the Query/TallyResult request type.
 *
 * @generated from message cosmos.group.v1.QueryTallyResultRequest
 */
class QueryTallyResultRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique id of a proposal.
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
QueryTallyResultRequest.typeName = "cosmos.group.v1.QueryTallyResultRequest";
QueryTallyResultRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * QueryTallyResultResponse is the Query/TallyResult response type.
 *
 * @generated from message cosmos.group.v1.QueryTallyResultResponse
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
QueryTallyResultResponse.typeName = "cosmos.group.v1.QueryTallyResultResponse";
QueryTallyResultResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tally", kind: "message", T: types_pb_js_1.TallyResult },
]);
/**
 * QueryGroupsRequest is the Query/Groups request type.
 *
 * Since: cosmos-sdk 0.47.1
 *
 * @generated from message cosmos.group.v1.QueryGroupsRequest
 */
class QueryGroupsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupsRequest, a, b);
    }
}
exports.QueryGroupsRequest = QueryGroupsRequest;
QueryGroupsRequest.runtime = protobuf_1.proto3;
QueryGroupsRequest.typeName = "cosmos.group.v1.QueryGroupsRequest";
QueryGroupsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageRequest },
]);
/**
 * QueryGroupsResponse is the Query/Groups response type.
 *
 * Since: cosmos-sdk 0.47.1
 *
 * @generated from message cosmos.group.v1.QueryGroupsResponse
 */
class QueryGroupsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * `groups` is all the groups present in state.
         *
         * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 1;
         */
        this.groups = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(QueryGroupsResponse, a, b);
    }
}
exports.QueryGroupsResponse = QueryGroupsResponse;
QueryGroupsResponse.runtime = protobuf_1.proto3;
QueryGroupsResponse.typeName = "cosmos.group.v1.QueryGroupsResponse";
QueryGroupsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "groups", kind: "message", T: types_pb_js_1.GroupInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: pagination_pb_js_1.PageResponse },
]);
