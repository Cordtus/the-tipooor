"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/tx/v1beta1/tx.proto (package cosmos.tx.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuxSignerData = exports.Tip = exports.Fee = exports.ModeInfo_Multi = exports.ModeInfo_Single = exports.ModeInfo = exports.SignerInfo = exports.AuthInfo = exports.TxBody = exports.SignDocDirectAux = exports.SignDoc = exports.TxRaw = exports.Tx = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const signing_pb_js_1 = require("../signing/v1beta1/signing_pb.js");
const multisig_pb_js_1 = require("../../crypto/multisig/v1beta1/multisig_pb.js");
const coin_pb_js_1 = require("../../base/v1beta1/coin_pb.js");
/**
 * Tx is the standard type used for broadcasting transactions.
 *
 * @generated from message cosmos.tx.v1beta1.Tx
 */
class Tx extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * signatures is a list of signatures that matches the length and order of
         * AuthInfo's signer_infos to allow connecting signature meta information like
         * public key and signing mode by position.
         *
         * @generated from field: repeated bytes signatures = 3;
         */
        this.signatures = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Tx().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Tx().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Tx().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Tx, a, b);
    }
}
exports.Tx = Tx;
Tx.runtime = protobuf_1.proto3;
Tx.typeName = "cosmos.tx.v1beta1.Tx";
Tx.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "body", kind: "message", T: TxBody },
    { no: 2, name: "auth_info", kind: "message", T: AuthInfo },
    { no: 3, name: "signatures", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
]);
/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 *
 * @generated from message cosmos.tx.v1beta1.TxRaw
 */
class TxRaw extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * body_bytes is a protobuf serialization of a TxBody that matches the
         * representation in SignDoc.
         *
         * @generated from field: bytes body_bytes = 1;
         */
        this.bodyBytes = new Uint8Array(0);
        /**
         * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
         * representation in SignDoc.
         *
         * @generated from field: bytes auth_info_bytes = 2;
         */
        this.authInfoBytes = new Uint8Array(0);
        /**
         * signatures is a list of signatures that matches the length and order of
         * AuthInfo's signer_infos to allow connecting signature meta information like
         * public key and signing mode by position.
         *
         * @generated from field: repeated bytes signatures = 3;
         */
        this.signatures = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxRaw().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxRaw().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxRaw().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TxRaw, a, b);
    }
}
exports.TxRaw = TxRaw;
TxRaw.runtime = protobuf_1.proto3;
TxRaw.typeName = "cosmos.tx.v1beta1.TxRaw";
TxRaw.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "body_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "auth_info_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "signatures", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
]);
/**
 * SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT.
 *
 * @generated from message cosmos.tx.v1beta1.SignDoc
 */
class SignDoc extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * body_bytes is protobuf serialization of a TxBody that matches the
         * representation in TxRaw.
         *
         * @generated from field: bytes body_bytes = 1;
         */
        this.bodyBytes = new Uint8Array(0);
        /**
         * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
         * representation in TxRaw.
         *
         * @generated from field: bytes auth_info_bytes = 2;
         */
        this.authInfoBytes = new Uint8Array(0);
        /**
         * chain_id is the unique identifier of the chain this transaction targets.
         * It prevents signed transactions from being used on another chain by an
         * attacker
         *
         * @generated from field: string chain_id = 3;
         */
        this.chainId = "";
        /**
         * account_number is the account number of the account in state
         *
         * @generated from field: uint64 account_number = 4;
         */
        this.accountNumber = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SignDoc().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SignDoc().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SignDoc().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SignDoc, a, b);
    }
}
exports.SignDoc = SignDoc;
SignDoc.runtime = protobuf_1.proto3;
SignDoc.typeName = "cosmos.tx.v1beta1.SignDoc";
SignDoc.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "body_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "auth_info_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "account_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.tx.v1beta1.SignDocDirectAux
 */
class SignDocDirectAux extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * body_bytes is protobuf serialization of a TxBody that matches the
         * representation in TxRaw.
         *
         * @generated from field: bytes body_bytes = 1;
         */
        this.bodyBytes = new Uint8Array(0);
        /**
         * chain_id is the identifier of the chain this transaction targets.
         * It prevents signed transactions from being used on another chain by an
         * attacker.
         *
         * @generated from field: string chain_id = 3;
         */
        this.chainId = "";
        /**
         * account_number is the account number of the account in state.
         *
         * @generated from field: uint64 account_number = 4;
         */
        this.accountNumber = protobuf_1.protoInt64.zero;
        /**
         * sequence is the sequence number of the signing account.
         *
         * @generated from field: uint64 sequence = 5;
         */
        this.sequence = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SignDocDirectAux().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SignDocDirectAux().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SignDocDirectAux().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SignDocDirectAux, a, b);
    }
}
exports.SignDocDirectAux = SignDocDirectAux;
SignDocDirectAux.runtime = protobuf_1.proto3;
SignDocDirectAux.typeName = "cosmos.tx.v1beta1.SignDocDirectAux";
SignDocDirectAux.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "body_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "public_key", kind: "message", T: protobuf_1.Any },
    { no: 3, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "account_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "tip", kind: "message", T: Tip },
]);
/**
 * TxBody is the body of a transaction that all signers sign over.
 *
 * @generated from message cosmos.tx.v1beta1.TxBody
 */
