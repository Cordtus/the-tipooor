"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/crypto/ed25519/keys.proto (package cosmos.crypto.ed25519, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivKey = exports.PubKey = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 *
 * @generated from message cosmos.crypto.ed25519.PubKey
 */
class PubKey extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes key = 1;
         */
        this.key = new Uint8Array(0);
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PubKey().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PubKey().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PubKey().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PubKey, a, b);
    }
}
exports.PubKey = PubKey;
PubKey.runtime = protobuf_1.proto3;
PubKey.typeName = "cosmos.crypto.ed25519.PubKey";
PubKey.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * Deprecated: PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 *
 * @generated from message cosmos.crypto.ed25519.PrivKey
 */
class PrivKey extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes key = 1;
         */
        this.key = new Uint8Array(0);
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PrivKey().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PrivKey().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PrivKey().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PrivKey, a, b);
    }
}
exports.PrivKey = PrivKey;
PrivKey.runtime = protobuf_1.proto3;
PrivKey.typeName = "cosmos.crypto.ed25519.PrivKey";
PrivKey.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
