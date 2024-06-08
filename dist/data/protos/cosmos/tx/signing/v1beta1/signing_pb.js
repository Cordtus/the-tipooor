"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/tx/signing/v1beta1/signing.proto (package cosmos.tx.signing.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureDescriptor_Data_Multi = exports.SignatureDescriptor_Data_Single = exports.SignatureDescriptor_Data = exports.SignatureDescriptor = exports.SignatureDescriptors = exports.SignMode = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const multisig_pb_js_1 = require("../../../crypto/multisig/v1beta1/multisig_pb.js");
/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 *
 * @generated from enum cosmos.tx.signing.v1beta1.SignMode
 */
var SignMode;
(function (SignMode) {
    /**
     * SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected.
     *
     * @generated from enum value: SIGN_MODE_UNSPECIFIED = 0;
     */
    SignMode[SignMode["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx.
     *
     * @generated from enum value: SIGN_MODE_DIRECT = 1;
     */
    SignMode[SignMode["DIRECT"] = 1] = "DIRECT";
    /**
     * SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT. It is currently not supported.
     *
     * @generated from enum value: SIGN_MODE_TEXTUAL = 2;
     */
    SignMode[SignMode["TEXTUAL"] = 2] = "TEXTUAL";
    /**
     * SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
     * SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
     * require signers signing over other signers' `signer_info`. It also allows
     * for adding Tips in transactions.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from enum value: SIGN_MODE_DIRECT_AUX = 3;
     */
    SignMode[SignMode["DIRECT_AUX"] = 3] = "DIRECT_AUX";
    /**
     * SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future.
     *
     * @generated from enum value: SIGN_MODE_LEGACY_AMINO_JSON = 127;
     */
    SignMode[SignMode["LEGACY_AMINO_JSON"] = 127] = "LEGACY_AMINO_JSON";
    /**
     * SIGN_MODE_EIP_191 specifies the sign mode for EIP 191 signing on the Cosmos
     * SDK. Ref: https://eips.ethereum.org/EIPS/eip-191
     *
     * Currently, SIGN_MODE_EIP_191 is registered as a SignMode enum variant,
     * but is not implemented on the SDK by default. To enable EIP-191, you need
     * to pass a custom `TxConfig` that has an implementation of
     * `SignModeHandler` for EIP-191. The SDK may decide to fully support
     * EIP-191 in the future.
     *
     * Since: cosmos-sdk 0.45.2
     *
     * @generated from enum value: SIGN_MODE_EIP_191 = 191;
     */
    SignMode[SignMode["EIP_191"] = 191] = "EIP_191";
})(SignMode || (exports.SignMode = SignMode = {}));
// Retrieve enum metadata with: proto3.getEnumType(SignMode)
protobuf_1.proto3.util.setEnumType(SignMode, "cosmos.tx.signing.v1beta1.SignMode", [
    { no: 0, name: "SIGN_MODE_UNSPECIFIED" },
    { no: 1, name: "SIGN_MODE_DIRECT" },
    { no: 2, name: "SIGN_MODE_TEXTUAL" },
    { no: 3, name: "SIGN_MODE_DIRECT_AUX" },
    { no: 127, name: "SIGN_MODE_LEGACY_AMINO_JSON" },
    { no: 191, name: "SIGN_MODE_EIP_191" },
]);
/**
 * SignatureDescriptors wraps multiple SignatureDescriptor's.
 *
 * @generated from message cosmos.tx.signing.v1beta1.SignatureDescriptors
 */
class SignatureDescriptors extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * signatures are the signature descriptors
         *
         * @generated from field: repeated cosmos.tx.signing.v1beta1.SignatureDescriptor signatures = 1;
         */
        this.signatures = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SignatureDescriptors().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SignatureDescriptors().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SignatureDescriptors().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SignatureDescriptors, a, b);
    }
}
exports.SignatureDescriptors = SignatureDescriptors;
SignatureDescriptors.runtime = protobuf_1.proto3;
SignatureDescriptors.typeName = "cosmos.tx.signing.v1beta1.SignatureDescriptors";
SignatureDescriptors.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "signatures", kind: "message", T: SignatureDescriptor, repeated: true },
]);
/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 *
 * @generated from message cosmos.tx.signing.v1beta1.SignatureDescriptor
 */
