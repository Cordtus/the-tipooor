"use strict";
// Since: cosmos-sdk 0.46
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record_Offline = exports.Record_Multi = exports.Record_Ledger = exports.Record_Local = exports.Record = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const hd_pb_js_1 = require("../../hd/v1/hd_pb.js");
/**
 * Record is used for representing a key in the keyring.
 *
 * @generated from message cosmos.crypto.keyring.v1.Record
 */
class Record extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * name represents a name of Record
         *
         * @generated from field: string name = 1;
         */
        this.name = "";
        /**
         * Record contains one of the following items
         *
         * @generated from oneof cosmos.crypto.keyring.v1.Record.item
         */
        this.item = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Record().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Record().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Record().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Record, a, b);
    }
}
exports.Record = Record;
Record.runtime = protobuf_1.proto3;
Record.typeName = "cosmos.crypto.keyring.v1.Record";
Record.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pub_key", kind: "message", T: protobuf_1.Any },
    { no: 3, name: "local", kind: "message", T: Record_Local, oneof: "item" },
    { no: 4, name: "ledger", kind: "message", T: Record_Ledger, oneof: "item" },
    { no: 5, name: "multi", kind: "message", T: Record_Multi, oneof: "item" },
    { no: 6, name: "offline", kind: "message", T: Record_Offline, oneof: "item" },
]);
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Local
 */
class Record_Local extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Record_Local().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Record_Local().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Record_Local().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Record_Local, a, b);
    }
}
exports.Record_Local = Record_Local;
Record_Local.runtime = protobuf_1.proto3;
Record_Local.typeName = "cosmos.crypto.keyring.v1.Record.Local";
Record_Local.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "priv_key", kind: "message", T: protobuf_1.Any },
]);
/**
 * Ledger item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Ledger
 */
class Record_Ledger extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Record_Ledger().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Record_Ledger().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Record_Ledger().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Record_Ledger, a, b);
    }
}
exports.Record_Ledger = Record_Ledger;
Record_Ledger.runtime = protobuf_1.proto3;
Record_Ledger.typeName = "cosmos.crypto.keyring.v1.Record.Ledger";
Record_Ledger.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "message", T: hd_pb_js_1.BIP44Params },
]);
/**
 * Multi item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Multi
 */
class Record_Multi extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Record_Multi().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Record_Multi().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Record_Multi().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Record_Multi, a, b);
    }
}
exports.Record_Multi = Record_Multi;
Record_Multi.runtime = protobuf_1.proto3;
Record_Multi.typeName = "cosmos.crypto.keyring.v1.Record.Multi";
Record_Multi.fields = protobuf_1.proto3.util.newFieldList(() => []);
/**
 * Offline item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Offline
 */
class Record_Offline extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Record_Offline().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Record_Offline().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Record_Offline().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Record_Offline, a, b);
    }
}
exports.Record_Offline = Record_Offline;
Record_Offline.runtime = protobuf_1.proto3;
Record_Offline.typeName = "cosmos.crypto.keyring.v1.Record.Offline";
Record_Offline.fields = protobuf_1.proto3.util.newFieldList(() => []);