class TxBody extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * messages is a list of messages to be executed. The required signers of
         * those messages define the number and order of elements in AuthInfo's
         * signer_infos and Tx's signatures. Each required signer address is added to
         * the list only the first time it occurs.
         * By convention, the first required signer (usually from the first message)
         * is referred to as the primary signer and pays the fee for the whole
         * transaction.
         *
         * @generated from field: repeated google.protobuf.Any messages = 1;
         */
        this.messages = [];
        /**
         * memo is any arbitrary note/comment to be added to the transaction.
         * WARNING: in clients, any publicly exposed text should not be called memo,
         * but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122).
         *
         * @generated from field: string memo = 2;
         */
        this.memo = "";
        /**
         * timeout is the block height after which this transaction will not
         * be processed by the chain
         *
         * @generated from field: uint64 timeout_height = 3;
         */
        this.timeoutHeight = protobuf_1.protoInt64.zero;
        /**
         * extension_options are arbitrary options that can be added by chains
         * when the default options are not sufficient. If any of these are present
         * and can't be handled, the transaction will be rejected
         *
         * @generated from field: repeated google.protobuf.Any extension_options = 1023;
         */
        this.extensionOptions = [];
        /**
         * extension_options are arbitrary options that can be added by chains
         * when the default options are not sufficient. If any of these are present
         * and can't be handled, they will be ignored
         *
         * @generated from field: repeated google.protobuf.Any non_critical_extension_options = 2047;
         */
        this.nonCriticalExtensionOptions = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxBody().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxBody().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxBody().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TxBody, a, b);
    }
}
exports.TxBody = TxBody;
TxBody.runtime = protobuf_1.proto3;
TxBody.typeName = "cosmos.tx.v1beta1.TxBody";
TxBody.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: protobuf_1.Any, repeated: true },
    { no: 2, name: "memo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timeout_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 1023, name: "extension_options", kind: "message", T: protobuf_1.Any, repeated: true },
    { no: 2047, name: "non_critical_extension_options", kind: "message", T: protobuf_1.Any, repeated: true },
]);
/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 *
 * @generated from message cosmos.tx.v1beta1.AuthInfo
 */
class AuthInfo extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * signer_infos defines the signing modes for the required signers. The number
         * and order of elements must match the required signers from TxBody's
         * messages. The first element is the primary signer and the one which pays
         * the fee.
         *
         * @generated from field: repeated cosmos.tx.v1beta1.SignerInfo signer_infos = 1;
         */
        this.signerInfos = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AuthInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AuthInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AuthInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AuthInfo, a, b);
    }
}
exports.AuthInfo = AuthInfo;
AuthInfo.runtime = protobuf_1.proto3;
AuthInfo.typeName = "cosmos.tx.v1beta1.AuthInfo";
AuthInfo.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "signer_infos", kind: "message", T: SignerInfo, repeated: true },
    { no: 2, name: "fee", kind: "message", T: Fee },
    { no: 3, name: "tip", kind: "message", T: Tip },
]);
/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 *
 * @generated from message cosmos.tx.v1beta1.SignerInfo
 */
class SignerInfo extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * sequence is the sequence of the account, which describes the
         * number of committed transactions signed by a given address. It is used to
         * prevent replay attacks.
         *
         * @generated from field: uint64 sequence = 3;
         */
        this.sequence = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SignerInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SignerInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SignerInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SignerInfo, a, b);
    }
}
exports.SignerInfo = SignerInfo;
SignerInfo.runtime = protobuf_1.proto3;
SignerInfo.typeName = "cosmos.tx.v1beta1.SignerInfo";
SignerInfo.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "public_key", kind: "message", T: protobuf_1.Any },
    { no: 2, name: "mode_info", kind: "message", T: ModeInfo },
    { no: 3, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * ModeInfo describes the signing mode of a single or nested multisig signer.
 *
 * @generated from message cosmos.tx.v1beta1.ModeInfo
 */
class ModeInfo extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * sum is the oneof that specifies whether this represents a single or nested
         * multisig signer
         *
         * @generated from oneof cosmos.tx.v1beta1.ModeInfo.sum
         */
        this.sum = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ModeInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ModeInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ModeInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ModeInfo, a, b);
    }
}
exports.ModeInfo = ModeInfo;
ModeInfo.runtime = protobuf_1.proto3;
ModeInfo.typeName = "cosmos.tx.v1beta1.ModeInfo";
ModeInfo.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "single", kind: "message", T: ModeInfo_Single, oneof: "sum" },
    { no: 2, name: "multi", kind: "message", T: ModeInfo_Multi, oneof: "sum" },
]);
/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 *
 * @generated from message cosmos.tx.v1beta1.ModeInfo.Single
 */
