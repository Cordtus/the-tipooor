"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventProposalPruned = exports.EventLeaveGroup = exports.EventExec = exports.EventVote = exports.EventWithdrawProposal = exports.EventSubmitProposal = exports.EventUpdateGroupPolicy = exports.EventCreateGroupPolicy = exports.EventUpdateGroup = exports.EventCreateGroup = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const types_pb_js_1 = require("./types_pb.js");
/**
 * EventCreateGroup is an event emitted when a group is created.
 *
 * @generated from message cosmos.group.v1.EventCreateGroup
 */
class EventCreateGroup extends protobuf_1.Message {
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
        return new EventCreateGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventCreateGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventCreateGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventCreateGroup, a, b);
    }
}
exports.EventCreateGroup = EventCreateGroup;
EventCreateGroup.runtime = protobuf_1.proto3;
EventCreateGroup.typeName = "cosmos.group.v1.EventCreateGroup";
EventCreateGroup.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * EventUpdateGroup is an event emitted when a group is updated.
 *
 * @generated from message cosmos.group.v1.EventUpdateGroup
 */
class EventUpdateGroup extends protobuf_1.Message {
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
        return new EventUpdateGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventUpdateGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventUpdateGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventUpdateGroup, a, b);
    }
}
exports.EventUpdateGroup = EventUpdateGroup;
EventUpdateGroup.runtime = protobuf_1.proto3;
EventUpdateGroup.typeName = "cosmos.group.v1.EventUpdateGroup";
EventUpdateGroup.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * EventCreateGroupPolicy is an event emitted when a group policy is created.
 *
 * @generated from message cosmos.group.v1.EventCreateGroupPolicy
 */
class EventCreateGroupPolicy extends protobuf_1.Message {
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
        return new EventCreateGroupPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventCreateGroupPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventCreateGroupPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventCreateGroupPolicy, a, b);
    }
}
exports.EventCreateGroupPolicy = EventCreateGroupPolicy;
EventCreateGroupPolicy.runtime = protobuf_1.proto3;
EventCreateGroupPolicy.typeName = "cosmos.group.v1.EventCreateGroupPolicy";
EventCreateGroupPolicy.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EventUpdateGroupPolicy is an event emitted when a group policy is updated.
 *
 * @generated from message cosmos.group.v1.EventUpdateGroupPolicy
 */
class EventUpdateGroupPolicy extends protobuf_1.Message {
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
        return new EventUpdateGroupPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventUpdateGroupPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventUpdateGroupPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventUpdateGroupPolicy, a, b);
    }
}
exports.EventUpdateGroupPolicy = EventUpdateGroupPolicy;
EventUpdateGroupPolicy.runtime = protobuf_1.proto3;
EventUpdateGroupPolicy.typeName = "cosmos.group.v1.EventUpdateGroupPolicy";
EventUpdateGroupPolicy.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EventSubmitProposal is an event emitted when a proposal is created.
 *
 * @generated from message cosmos.group.v1.EventSubmitProposal
 */
class EventSubmitProposal extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventSubmitProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventSubmitProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventSubmitProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventSubmitProposal, a, b);
    }
}
exports.EventSubmitProposal = EventSubmitProposal;
EventSubmitProposal.runtime = protobuf_1.proto3;
EventSubmitProposal.typeName = "cosmos.group.v1.EventSubmitProposal";
EventSubmitProposal.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * EventWithdrawProposal is an event emitted when a proposal is withdrawn.
 *
 * @generated from message cosmos.group.v1.EventWithdrawProposal
 */
class EventWithdrawProposal extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventWithdrawProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventWithdrawProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventWithdrawProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventWithdrawProposal, a, b);
    }
}
exports.EventWithdrawProposal = EventWithdrawProposal;
EventWithdrawProposal.runtime = protobuf_1.proto3;
EventWithdrawProposal.typeName = "cosmos.group.v1.EventWithdrawProposal";
EventWithdrawProposal.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * EventVote is an event emitted when a voter votes on a proposal.
 *
 * @generated from message cosmos.group.v1.EventVote
 */
class EventVote extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventVote().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventVote().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventVote().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventVote, a, b);
    }
}
exports.EventVote = EventVote;
EventVote.runtime = protobuf_1.proto3;
EventVote.typeName = "cosmos.group.v1.EventVote";
EventVote.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * EventExec is an event emitted when a proposal is executed.
 *
 * @generated from message cosmos.group.v1.EventExec
 */
class EventExec extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * result is the proposal execution result.
         *
         * @generated from field: cosmos.group.v1.ProposalExecutorResult result = 2;
         */
        this.result = types_pb_js_1.ProposalExecutorResult.UNSPECIFIED;
        /**
         * logs contains error logs in case the execution result is FAILURE.
         *
         * @generated from field: string logs = 3;
         */
        this.logs = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventExec().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventExec().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventExec().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventExec, a, b);
    }
}
exports.EventExec = EventExec;
EventExec.runtime = protobuf_1.proto3;
EventExec.typeName = "cosmos.group.v1.EventExec";
EventExec.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "result", kind: "enum", T: protobuf_1.proto3.getEnumType(types_pb_js_1.ProposalExecutorResult) },
    { no: 3, name: "logs", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EventLeaveGroup is an event emitted when group member leaves the group.
 *
 * @generated from message cosmos.group.v1.EventLeaveGroup
 */
class EventLeaveGroup extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protobuf_1.protoInt64.zero;
        /**
         * address is the account address of the group member.
         *
         * @generated from field: string address = 2;
         */
        this.address = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventLeaveGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventLeaveGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventLeaveGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventLeaveGroup, a, b);
    }
}
exports.EventLeaveGroup = EventLeaveGroup;
EventLeaveGroup.runtime = protobuf_1.proto3;
EventLeaveGroup.typeName = "cosmos.group.v1.EventLeaveGroup";
EventLeaveGroup.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EventProposalPruned is an event emitted when a proposal is pruned.
 *
 * @generated from message cosmos.group.v1.EventProposalPruned
 */
class EventProposalPruned extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN).
         *
         * @generated from field: cosmos.group.v1.ProposalStatus status = 2;
         */
        this.status = types_pb_js_1.ProposalStatus.UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventProposalPruned().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventProposalPruned().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventProposalPruned().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventProposalPruned, a, b);
    }
}
exports.EventProposalPruned = EventProposalPruned;
EventProposalPruned.runtime = protobuf_1.proto3;
EventProposalPruned.typeName = "cosmos.group.v1.EventProposalPruned";
EventProposalPruned.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(types_pb_js_1.ProposalStatus) },
    { no: 3, name: "tally_result", kind: "message", T: types_pb_js_1.TallyResult },
]);
