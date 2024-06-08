"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgLeaveGroupResponse = exports.MsgLeaveGroup = exports.MsgExecResponse = exports.MsgExec = exports.MsgVoteResponse = exports.MsgVote = exports.MsgWithdrawProposalResponse = exports.MsgWithdrawProposal = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = exports.MsgUpdateGroupPolicyMetadataResponse = exports.MsgUpdateGroupPolicyMetadata = exports.MsgUpdateGroupPolicyDecisionPolicyResponse = exports.MsgUpdateGroupPolicyDecisionPolicy = exports.MsgCreateGroupWithPolicyResponse = exports.MsgCreateGroupWithPolicy = exports.MsgUpdateGroupPolicyAdminResponse = exports.MsgUpdateGroupPolicyAdmin = exports.MsgCreateGroupPolicyResponse = exports.MsgCreateGroupPolicy = exports.MsgUpdateGroupMetadataResponse = exports.MsgUpdateGroupMetadata = exports.MsgUpdateGroupAdminResponse = exports.MsgUpdateGroupAdmin = exports.MsgUpdateGroupMembersResponse = exports.MsgUpdateGroupMembers = exports.MsgCreateGroupResponse = exports.MsgCreateGroup = exports.Exec = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const types_pb_js_1 = require("./types_pb.js");
/**
 * Exec defines modes of execution of a proposal on creation or on new vote.
 *
 * @generated from enum cosmos.group.v1.Exec
 */
var Exec;
(function (Exec) {
    /**
     * An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     *
     * @generated from enum value: EXEC_UNSPECIFIED = 0;
     */
    Exec[Exec["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     *
     * @generated from enum value: EXEC_TRY = 1;
     */
    Exec[Exec["TRY"] = 1] = "TRY";
})(Exec || (exports.Exec = Exec = {}));
// Retrieve enum metadata with: proto3.getEnumType(Exec)
protobuf_1.proto3.util.setEnumType(Exec, "cosmos.group.v1.Exec", [
    { no: 0, name: "EXEC_UNSPECIFIED" },
    { no: 1, name: "EXEC_TRY" },
]);
/**
 * MsgCreateGroup is the Msg/CreateGroup request type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroup
 */
class MsgCreateGroup extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * members defines the group members.
         *
         * @generated from field: repeated cosmos.group.v1.MemberRequest members = 2;
         */
        this.members = [];
        /**
         * metadata is any arbitrary metadata to attached to the group.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreateGroup, a, b);
    }
}
exports.MsgCreateGroup = MsgCreateGroup;
MsgCreateGroup.runtime = protobuf_1.proto3;
MsgCreateGroup.typeName = "cosmos.group.v1.MsgCreateGroup";
MsgCreateGroup.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "members", kind: "message", T: types_pb_js_1.MemberRequest, repeated: true },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgCreateGroupResponse is the Msg/CreateGroup response type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupResponse
 */
class MsgCreateGroupResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the newly created group.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreateGroupResponse, a, b);
    }
}
exports.MsgCreateGroupResponse = MsgCreateGroupResponse;
MsgCreateGroupResponse.runtime = protobuf_1.proto3;
MsgCreateGroupResponse.typeName = "cosmos.group.v1.MsgCreateGroupResponse";
MsgCreateGroupResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMembers
 */
class MsgUpdateGroupMembers extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 2;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        /**
         * member_updates is the list of members to update,
         * set weight to 0 to remove a member.
         *
         * @generated from field: repeated cosmos.group.v1.MemberRequest member_updates = 3;
         */
        this.memberUpdates = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupMembers().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupMembers().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupMembers().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupMembers, a, b);
    }
}
exports.MsgUpdateGroupMembers = MsgUpdateGroupMembers;
MsgUpdateGroupMembers.runtime = protobuf_1.proto3;
MsgUpdateGroupMembers.typeName = "cosmos.group.v1.MsgUpdateGroupMembers";
MsgUpdateGroupMembers.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "member_updates", kind: "message", T: types_pb_js_1.MemberRequest, repeated: true },
]);
/**
 * MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMembersResponse
 */
class MsgUpdateGroupMembersResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupMembersResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupMembersResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupMembersResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupMembersResponse, a, b);
    }
}
exports.MsgUpdateGroupMembersResponse = MsgUpdateGroupMembersResponse;
MsgUpdateGroupMembersResponse.runtime = protobuf_1.proto3;
MsgUpdateGroupMembersResponse.typeName = "cosmos.group.v1.MsgUpdateGroupMembersResponse";
MsgUpdateGroupMembersResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupAdmin
 */
class MsgUpdateGroupAdmin extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the current account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 2;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        /**
         * new_admin is the group new admin account address.
         *
         * @generated from field: string new_admin = 3;
         */
        this.newAdmin = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupAdmin().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupAdmin().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupAdmin().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupAdmin, a, b);
    }
}
exports.MsgUpdateGroupAdmin = MsgUpdateGroupAdmin;
MsgUpdateGroupAdmin.runtime = protobuf_1.proto3;
MsgUpdateGroupAdmin.typeName = "cosmos.group.v1.MsgUpdateGroupAdmin";
MsgUpdateGroupAdmin.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "new_admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupAdminResponse
 */
class MsgUpdateGroupAdminResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupAdminResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupAdminResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupAdminResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupAdminResponse, a, b);
    }
}
exports.MsgUpdateGroupAdminResponse = MsgUpdateGroupAdminResponse;
MsgUpdateGroupAdminResponse.runtime = protobuf_1.proto3;
MsgUpdateGroupAdminResponse.typeName = "cosmos.group.v1.MsgUpdateGroupAdminResponse";
MsgUpdateGroupAdminResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMetadata
 */
class MsgUpdateGroupMetadata extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 2;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        /**
         * metadata is the updated group's metadata.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupMetadata().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupMetadata().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupMetadata().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupMetadata, a, b);
    }
}
exports.MsgUpdateGroupMetadata = MsgUpdateGroupMetadata;
MsgUpdateGroupMetadata.runtime = protobuf_1.proto3;
MsgUpdateGroupMetadata.typeName = "cosmos.group.v1.MsgUpdateGroupMetadata";
MsgUpdateGroupMetadata.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMetadataResponse
 */
class MsgUpdateGroupMetadataResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupMetadataResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupMetadataResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupMetadataResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupMetadataResponse, a, b);
    }
}
exports.MsgUpdateGroupMetadataResponse = MsgUpdateGroupMetadataResponse;
MsgUpdateGroupMetadataResponse.runtime = protobuf_1.proto3;
MsgUpdateGroupMetadataResponse.typeName = "cosmos.group.v1.MsgUpdateGroupMetadataResponse";
MsgUpdateGroupMetadataResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupPolicy
 */
class MsgCreateGroupPolicy extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 2;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        /**
         * metadata is any arbitrary metadata attached to the group policy.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreateGroupPolicy, a, b);
    }
}
exports.MsgCreateGroupPolicy = MsgCreateGroupPolicy;
MsgCreateGroupPolicy.runtime = protobuf_1.proto3;
MsgCreateGroupPolicy.typeName = "cosmos.group.v1.MsgCreateGroupPolicy";
MsgCreateGroupPolicy.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "decision_policy", kind: "message", T: protobuf_1.Any },
]);
/**
 * MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupPolicyResponse
 */
class MsgCreateGroupPolicyResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address is the account address of the newly created group policy.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupPolicyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupPolicyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupPolicyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreateGroupPolicyResponse, a, b);
    }
}
exports.MsgCreateGroupPolicyResponse = MsgCreateGroupPolicyResponse;
MsgCreateGroupPolicyResponse.runtime = protobuf_1.proto3;
MsgCreateGroupPolicyResponse.typeName = "cosmos.group.v1.MsgCreateGroupPolicyResponse";
MsgCreateGroupPolicyResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyAdmin
 */
class MsgUpdateGroupPolicyAdmin extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_policy_address is the account address of the group policy.
         *
         * @generated from field: string group_policy_address = 2;
         */
        this.groupPolicyAddress = "";
        /**
         * new_admin is the new group policy admin.
         *
         * @generated from field: string new_admin = 3;
         */
        this.newAdmin = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyAdmin().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyAdmin().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyAdmin().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupPolicyAdmin, a, b);
    }
}
exports.MsgUpdateGroupPolicyAdmin = MsgUpdateGroupPolicyAdmin;
MsgUpdateGroupPolicyAdmin.runtime = protobuf_1.proto3;
MsgUpdateGroupPolicyAdmin.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyAdmin";
MsgUpdateGroupPolicyAdmin.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "new_admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse
 */
class MsgUpdateGroupPolicyAdminResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyAdminResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyAdminResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyAdminResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupPolicyAdminResponse, a, b);
    }
}
exports.MsgUpdateGroupPolicyAdminResponse = MsgUpdateGroupPolicyAdminResponse;
MsgUpdateGroupPolicyAdminResponse.runtime = protobuf_1.proto3;
MsgUpdateGroupPolicyAdminResponse.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse";
MsgUpdateGroupPolicyAdminResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupWithPolicy
 */
class MsgCreateGroupWithPolicy extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group and group policy admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * members defines the group members.
         *
         * @generated from field: repeated cosmos.group.v1.MemberRequest members = 2;
         */
        this.members = [];
        /**
         * group_metadata is any arbitrary metadata attached to the group.
         *
         * @generated from field: string group_metadata = 3;
         */
        this.groupMetadata = "";
        /**
         * group_policy_metadata is any arbitrary metadata attached to the group policy.
         *
         * @generated from field: string group_policy_metadata = 4;
         */
        this.groupPolicyMetadata = "";
        /**
         * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
         * and group policy admin.
         *
         * @generated from field: bool group_policy_as_admin = 5;
         */
        this.groupPolicyAsAdmin = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupWithPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupWithPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupWithPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreateGroupWithPolicy, a, b);
    }
}
exports.MsgCreateGroupWithPolicy = MsgCreateGroupWithPolicy;
MsgCreateGroupWithPolicy.runtime = protobuf_1.proto3;
MsgCreateGroupWithPolicy.typeName = "cosmos.group.v1.MsgCreateGroupWithPolicy";
MsgCreateGroupWithPolicy.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "members", kind: "message", T: types_pb_js_1.MemberRequest, repeated: true },
    { no: 3, name: "group_metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "group_policy_metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "group_policy_as_admin", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "decision_policy", kind: "message", T: protobuf_1.Any },
]);
/**
 * MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupWithPolicyResponse
 */
class MsgCreateGroupWithPolicyResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the newly created group with policy.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        /**
         * group_policy_address is the account address of the newly created group policy.
         *
         * @generated from field: string group_policy_address = 2;
         */
        this.groupPolicyAddress = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupWithPolicyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupWithPolicyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupWithPolicyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgCreateGroupWithPolicyResponse, a, b);
    }
}
exports.MsgCreateGroupWithPolicyResponse = MsgCreateGroupWithPolicyResponse;
MsgCreateGroupWithPolicyResponse.runtime = protobuf_1.proto3;
MsgCreateGroupWithPolicyResponse.typeName = "cosmos.group.v1.MsgCreateGroupWithPolicyResponse";
MsgCreateGroupWithPolicyResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy
 */
class MsgUpdateGroupPolicyDecisionPolicy extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_policy_address is the account address of group policy.
         *
         * @generated from field: string group_policy_address = 2;
         */
        this.groupPolicyAddress = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyDecisionPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyDecisionPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyDecisionPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupPolicyDecisionPolicy, a, b);
    }
}
exports.MsgUpdateGroupPolicyDecisionPolicy = MsgUpdateGroupPolicyDecisionPolicy;
MsgUpdateGroupPolicyDecisionPolicy.runtime = protobuf_1.proto3;
MsgUpdateGroupPolicyDecisionPolicy.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy";
MsgUpdateGroupPolicyDecisionPolicy.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "decision_policy", kind: "message", T: protobuf_1.Any },
]);
/**
 * MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse
 */
class MsgUpdateGroupPolicyDecisionPolicyResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyDecisionPolicyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyDecisionPolicyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyDecisionPolicyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupPolicyDecisionPolicyResponse, a, b);
    }
}
exports.MsgUpdateGroupPolicyDecisionPolicyResponse = MsgUpdateGroupPolicyDecisionPolicyResponse;
MsgUpdateGroupPolicyDecisionPolicyResponse.runtime = protobuf_1.proto3;
MsgUpdateGroupPolicyDecisionPolicyResponse.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse";
MsgUpdateGroupPolicyDecisionPolicyResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyMetadata
 */
