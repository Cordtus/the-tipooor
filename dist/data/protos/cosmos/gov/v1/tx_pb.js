"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgDepositResponse = exports.MsgDeposit = exports.MsgVoteWeightedResponse = exports.MsgVoteWeighted = exports.MsgVoteResponse = exports.MsgVote = exports.MsgExecLegacyContentResponse = exports.MsgExecLegacyContent = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const coin_pb_js_1 = require("../../base/v1beta1/coin_pb.js");
const gov_pb_js_1 = require("./gov_pb.js");
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 *
 * @generated from message cosmos.gov.v1.MsgSubmitProposal
 */
class MsgSubmitProposal extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * messages are the arbitrary messages to be executed if proposal passes.
         *
         * @generated from field: repeated google.protobuf.Any messages = 1;
         */
        this.messages = [];
        /**
         * initial_deposit is the deposit value that must be paid at proposal submission.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin initial_deposit = 2;
         */
        this.initialDeposit = [];
        /**
         * proposer is the account address of the proposer.
         *
         * @generated from field: string proposer = 3;
         */
        this.proposer = "";
        /**
         * metadata is any arbitrary metadata attached to the proposal.
         *
         * @generated from field: string metadata = 4;
         */
        this.metadata = "";
        /**
         * title is the title of the proposal.
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string title = 5;
         */
        this.title = "";
        /**
         * summary is the summary of the proposal
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string summary = 6;
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
MsgSubmitProposal.typeName = "cosmos.gov.v1.MsgSubmitProposal";
MsgSubmitProposal.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: protobuf_1.Any, repeated: true },
    { no: 2, name: "initial_deposit", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 3, name: "proposer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.
 *
 * @generated from message cosmos.gov.v1.MsgSubmitProposalResponse
 */
class MsgSubmitProposalResponse extends protobuf_1.Message {
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
MsgSubmitProposalResponse.typeName = "cosmos.gov.v1.MsgSubmitProposalResponse";
MsgSubmitProposalResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 *
 * @generated from message cosmos.gov.v1.MsgExecLegacyContent
 */
class MsgExecLegacyContent extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * authority must be the gov module address.
         *
         * @generated from field: string authority = 2;
         */
        this.authority = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExecLegacyContent().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExecLegacyContent().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExecLegacyContent().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgExecLegacyContent, a, b);
    }
}
exports.MsgExecLegacyContent = MsgExecLegacyContent;
MsgExecLegacyContent.runtime = protobuf_1.proto3;
MsgExecLegacyContent.typeName = "cosmos.gov.v1.MsgExecLegacyContent";
MsgExecLegacyContent.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "content", kind: "message", T: protobuf_1.Any },
    { no: 2, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type.
 *
 * @generated from message cosmos.gov.v1.MsgExecLegacyContentResponse
 */
class MsgExecLegacyContentResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExecLegacyContentResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExecLegacyContentResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExecLegacyContentResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgExecLegacyContentResponse, a, b);
    }
}
exports.MsgExecLegacyContentResponse = MsgExecLegacyContentResponse;
MsgExecLegacyContentResponse.runtime = protobuf_1.proto3;
MsgExecLegacyContentResponse.typeName = "cosmos.gov.v1.MsgExecLegacyContentResponse";
MsgExecLegacyContentResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgVote defines a message to cast a vote.
 *
 * @generated from message cosmos.gov.v1.MsgVote
 */
class MsgVote extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * voter is the voter address for the proposal.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        /**
         * option defines the vote option.
         *
         * @generated from field: cosmos.gov.v1.VoteOption option = 3;
         */
        this.option = gov_pb_js_1.VoteOption.UNSPECIFIED;
        /**
         * metadata is any arbitrary metadata attached to the Vote.
         *
         * @generated from field: string metadata = 4;
         */
        this.metadata = "";
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
MsgVote.typeName = "cosmos.gov.v1.MsgVote";
MsgVote.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "option", kind: "enum", T: protobuf_1.proto3.getEnumType(gov_pb_js_1.VoteOption) },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgVoteResponse defines the Msg/Vote response type.
 *
 * @generated from message cosmos.gov.v1.MsgVoteResponse
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
MsgVoteResponse.typeName = "cosmos.gov.v1.MsgVoteResponse";
MsgVoteResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * @generated from message cosmos.gov.v1.MsgVoteWeighted
 */
class MsgVoteWeighted extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * voter is the voter address for the proposal.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        /**
         * options defines the weighted vote options.
         *
         * @generated from field: repeated cosmos.gov.v1.WeightedVoteOption options = 3;
         */
        this.options = [];
        /**
         * metadata is any arbitrary metadata attached to the VoteWeighted.
         *
         * @generated from field: string metadata = 4;
         */
        this.metadata = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgVoteWeighted().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgVoteWeighted().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgVoteWeighted().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgVoteWeighted, a, b);
    }
}
exports.MsgVoteWeighted = MsgVoteWeighted;
MsgVoteWeighted.runtime = protobuf_1.proto3;
MsgVoteWeighted.typeName = "cosmos.gov.v1.MsgVoteWeighted";
MsgVoteWeighted.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "options", kind: "message", T: gov_pb_js_1.WeightedVoteOption, repeated: true },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * @generated from message cosmos.gov.v1.MsgVoteWeightedResponse
 */
class MsgVoteWeightedResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgVoteWeightedResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgVoteWeightedResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgVoteWeightedResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgVoteWeightedResponse, a, b);
    }
}
exports.MsgVoteWeightedResponse = MsgVoteWeightedResponse;
MsgVoteWeightedResponse.runtime = protobuf_1.proto3;
MsgVoteWeightedResponse.typeName = "cosmos.gov.v1.MsgVoteWeightedResponse";
MsgVoteWeightedResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgDeposit defines a message to submit a deposit to an existing proposal.
 *
 * @generated from message cosmos.gov.v1.MsgDeposit
 */
class MsgDeposit extends protobuf_1.Message {
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
        /**
         * amount to be deposited by depositor.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
         */
        this.amount = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgDeposit().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDeposit().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDeposit().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgDeposit, a, b);
    }
}
exports.MsgDeposit = MsgDeposit;
MsgDeposit.runtime = protobuf_1.proto3;
MsgDeposit.typeName = "cosmos.gov.v1.MsgDeposit";
MsgDeposit.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
]);
/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 *
 * @generated from message cosmos.gov.v1.MsgDepositResponse
 */
class MsgDepositResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgDepositResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDepositResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDepositResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgDepositResponse, a, b);
    }
}
exports.MsgDepositResponse = MsgDepositResponse;
MsgDepositResponse.runtime = protobuf_1.proto3;
MsgDepositResponse.typeName = "cosmos.gov.v1.MsgDepositResponse";
MsgDepositResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.gov.v1.MsgUpdateParams
 */
class MsgUpdateParams extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateParams, a, b);
    }
}
exports.MsgUpdateParams = MsgUpdateParams;
MsgUpdateParams.runtime = protobuf_1.proto3;
MsgUpdateParams.typeName = "cosmos.gov.v1.MsgUpdateParams";
MsgUpdateParams.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: gov_pb_js_1.Params },
]);
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.gov.v1.MsgUpdateParamsResponse
 */
class MsgUpdateParamsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MsgUpdateParamsResponse, a, b);
    }
}
exports.MsgUpdateParamsResponse = MsgUpdateParamsResponse;
MsgUpdateParamsResponse.runtime = protobuf_1.proto3;
MsgUpdateParamsResponse.typeName = "cosmos.gov.v1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = protobuf_1.proto3.util.newFieldList(() => []);
