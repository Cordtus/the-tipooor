"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/tx/config/v1/config.proto (package cosmos.tx.config.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * Config is the config object of the x/auth/tx package.
 *
 * @generated from message cosmos.tx.config.v1.Config
 */
class Config extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * skip_ante_handler defines whether the ante handler registration should be skipped in case an app wants to override
         * this functionality.
         *
         * @generated from field: bool skip_ante_handler = 1;
         */
        this.skipAnteHandler = false;
        /**
         * skip_post_handler defines whether the post handler registration should be skipped in case an app wants to override
         * this functionality.
         *
         * @generated from field: bool skip_post_handler = 2;
         */
        this.skipPostHandler = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Config().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Config().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Config().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Config, a, b);
    }
}
exports.Config = Config;
Config.runtime = protobuf_1.proto3;
Config.typeName = "cosmos.tx.config.v1.Config";
Config.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "skip_ante_handler", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "skip_post_handler", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