class MsgUpdateGroupPolicyMetadata extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_policy_address is the account address of group policy.
         *
         * @generated from field: string group_policy_address = 2;
         */
        this.groupPolicyAddress = "";
        /**
         * metadata is the group policy metadata to be updated.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyMetadata().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyMetadata().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyMetadata().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupPolicyMetadata, a, b);
    }
}
exports.MsgUpdateGroupPolicyMetadata = MsgUpdateGroupPolicyMetadata;
MsgUpdateGroupPolicyMetadata.runtime = protobuf_1.proto3;
MsgUpdateGroupPolicyMetadata.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyMetadata";
MsgUpdateGroupPolicyMetadata.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse
 */
class MsgUpdateGroupPolicyMetadataResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyMetadataResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyMetadataResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyMetadataResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateGroupPolicyMetadataResponse, a, b);
    }
}
exports.MsgUpdateGroupPolicyMetadataResponse = MsgUpdateGroupPolicyMetadataResponse;
MsgUpdateGroupPolicyMetadataResponse.runtime = protobuf_1.proto3;
MsgUpdateGroupPolicyMetadataResponse.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse";
MsgUpdateGroupPolicyMetadataResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgSubmitProposal is the Msg/SubmitProposal request type.
 *
 * @generated from message cosmos.group.v1.MsgSubmitProposal
 */
class MsgSubmitProposal extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * group_policy_address is the account address of group policy.
         *
         * @generated from field: string group_policy_address = 1;
         */
        this.groupPolicyAddress = "";
        /**
         * proposers are the account addresses of the proposers.
         * Proposers signatures will be counted as yes votes.
         *
         * @generated from field: repeated string proposers = 2;
         */
        this.proposers = [];
        /**
         * metadata is any arbitrary metadata attached to the proposal.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        /**
         * messages is a list of `sdk.Msg`s that will be executed if the proposal passes.
         *
         * @generated from field: repeated google.protobuf.Any messages = 4;
         */
        this.messages = [];
        /**
         * exec defines the mode of execution of the proposal,
         * whether it should be executed immediately on creation or not.
         * If so, proposers signatures are considered as Yes votes.
         *
         * @generated from field: cosmos.group.v1.Exec exec = 5;
         */
        this.exec = Exec.UNSPECIFIED;
        /**
         * title is the title of the proposal.
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string title = 6;
         */
        this.title = "";
        /**
         * summary is the summary of the proposal.
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string summary = 7;
         */
        this.summary = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSubmitProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSubmitProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSubmitProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgSubmitProposal, a, b);
    }
}
exports.MsgSubmitProposal = MsgSubmitProposal;
MsgSubmitProposal.runtime = protobuf_1.proto3;
MsgSubmitProposal.typeName = "cosmos.group.v1.MsgSubmitProposal";
MsgSubmitProposal.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "proposers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "messages", kind: "message", T: protobuf_1.Any, repeated: true },
    { no: 5, name: "exec", kind: "enum", T: protobuf_1.proto3.getEnumType(Exec) },
    { no: 6, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgSubmitProposalResponse is the Msg/SubmitProposal response type.
 *
 * @generated from message cosmos.group.v1.MsgSubmitProposalResponse
 */
class MsgSubmitProposalResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSubmitProposalResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSubmitProposalResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSubmitProposalResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgSubmitProposalResponse, a, b);
    }
}
exports.MsgSubmitProposalResponse = MsgSubmitProposalResponse;
MsgSubmitProposalResponse.runtime = protobuf_1.proto3;
MsgSubmitProposalResponse.typeName = "cosmos.group.v1.MsgSubmitProposalResponse";
MsgSubmitProposalResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgWithdrawProposal is the Msg/WithdrawProposal request type.
 *
 * @generated from message cosmos.group.v1.MsgWithdrawProposal
 */
class MsgWithdrawProposal extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * address is the admin of the group policy or one of the proposer of the proposal.
         *
         * @generated from field: string address = 2;
         */
        this.address = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgWithdrawProposal, a, b);
    }
}
exports.MsgWithdrawProposal = MsgWithdrawProposal;
MsgWithdrawProposal.runtime = protobuf_1.proto3;
MsgWithdrawProposal.typeName = "cosmos.group.v1.MsgWithdrawProposal";
MsgWithdrawProposal.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type.
 *
 * @generated from message cosmos.group.v1.MsgWithdrawProposalResponse
 */
class MsgWithdrawProposalResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawProposalResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawProposalResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawProposalResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgWithdrawProposalResponse, a, b);
    }
}
exports.MsgWithdrawProposalResponse = MsgWithdrawProposalResponse;
MsgWithdrawProposalResponse.runtime = protobuf_1.proto3;
MsgWithdrawProposalResponse.typeName = "cosmos.group.v1.MsgWithdrawProposalResponse";
MsgWithdrawProposalResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgVote is the Msg/Vote request type.
 *
 * @generated from message cosmos.group.v1.MsgVote
 */
class MsgVote extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * voter is the voter account address.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        /**
         * option is the voter's choice on the proposal.
         *
         * @generated from field: cosmos.group.v1.VoteOption option = 3;
         */
        this.option = types_pb_js_1.VoteOption.UNSPECIFIED;
        /**
         * metadata is any arbitrary metadata attached to the vote.
         *
         * @generated from field: string metadata = 4;
         */
        this.metadata = "";
        /**
         * exec defines whether the proposal should be executed
         * immediately after voting or not.
         *
         * @generated from field: cosmos.group.v1.Exec exec = 5;
         */
        this.exec = Exec.UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgVote().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgVote().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgVote().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgVote, a, b);
    }
}
exports.MsgVote = MsgVote;
MsgVote.runtime = protobuf_1.proto3;
MsgVote.typeName = "cosmos.group.v1.MsgVote";
MsgVote.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "option", kind: "enum", T: protobuf_1.proto3.getEnumType(types_pb_js_1.VoteOption) },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "exec", kind: "enum", T: protobuf_1.proto3.getEnumType(Exec) },
]);
/**
 * MsgVoteResponse is the Msg/Vote response type.
 *
 * @generated from message cosmos.group.v1.MsgVoteResponse
 */
class MsgVoteResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgVoteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgVoteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgVoteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgVoteResponse, a, b);
    }
}
exports.MsgVoteResponse = MsgVoteResponse;
MsgVoteResponse.runtime = protobuf_1.proto3;
MsgVoteResponse.typeName = "cosmos.group.v1.MsgVoteResponse";
MsgVoteResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgExec is the Msg/Exec request type.
 *
 * @generated from message cosmos.group.v1.MsgExec
 */
class MsgExec extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * executor is the account address used to execute the proposal.
         *
         * @generated from field: string executor = 2;
         */
        this.executor = "";
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
MsgExec.typeName = "cosmos.group.v1.MsgExec";
MsgExec.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "executor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgExecResponse is the Msg/Exec request type.
 *
 * @generated from message cosmos.group.v1.MsgExecResponse
 */
class MsgExecResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * result is the final result of the proposal execution.
         *
         * @generated from field: cosmos.group.v1.ProposalExecutorResult result = 2;
         */
        this.result = types_pb_js_1.ProposalExecutorResult.UNSPECIFIED;
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
MsgExecResponse.typeName = "cosmos.group.v1.MsgExecResponse";
MsgExecResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "result", kind: "enum", T: protobuf_1.proto3.getEnumType(types_pb_js_1.ProposalExecutorResult) },
]);
/**
 * MsgLeaveGroup is the Msg/LeaveGroup request type.
 *
 * @generated from message cosmos.group.v1.MsgLeaveGroup
 */
class MsgLeaveGroup extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address is the account address of the group member.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 2;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgLeaveGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgLeaveGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgLeaveGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgLeaveGroup, a, b);
    }
}
exports.MsgLeaveGroup = MsgLeaveGroup;
MsgLeaveGroup.runtime = protobuf_1.proto3;
MsgLeaveGroup.typeName = "cosmos.group.v1.MsgLeaveGroup";
MsgLeaveGroup.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgLeaveGroupResponse is the Msg/LeaveGroup response type.
 *
 * @generated from message cosmos.group.v1.MsgLeaveGroupResponse
 */
class MsgLeaveGroupResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgLeaveGroupResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgLeaveGroupResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgLeaveGroupResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgLeaveGroupResponse, a, b);
    }
}
exports.MsgLeaveGroupResponse = MsgLeaveGroupResponse;
MsgLeaveGroupResponse.runtime = protobuf_1.proto3;
MsgLeaveGroupResponse.typeName = "cosmos.group.v1.MsgLeaveGroupResponse";
MsgLeaveGroupResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