class SignatureDescriptor extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * sequence is the sequence of the account, which describes the
         * number of committed transactions signed by a given address. It is used to prevent
         * replay attacks.
         *
         * @generated from field: uint64 sequence = 3;
         */
        this.sequence = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SignatureDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SignatureDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SignatureDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SignatureDescriptor, a, b);
    }
}
exports.SignatureDescriptor = SignatureDescriptor;
SignatureDescriptor.runtime = protobuf_1.proto3;
SignatureDescriptor.typeName = "cosmos.tx.signing.v1beta1.SignatureDescriptor";
SignatureDescriptor.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "public_key", kind: "message", T: protobuf_1.Any },
    { no: 2, name: "data", kind: "message", T: SignatureDescriptor_Data },
    { no: 3, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * Data represents signature data
 *
 * @generated from message cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
 */
class SignatureDescriptor_Data extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * sum is the oneof that specifies whether this represents single or multi-signature data
         *
         * @generated from oneof cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.sum
         */
        this.sum = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SignatureDescriptor_Data().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SignatureDescriptor_Data().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SignatureDescriptor_Data().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SignatureDescriptor_Data, a, b);
    }
}
exports.SignatureDescriptor_Data = SignatureDescriptor_Data;
SignatureDescriptor_Data.runtime = protobuf_1.proto3;
SignatureDescriptor_Data.typeName = "cosmos.tx.signing.v1beta1.SignatureDescriptor.Data";
SignatureDescriptor_Data.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "single", kind: "message", T: SignatureDescriptor_Data_Single, oneof: "sum" },
    { no: 2, name: "multi", kind: "message", T: SignatureDescriptor_Data_Multi, oneof: "sum" },
]);
/**
 * Single is the signature data for a single signer
 *
 * @generated from message cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
 */
class SignatureDescriptor_Data_Single extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * mode is the signing mode of the single signer
         *
         * @generated from field: cosmos.tx.signing.v1beta1.SignMode mode = 1;
         */
        this.mode = SignMode.UNSPECIFIED;
        /**
         * signature is the raw signature bytes
         *
         * @generated from field: bytes signature = 2;
         */
        this.signature = new Uint8Array(0);
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SignatureDescriptor_Data_Single().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SignatureDescriptor_Data_Single().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SignatureDescriptor_Data_Single().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SignatureDescriptor_Data_Single, a, b);
    }
}
exports.SignatureDescriptor_Data_Single = SignatureDescriptor_Data_Single;
SignatureDescriptor_Data_Single.runtime = protobuf_1.proto3;
SignatureDescriptor_Data_Single.typeName = "cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single";
SignatureDescriptor_Data_Single.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "mode", kind: "enum", T: protobuf_1.proto3.getEnumType(SignMode) },
    { no: 2, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * Multi is the signature data for a multisig public key
 *
 * @generated from message cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
 */
class SignatureDescriptor_Data_Multi extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * signatures is the signatures of the multi-signature
         *
         * @generated from field: repeated cosmos.tx.signing.v1beta1.SignatureDescriptor.Data signatures = 2;
         */
        this.signatures = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SignatureDescriptor_Data_Multi().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SignatureDescriptor_Data_Multi().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SignatureDescriptor_Data_Multi().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SignatureDescriptor_Data_Multi, a, b);
    }
}
exports.SignatureDescriptor_Data_Multi = SignatureDescriptor_Data_Multi;
SignatureDescriptor_Data_Multi.runtime = protobuf_1.proto3;
SignatureDescriptor_Data_Multi.typeName = "cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi";
SignatureDescriptor_Data_Multi.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "bitarray", kind: "message", T: multisig_pb_js_1.CompactBitArray },
    { no: 2, name: "signatures", kind: "message", T: SignatureDescriptor_Data, repeated: true },
]);