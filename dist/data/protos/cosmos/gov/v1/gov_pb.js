"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.TallyParams = exports.VotingParams = exports.DepositParams = exports.Vote = exports.TallyResult = exports.Proposal = exports.Deposit = exports.WeightedVoteOption = exports.ProposalStatus = exports.VoteOption = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const coin_pb_js_1 = require("../../base/v1beta1/coin_pb.js");
/**
 * VoteOption enumerates the valid vote options for a given governance proposal.
 *
 * @generated from enum cosmos.gov.v1.VoteOption
 */
var VoteOption;
(function (VoteOption) {
    /**
     * VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
     *
     * @generated from enum value: VOTE_OPTION_UNSPECIFIED = 0;
     */
    VoteOption[VoteOption["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * VOTE_OPTION_YES defines a yes vote option.
     *
     * @generated from enum value: VOTE_OPTION_YES = 1;
     */
    VoteOption[VoteOption["YES"] = 1] = "YES";
    /**
     * VOTE_OPTION_ABSTAIN defines an abstain vote option.
     *
     * @generated from enum value: VOTE_OPTION_ABSTAIN = 2;
     */
    VoteOption[VoteOption["ABSTAIN"] = 2] = "ABSTAIN";
    /**
     * VOTE_OPTION_NO defines a no vote option.
     *
     * @generated from enum value: VOTE_OPTION_NO = 3;
     */
    VoteOption[VoteOption["NO"] = 3] = "NO";
    /**
     * VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
     *
     * @generated from enum value: VOTE_OPTION_NO_WITH_VETO = 4;
     */
    VoteOption[VoteOption["NO_WITH_VETO"] = 4] = "NO_WITH_VETO";
})(VoteOption || (exports.VoteOption = VoteOption = {}));
// Retrieve enum metadata with: proto3.getEnumType(VoteOption)
protobuf_1.proto3.util.setEnumType(VoteOption, "cosmos.gov.v1.VoteOption", [
    { no: 0, name: "VOTE_OPTION_UNSPECIFIED" },
    { no: 1, name: "VOTE_OPTION_YES" },
    { no: 2, name: "VOTE_OPTION_ABSTAIN" },
    { no: 3, name: "VOTE_OPTION_NO" },
    { no: 4, name: "VOTE_OPTION_NO_WITH_VETO" },
]);
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 *
 * @generated from enum cosmos.gov.v1.ProposalStatus
 */
var ProposalStatus;
(function (ProposalStatus) {
    /**
     * PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status.
     *
     * @generated from enum value: PROPOSAL_STATUS_UNSPECIFIED = 0;
     */
    ProposalStatus[ProposalStatus["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     *
     * @generated from enum value: PROPOSAL_STATUS_DEPOSIT_PERIOD = 1;
     */
    ProposalStatus[ProposalStatus["DEPOSIT_PERIOD"] = 1] = "DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     *
     * @generated from enum value: PROPOSAL_STATUS_VOTING_PERIOD = 2;
     */
    ProposalStatus[ProposalStatus["VOTING_PERIOD"] = 2] = "VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     *
     * @generated from enum value: PROPOSAL_STATUS_PASSED = 3;
     */
    ProposalStatus[ProposalStatus["PASSED"] = 3] = "PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     *
     * @generated from enum value: PROPOSAL_STATUS_REJECTED = 4;
     */
    ProposalStatus[ProposalStatus["REJECTED"] = 4] = "REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     *
     * @generated from enum value: PROPOSAL_STATUS_FAILED = 5;
     */
    ProposalStatus[ProposalStatus["FAILED"] = 5] = "FAILED";
})(ProposalStatus || (exports.ProposalStatus = ProposalStatus = {}));
// Retrieve enum metadata with: proto3.getEnumType(ProposalStatus)
protobuf_1.proto3.util.setEnumType(ProposalStatus, "cosmos.gov.v1.ProposalStatus", [
    { no: 0, name: "PROPOSAL_STATUS_UNSPECIFIED" },
    { no: 1, name: "PROPOSAL_STATUS_DEPOSIT_PERIOD" },
    { no: 2, name: "PROPOSAL_STATUS_VOTING_PERIOD" },
    { no: 3, name: "PROPOSAL_STATUS_PASSED" },
    { no: 4, name: "PROPOSAL_STATUS_REJECTED" },
    { no: 5, name: "PROPOSAL_STATUS_FAILED" },
]);
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * @generated from message cosmos.gov.v1.WeightedVoteOption
 */
class WeightedVoteOption extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * option defines the valid vote options, it must not contain duplicate vote options.
         *
         * @generated from field: cosmos.gov.v1.VoteOption option = 1;
         */
        this.option = VoteOption.UNSPECIFIED;
        /**
         * weight is the vote weight associated with the vote option.
         *
         * @generated from field: string weight = 2;
         */
        this.weight = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new WeightedVoteOption().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new WeightedVoteOption().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new WeightedVoteOption().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(WeightedVoteOption, a, b);
    }
}
exports.WeightedVoteOption = WeightedVoteOption;
WeightedVoteOption.runtime = protobuf_1.proto3;
WeightedVoteOption.typeName = "cosmos.gov.v1.WeightedVoteOption";
WeightedVoteOption.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "option", kind: "enum", T: protobuf_1.proto3.getEnumType(VoteOption) },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 *
 * @generated from message cosmos.gov.v1.Deposit
 */
class Deposit extends protobuf_1.Message {
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
        return new Deposit().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Deposit().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Deposit().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Deposit, a, b);
    }
}
exports.Deposit = Deposit;
Deposit.runtime = protobuf_1.proto3;
Deposit.typeName = "cosmos.gov.v1.Deposit";
Deposit.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
]);
/**
 * Proposal defines the core field members of a governance proposal.
 *
 * @generated from message cosmos.gov.v1.Proposal
 */
