"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/bank.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.DenomUnit = exports.Supply = exports.Output = exports.Input = exports.SendEnabled = exports.Params = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const coin_pb_js_1 = require("../../base/v1beta1/coin_pb.js");
/**
 * Params defines the parameters for the bank module.
 *
 * @generated from message cosmos.bank.v1beta1.Params
 */
class Params extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Deprecated: Use of SendEnabled in params is deprecated.
         * For genesis, use the newly added send_enabled field in the genesis object.
         * Storage, lookup, and manipulation of this information is now in the keeper.
         *
         * As of cosmos-sdk 0.47, this only exists for backwards compatibility of genesis files.
         *
         * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1 [deprecated = true];
         * @deprecated
         */
        this.sendEnabled = [];
        /**
         * @generated from field: bool default_send_enabled = 2;
         */
        this.defaultSendEnabled = false;
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
Params.typeName = "cosmos.bank.v1beta1.Params";
Params.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "send_enabled", kind: "message", T: SendEnabled, repeated: true },
    { no: 2, name: "default_send_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 *
 * @generated from message cosmos.bank.v1beta1.SendEnabled
 */
class SendEnabled extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        /**
         * @generated from field: bool enabled = 2;
         */
        this.enabled = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SendEnabled().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SendEnabled().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SendEnabled().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SendEnabled, a, b);
    }
}
exports.SendEnabled = SendEnabled;
SendEnabled.runtime = protobuf_1.proto3;
SendEnabled.typeName = "cosmos.bank.v1beta1.SendEnabled";
SendEnabled.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * Input models transaction input.
 *
 * @generated from message cosmos.bank.v1beta1.Input
 */
class Input extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
         */
        this.coins = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Input().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Input().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Input().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Input, a, b);
    }
}
exports.Input = Input;
Input.runtime = protobuf_1.proto3;
Input.typeName = "cosmos.bank.v1beta1.Input";
Input.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coins", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
]);
/**
 * Output models transaction outputs.
 *
 * @generated from message cosmos.bank.v1beta1.Output
 */
class Output extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
         */
        this.coins = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Output().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Output().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Output().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Output, a, b);
    }
}
exports.Output = Output;
Output.runtime = protobuf_1.proto3;
Output.typeName = "cosmos.bank.v1beta1.Output";
Output.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "coins", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
]);
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @generated from message cosmos.bank.v1beta1.Supply
 * @deprecated
 */
class Supply extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin total = 1;
         */
        this.total = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Supply().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Supply().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Supply().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Supply, a, b);
    }
}
exports.Supply = Supply;
Supply.runtime = protobuf_1.proto3;
Supply.typeName = "cosmos.bank.v1beta1.Supply";
Supply.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "total", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
]);
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 *
 * @generated from message cosmos.bank.v1beta1.DenomUnit
 */
class DenomUnit extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * denom represents the string name of the given denom unit (e.g uatom).
         *
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        /**
         * exponent represents power of 10 exponent that one must
         * raise the base_denom to in order to equal the given DenomUnit's denom
         * 1 denom = 10^exponent base_denom
         * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
         * exponent = 6, thus: 1 atom = 10^6 uatom).
         *
         * @generated from field: uint32 exponent = 2;
         */
        this.exponent = 0;
        /**
         * aliases is a list of string aliases for the given denom
         *
         * @generated from field: repeated string aliases = 3;
         */
        this.aliases = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DenomUnit().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DenomUnit().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DenomUnit().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DenomUnit, a, b);
    }
}
exports.DenomUnit = DenomUnit;
DenomUnit.runtime = protobuf_1.proto3;
DenomUnit.typeName = "cosmos.bank.v1beta1.DenomUnit";
DenomUnit.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "exponent", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "aliases", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * Metadata represents a struct that describes
 * a basic token.
 *
 * @generated from message cosmos.bank.v1beta1.Metadata
 */
class Metadata extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string description = 1;
         */
        this.description = "";
        /**
         * denom_units represents the list of DenomUnit's for a given coin
         *
         * @generated from field: repeated cosmos.bank.v1beta1.DenomUnit denom_units = 2;
         */
        this.denomUnits = [];
        /**
         * base represents the base denom (should be the DenomUnit with exponent = 0).
         *
         * @generated from field: string base = 3;
         */
        this.base = "";
        /**
         * display indicates the suggested denom that should be
         * displayed in clients.
         *
         * @generated from field: string display = 4;
         */
        this.display = "";
        /**
         * name defines the name of the token (eg: Cosmos Atom)
         *
         * Since: cosmos-sdk 0.43
         *
         * @generated from field: string name = 5;
         */
        this.name = "";
        /**
         * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
         * be the same as the display.
         *
         * Since: cosmos-sdk 0.43
         *
         * @generated from field: string symbol = 6;
         */
        this.symbol = "";
        /**
         * URI to a document (on or off-chain) that contains additional information. Optional.
         *
         * Since: cosmos-sdk 0.46
         *
         * @generated from field: string uri = 7;
         */
        this.uri = "";
        /**
         * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
         * the document didn't change. Optional.
         *
         * Since: cosmos-sdk 0.46
         *
         * @generated from field: string uri_hash = 8;
         */
        this.uriHash = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Metadata().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Metadata().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Metadata().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Metadata, a, b);
    }
}
exports.Metadata = Metadata;
Metadata.runtime = protobuf_1.proto3;
Metadata.typeName = "cosmos.bank.v1beta1.Metadata";
Metadata.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom_units", kind: "message", T: DenomUnit, repeated: true },
    { no: 3, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "uri_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
