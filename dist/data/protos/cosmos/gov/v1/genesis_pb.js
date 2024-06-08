"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const gov_pb_js_1 = require("./gov_pb.js");
/**
 * GenesisState defines the gov module's genesis state.
 *
 * @generated from message cosmos.gov.v1.GenesisState
 */
class GenesisState extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * starting_proposal_id is the ID of the starting proposal.
         *
         * @generated from field: uint64 starting_proposal_id = 1;
         */
        this.startingProposalId = protobuf_1.protoInt64.zero;
        /**
         * deposits defines all the deposits present at genesis.
         *
         * @generated from field: repeated cosmos.gov.v1.Deposit deposits = 2;
         */
        this.deposits = [];
        /**
         * votes defines all the votes present at genesis.
         *
         * @generated from field: repeated cosmos.gov.v1.Vote votes = 3;
         */
        this.votes = [];
        /**
         * proposals defines all the proposals present at genesis.
         *
         * @generated from field: repeated cosmos.gov.v1.Proposal proposals = 4;
         */
        this.proposals = [];
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
GenesisState.typeName = "cosmos.gov.v1.GenesisState";
GenesisState.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "starting_proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "deposits", kind: "message", T: gov_pb_js_1.Deposit, repeated: true },
    { no: 3, name: "votes", kind: "message", T: gov_pb_js_1.Vote, repeated: true },
    { no: 4, name: "proposals", kind: "message", T: gov_pb_js_1.Proposal, repeated: true },
    { no: 5, name: "deposit_params", kind: "message", T: gov_pb_js_1.DepositParams },
    { no: 6, name: "voting_params", kind: "message", T: gov_pb_js_1.VotingParams },
    { no: 7, name: "tally_params", kind: "message", T: gov_pb_js_1.TallyParams },
    { no: 8, name: "params", kind: "message", T: gov_pb_js_1.Params },
]);