class Proposal extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * id defines the unique id of the proposal.
         *
         * @generated from field: uint64 id = 1;
         */
        this.id = protobuf_1.protoInt64.zero;
        /**
         * messages are the arbitrary messages to be executed if the proposal passes.
         *
         * @generated from field: repeated google.protobuf.Any messages = 2;
         */
        this.messages = [];
        /**
         * status defines the proposal status.
         *
         * @generated from field: cosmos.gov.v1.ProposalStatus status = 3;
         */
        this.status = ProposalStatus.UNSPECIFIED;
        /**
         * total_deposit is the total deposit on the proposal.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin total_deposit = 7;
         */
        this.totalDeposit = [];
        /**
         * metadata is any arbitrary metadata attached to the proposal.
         *
         * @generated from field: string metadata = 10;
         */
        this.metadata = "";
        /**
         * title is the title of the proposal
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string title = 11;
         */
        this.title = "";
        /**
         * summary is a short summary of the proposal
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string summary = 12;
         */
        this.summary = "";
        /**
         * Proposer is the address of the proposal sumbitter
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string proposer = 13;
         */
        this.proposer = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Proposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Proposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Proposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Proposal, a, b);
    }
}
exports.Proposal = Proposal;
Proposal.runtime = protobuf_1.proto3;
Proposal.typeName = "cosmos.gov.v1.Proposal";
Proposal.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "messages", kind: "message", T: protobuf_1.Any, repeated: true },
    { no: 3, name: "status", kind: "enum", T: protobuf_1.proto3.getEnumType(ProposalStatus) },
    { no: 4, name: "final_tally_result", kind: "message", T: TallyResult },
    { no: 5, name: "submit_time", kind: "message", T: protobuf_1.Timestamp },
    { no: 6, name: "deposit_end_time", kind: "message", T: protobuf_1.Timestamp },
    { no: 7, name: "total_deposit", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 8, name: "voting_start_time", kind: "message", T: protobuf_1.Timestamp },
    { no: 9, name: "voting_end_time", kind: "message", T: protobuf_1.Timestamp },
    { no: 10, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "proposer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * TallyResult defines a standard tally for a governance proposal.
 *
 * @generated from message cosmos.gov.v1.TallyResult
 */
class TallyResult extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * yes_count is the number of yes votes on a proposal.
         *
         * @generated from field: string yes_count = 1;
         */
        this.yesCount = "";
        /**
         * abstain_count is the number of abstain votes on a proposal.
         *
         * @generated from field: string abstain_count = 2;
         */
        this.abstainCount = "";
        /**
         * no_count is the number of no votes on a proposal.
         *
         * @generated from field: string no_count = 3;
         */
        this.noCount = "";
        /**
         * no_with_veto_count is the number of no with veto votes on a proposal.
         *
         * @generated from field: string no_with_veto_count = 4;
         */
        this.noWithVetoCount = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TallyResult().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TallyResult().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TallyResult().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TallyResult, a, b);
    }
}
exports.TallyResult = TallyResult;
TallyResult.runtime = protobuf_1.proto3;
TallyResult.typeName = "cosmos.gov.v1.TallyResult";
TallyResult.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "yes_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "abstain_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "no_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "no_with_veto_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 *
 * @generated from message cosmos.gov.v1.Vote
 */
