"use strict";
// Since: cosmos-sdk 0.43
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivKey = exports.PubKey = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * PubKey defines a secp256r1 ECDSA public key.
 *
 * @generated from message cosmos.crypto.secp256r1.PubKey
 */
class PubKey extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Point on secp256r1 curve in a compressed representation as specified in section
         * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
         *
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
PubKey.typeName = "cosmos.crypto.secp256r1.PubKey";
PubKey.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * PrivKey defines a secp256r1 ECDSA private key.
 *
 * @generated from message cosmos.crypto.secp256r1.PrivKey
 */
class PrivKey extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * secret number serialized using big-endian encoding
         *
         * @generated from field: bytes secret = 1;
         */
        this.secret = new Uint8Array(0);
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
PrivKey.typeName = "cosmos.crypto.secp256r1.PrivKey";
PrivKey.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "secret", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
