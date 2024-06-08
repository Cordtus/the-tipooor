"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.BIP44Params = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * BIP44Params is used as path field in ledger item in Record.
 *
 * @generated from message cosmos.crypto.hd.v1.BIP44Params
 */
class BIP44Params extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation
         *
         * @generated from field: uint32 purpose = 1;
         */
        this.purpose = 0;
        /**
         * coin_type is a constant that improves privacy
         *
         * @generated from field: uint32 coin_type = 2;
         */
        this.coinType = 0;
        /**
         * account splits the key space into independent user identities
         *
         * @generated from field: uint32 account = 3;
         */
        this.account = 0;
        /**
         * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
         * chain.
         *
         * @generated from field: bool change = 4;
         */
        this.change = false;
        /**
         * address_index is used as child index in BIP32 derivation
         *
         * @generated from field: uint32 address_index = 5;
         */
        this.addressIndex = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BIP44Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BIP44Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BIP44Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(BIP44Params, a, b);
    }
}
exports.BIP44Params = BIP44Params;
BIP44Params.runtime = protobuf_1.proto3;
BIP44Params.typeName = "cosmos.crypto.hd.v1.BIP44Params";
BIP44Params.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "purpose", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "coin_type", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "account", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "change", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "address_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
]);
