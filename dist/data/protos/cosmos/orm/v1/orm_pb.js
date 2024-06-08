"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/orm/v1/orm.proto (package cosmos.orm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonDescriptor = exports.SecondaryIndexDescriptor = exports.PrimaryKeyDescriptor = exports.TableDescriptor = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * TableDescriptor describes an ORM table.
 *
 * @generated from message cosmos.orm.v1.TableDescriptor
 */
class TableDescriptor extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * index defines one or more secondary indexes.
         *
         * @generated from field: repeated cosmos.orm.v1.SecondaryIndexDescriptor index = 2;
         */
        this.index = [];
        /**
         * id is a non-zero integer ID that must be unique within the
         * tables and singletons in this file. It may be deprecated in the future when this
         * can be auto-generated.
         *
         * @generated from field: uint32 id = 3;
         */
        this.id = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TableDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TableDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TableDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TableDescriptor, a, b);
    }
}
exports.TableDescriptor = TableDescriptor;
TableDescriptor.runtime = protobuf_1.proto3;
TableDescriptor.typeName = "cosmos.orm.v1.TableDescriptor";
TableDescriptor.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "primary_key", kind: "message", T: PrimaryKeyDescriptor },
    { no: 2, name: "index", kind: "message", T: SecondaryIndexDescriptor, repeated: true },
    { no: 3, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
]);
/**
 * PrimaryKeyDescriptor describes a table primary key.
 *
 * @generated from message cosmos.orm.v1.PrimaryKeyDescriptor
 */
class PrimaryKeyDescriptor extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * fields is a comma-separated list of fields in the primary key. Spaces are
         * not allowed. Supported field types, their encodings, and any applicable constraints
         * are described below.
         *   - uint32 are encoded as 2,3,4 or 5 bytes using a compact encoding that
         *     is suitable for sorted iteration (not varint encoding). This type is
         *     well-suited for small integers.
         *   - uint64 are encoded as 2,4,6 or 9 bytes using a compact encoding that
         *     is suitable for sorted iteration (not varint encoding). This type is
         *     well-suited for small integers such as auto-incrementing sequences.
         *   - fixed32, fixed64 are encoded as big-endian fixed width bytes and support
         *   sorted iteration. These types are well-suited for encoding fixed with
         *   decimals as integers.
         *   - string's are encoded as raw bytes in terminal key segments and null-terminated
         *   in non-terminal segments. Null characters are thus forbidden in strings.
         *   string fields support sorted iteration.
         *   - bytes are encoded as raw bytes in terminal segments and length-prefixed
         *   with a 32-bit unsigned varint in non-terminal segments.
         *   - int32, sint32, int64, sint64, sfixed32, sfixed64 are encoded as fixed width bytes with
         *   an encoding that enables sorted iteration.
         *   - google.protobuf.Timestamp and google.protobuf.Duration are encoded
         *   as 12 bytes using an encoding that enables sorted iteration.
         *   - enum fields are encoded using varint encoding and do not support sorted
         *   iteration.
         *   - bool fields are encoded as a single byte 0 or 1.
         *
         * All other fields types are unsupported in keys including repeated and
         * oneof fields.
         *
         * Primary keys are prefixed by the varint encoded table id and the byte 0x0
         * plus any additional prefix specified by the schema.
         *
         * @generated from field: string fields = 1;
         */
        this.fields = "";
        /**
         * auto_increment specifies that the primary key is generated by an
         * auto-incrementing integer. If this is set to true fields must only
         * contain one field of that is of type uint64.
         *
         * @generated from field: bool auto_increment = 2;
         */
        this.autoIncrement = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PrimaryKeyDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PrimaryKeyDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PrimaryKeyDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PrimaryKeyDescriptor, a, b);
    }
}
exports.PrimaryKeyDescriptor = PrimaryKeyDescriptor;
PrimaryKeyDescriptor.runtime = protobuf_1.proto3;
PrimaryKeyDescriptor.typeName = "cosmos.orm.v1.PrimaryKeyDescriptor";
PrimaryKeyDescriptor.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "fields", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "auto_increment", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * PrimaryKeyDescriptor describes a table secondary index.
 *
 * @generated from message cosmos.orm.v1.SecondaryIndexDescriptor
 */
class SecondaryIndexDescriptor extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * fields is a comma-separated list of fields in the index. The supported
         * field types are the same as those for PrimaryKeyDescriptor.fields.
         * Index keys are prefixed by the varint encoded table id and the varint
         * encoded index id plus any additional prefix specified by the schema.
         *
         * In addition the field segments, non-unique index keys are suffixed with
         * any additional primary key fields not present in the index fields so that the
         * primary key can be reconstructed. Unique indexes instead of being suffixed
         * store the remaining primary key fields in the value..
         *
         * @generated from field: string fields = 1;
         */
        this.fields = "";
        /**
         * id is a non-zero integer ID that must be unique within the indexes for this
         * table and less than 32768. It may be deprecated in the future when this can
         * be auto-generated.
         *
         * @generated from field: uint32 id = 2;
         */
        this.id = 0;
        /**
         * unique specifies that this an unique index.
         *
         * @generated from field: bool unique = 3;
         */
        this.unique = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SecondaryIndexDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SecondaryIndexDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SecondaryIndexDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SecondaryIndexDescriptor, a, b);
    }
}
exports.SecondaryIndexDescriptor = SecondaryIndexDescriptor;
SecondaryIndexDescriptor.runtime = protobuf_1.proto3;
SecondaryIndexDescriptor.typeName = "cosmos.orm.v1.SecondaryIndexDescriptor";
SecondaryIndexDescriptor.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "fields", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "unique", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * TableDescriptor describes an ORM singleton table which has at most one instance.
 *
 * @generated from message cosmos.orm.v1.SingletonDescriptor
 */
class SingletonDescriptor extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * id is a non-zero integer ID that must be unique within the
         * tables and singletons in this file. It may be deprecated in the future when this
         * can be auto-generated.
         *
         * @generated from field: uint32 id = 1;
         */
        this.id = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SingletonDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SingletonDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SingletonDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SingletonDescriptor, a, b);
    }
}
exports.SingletonDescriptor = SingletonDescriptor;
SingletonDescriptor.runtime = protobuf_1.proto3;
SingletonDescriptor.typeName = "cosmos.orm.v1.SingletonDescriptor";
SingletonDescriptor.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
]);