class Vote extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protobuf_1.protoInt64.zero;
        /**
         * voter is the voter address of the proposal.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        /**
         * options is the weighted vote options.
         *
         * @generated from field: repeated cosmos.gov.v1.WeightedVoteOption options = 4;
         */
        this.options = [];
        /**
         * metadata is any  arbitrary metadata to attached to the vote.
         *
         * @generated from field: string metadata = 5;
         */
        this.metadata = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Vote().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Vote().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Vote().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Vote, a, b);
    }
}
exports.Vote = Vote;
Vote.runtime = protobuf_1.proto3;
Vote.typeName = "cosmos.gov.v1.Vote";
Vote.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "options", kind: "message", T: WeightedVoteOption, repeated: true },
    { no: 5, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * DepositParams defines the params for deposits on governance proposals.
 *
 * @generated from message cosmos.gov.v1.DepositParams
 */
class DepositParams extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Minimum deposit for a proposal to enter voting period.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposit = 1;
         */
        this.minDeposit = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DepositParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DepositParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DepositParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DepositParams, a, b);
    }
}
exports.DepositParams = DepositParams;
DepositParams.runtime = protobuf_1.proto3;
DepositParams.typeName = "cosmos.gov.v1.DepositParams";
DepositParams.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "min_deposit", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 2, name: "max_deposit_period", kind: "message", T: protobuf_1.Duration },
]);
/**
 * VotingParams defines the params for voting on governance proposals.
 *
 * @generated from message cosmos.gov.v1.VotingParams
 */
class VotingParams extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VotingParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VotingParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VotingParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(VotingParams, a, b);
    }
}
exports.VotingParams = VotingParams;
VotingParams.runtime = protobuf_1.proto3;
VotingParams.typeName = "cosmos.gov.v1.VotingParams";
VotingParams.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "voting_period", kind: "message", T: protobuf_1.Duration },
]);
/**
 * TallyParams defines the params for tallying votes on governance proposals.
 *
 * @generated from message cosmos.gov.v1.TallyParams
 */
class TallyParams extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Minimum percentage of total stake needed to vote for a result to be
         * considered valid.
         *
         * @generated from field: string quorum = 1;
         */
        this.quorum = "";
        /**
         * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
         *
         * @generated from field: string threshold = 2;
         */
        this.threshold = "";
        /**
         * Minimum value of Veto votes to Total votes ratio for proposal to be
         * vetoed. Default value: 1/3.
         *
         * @generated from field: string veto_threshold = 3;
         */
        this.vetoThreshold = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TallyParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TallyParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TallyParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TallyParams, a, b);
    }
}
exports.TallyParams = TallyParams;
TallyParams.runtime = protobuf_1.proto3;
TallyParams.typeName = "cosmos.gov.v1.TallyParams";
TallyParams.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "quorum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "veto_threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.gov.v1.Params
 */
class Params extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Minimum deposit for a proposal to enter voting period.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposit = 1;
         */
        this.minDeposit = [];
        /**
         *  Minimum percentage of total stake needed to vote for a result to be
         *  considered valid.
         *
         * @generated from field: string quorum = 4;
         */
        this.quorum = "";
        /**
         *  Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
         *
         * @generated from field: string threshold = 5;
         */
        this.threshold = "";
        /**
         *  Minimum value of Veto votes to Total votes ratio for proposal to be
         *  vetoed. Default value: 1/3.
         *
         * @generated from field: string veto_threshold = 6;
         */
        this.vetoThreshold = "";
        /**
         *  The ratio representing the proportion of the deposit value that must be paid at proposal submission.
         *
         * @generated from field: string min_initial_deposit_ratio = 7;
         */
        this.minInitialDepositRatio = "";
        /**
         * burn deposits if a proposal does not meet quorum
         *
         * @generated from field: bool burn_vote_quorum = 13;
         */
        this.burnVoteQuorum = false;
        /**
         * burn deposits if the proposal does not enter voting period
         *
         * @generated from field: bool burn_proposal_deposit_prevote = 14;
         */
        this.burnProposalDepositPrevote = false;
        /**
         * burn deposits if quorum with vote type no_veto is met
         *
         * @generated from field: bool burn_vote_veto = 15;
         */
        this.burnVoteVeto = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Params, a, b);
    }
}
exports.Params = Params;
Params.runtime = protobuf_1.proto3;
Params.typeName = "cosmos.gov.v1.Params";
Params.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "min_deposit", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 2, name: "max_deposit_period", kind: "message", T: protobuf_1.Duration },
    { no: 3, name: "voting_period", kind: "message", T: protobuf_1.Duration },
    { no: 4, name: "quorum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "veto_threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "min_initial_deposit_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "burn_vote_quorum", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "burn_proposal_deposit_prevote", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "burn_vote_veto", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
