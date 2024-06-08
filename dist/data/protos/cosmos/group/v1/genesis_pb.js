"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const types_pb_js_1 = require("./types_pb.js");
/**
 * GenesisState defines the group module's genesis state.
 *
 * @generated from message cosmos.group.v1.GenesisState
 */
class GenesisState extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * group_seq is the group table orm.Sequence,
         * it is used to get the next group ID.
         *
         * @generated from field: uint64 group_seq = 1;
         */
        this.groupSeq = protobuf_1.protoInt64.zero;
        /**
         * groups is the list of groups info.
         *
         * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 2;
         */
        this.groups = [];
        /**
         * group_members is the list of groups members.
         *
         * @generated from field: repeated cosmos.group.v1.GroupMember group_members = 3;
         */
        this.groupMembers = [];
        /**
         * group_policy_seq is the group policy table orm.Sequence,
         * it is used to generate the next group policy account address.
         *
         * @generated from field: uint64 group_policy_seq = 4;
         */
        this.groupPolicySeq = protobuf_1.protoInt64.zero;
        /**
         * group_policies is the list of group policies info.
         *
         * @generated from field: repeated cosmos.group.v1.GroupPolicyInfo group_policies = 5;
         */
        this.groupPolicies = [];
        /**
         * proposal_seq is the proposal table orm.Sequence,
         * it is used to get the next proposal ID.
         *
         * @generated from field: uint64 proposal_seq = 6;
         */
        this.proposalSeq = protobuf_1.protoInt64.zero;
        /**
         * proposals is the list of proposals.
         *
         * @generated from field: repeated cosmos.group.v1.Proposal proposals = 7;
         */
        this.proposals = [];
        /**
         * votes is the list of votes.
         *
         * @generated from field: repeated cosmos.group.v1.Vote votes = 8;
         */
        this.votes = [];
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
GenesisState.typeName = "cosmos.group.v1.GenesisState";
GenesisState.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_seq", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "groups", kind: "message", T: types_pb_js_1.GroupInfo, repeated: true },
    { no: 3, name: "group_members", kind: "message", T: types_pb_js_1.GroupMember, repeated: true },
    { no: 4, name: "group_policy_seq", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "group_policies", kind: "message", T: types_pb_js_1.GroupPolicyInfo, repeated: true },
    { no: 6, name: "proposal_seq", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "proposals", kind: "message", T: types_pb_js_1.Proposal, repeated: true },
    { no: 8, name: "votes", kind: "message", T: types_pb_js_1.Vote, repeated: true },
]);