class ModeInfo_Single extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * mode is the signing mode of the single signer
         *
         * @generated from field: cosmos.tx.signing.v1beta1.SignMode mode = 1;
         */
        this.mode = signing_pb_js_1.SignMode.UNSPECIFIED;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ModeInfo_Single().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ModeInfo_Single().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ModeInfo_Single().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ModeInfo_Single, a, b);
    }
}
exports.ModeInfo_Single = ModeInfo_Single;
ModeInfo_Single.runtime = protobuf_1.proto3;
ModeInfo_Single.typeName = "cosmos.tx.v1beta1.ModeInfo.Single";
ModeInfo_Single.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "mode", kind: "enum", T: protobuf_1.proto3.getEnumType(signing_pb_js_1.SignMode) },
]);
/**
 * Multi is the mode info for a multisig public key
 *
 * @generated from message cosmos.tx.v1beta1.ModeInfo.Multi
 */
class ModeInfo_Multi extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * mode_infos is the corresponding modes of the signers of the multisig
         * which could include nested multisig public keys
         *
         * @generated from field: repeated cosmos.tx.v1beta1.ModeInfo mode_infos = 2;
         */
        this.modeInfos = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ModeInfo_Multi().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ModeInfo_Multi().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ModeInfo_Multi().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ModeInfo_Multi, a, b);
    }
}
exports.ModeInfo_Multi = ModeInfo_Multi;
ModeInfo_Multi.runtime = protobuf_1.proto3;
ModeInfo_Multi.typeName = "cosmos.tx.v1beta1.ModeInfo.Multi";
ModeInfo_Multi.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "bitarray", kind: "message", T: multisig_pb_js_1.CompactBitArray },
    { no: 2, name: "mode_infos", kind: "message", T: ModeInfo, repeated: true },
]);
/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 *
 * @generated from message cosmos.tx.v1beta1.Fee
 */
class Fee extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * amount is the amount of coins to be paid as a fee
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
         */
        this.amount = [];
        /**
         * gas_limit is the maximum gas that can be used in transaction processing
         * before an out of gas error occurs
         *
         * @generated from field: uint64 gas_limit = 2;
         */
        this.gasLimit = protobuf_1.protoInt64.zero;
        /**
         * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
         * the payer must be a tx signer (and thus have signed this field in AuthInfo).
         * setting this field does *not* change the ordering of required signers for the transaction.
         *
         * @generated from field: string payer = 3;
         */
        this.payer = "";
        /**
         * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
         * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
         * not support fee grants, this will fail
         *
         * @generated from field: string granter = 4;
         */
        this.granter = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Fee().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Fee().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Fee().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Fee, a, b);
    }
}
exports.Fee = Fee;
Fee.runtime = protobuf_1.proto3;
Fee.typeName = "cosmos.tx.v1beta1.Fee";
Fee.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 2, name: "gas_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "payer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Tip is the tip used for meta-transactions.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.tx.v1beta1.Tip
 */
class Tip extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * amount is the amount of the tip
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
         */
        this.amount = [];
        /**
         * tipper is the address of the account paying for the tip
         *
         * @generated from field: string tipper = 2;
         */
        this.tipper = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Tip().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Tip().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Tip().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Tip, a, b);
    }
}
exports.Tip = Tip;
Tip.runtime = protobuf_1.proto3;
Tip.typeName = "cosmos.tx.v1beta1.Tip";
Tip.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: coin_pb_js_1.Coin, repeated: true },
    { no: 2, name: "tipper", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.tx.v1beta1.AuxSignerData
 */
class AuxSignerData extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * address is the bech32-encoded address of the auxiliary signer. If using
         * AuxSignerData across different chains, the bech32 prefix of the target
         * chain (where the final transaction is broadcasted) should be used.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * mode is the signing mode of the single signer.
         *
         * @generated from field: cosmos.tx.signing.v1beta1.SignMode mode = 3;
         */
        this.mode = signing_pb_js_1.SignMode.UNSPECIFIED;
        /**
         * sig is the signature of the sign doc.
         *
         * @generated from field: bytes sig = 4;
         */
        this.sig = new Uint8Array(0);
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AuxSignerData().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AuxSignerData().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AuxSignerData().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AuxSignerData, a, b);
    }
}
exports.AuxSignerData = AuxSignerData;
AuxSignerData.runtime = protobuf_1.proto3;
AuxSignerData.typeName = "cosmos.tx.v1beta1.AuxSignerData";
AuxSignerData.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sign_doc", kind: "message", T: SignDocDirectAux },
    { no: 3, name: "mode", kind: "enum", T: protobuf_1.proto3.getEnumType(signing_pb_js_1.SignMode) },
    { no: 4, name: "sig", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
