"use strict";
// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/base/store/v1beta1/listening.proto (package cosmos.base.store.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockMetadata_DeliverTx = exports.BlockMetadata = exports.StoreKVPair = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const types_pb_js_1 = require("../../../../tendermint/abci/types_pb.js");
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.base.store.v1beta1.StoreKVPair
 */
class StoreKVPair extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * the store key for the KVStore this pair originates from
         *
         * @generated from field: string store_key = 1;
         */
        this.storeKey = "";
        /**
         * true indicates a delete operation, false indicates a set operation
         *
         * @generated from field: bool delete = 2;
         */
        this.delete = false;
        /**
         * @generated from field: bytes key = 3;
         */
        this.key = new Uint8Array(0);
        /**
         * @generated from field: bytes value = 4;
         */
        this.value = new Uint8Array(0);
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StoreKVPair().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StoreKVPair().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StoreKVPair().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(StoreKVPair, a, b);
    }
}
exports.StoreKVPair = StoreKVPair;
StoreKVPair.runtime = protobuf_1.proto3;
StoreKVPair.typeName = "cosmos.base.store.v1beta1.StoreKVPair";
StoreKVPair.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "store_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "delete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 *
 * @generated from message cosmos.base.store.v1beta1.BlockMetadata
 */
class BlockMetadata extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.store.v1beta1.BlockMetadata.DeliverTx deliver_txs = 3;
         */
        this.deliverTxs = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BlockMetadata().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BlockMetadata().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BlockMetadata().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(BlockMetadata, a, b);
    }
}
exports.BlockMetadata = BlockMetadata;
BlockMetadata.runtime = protobuf_1.proto3;
BlockMetadata.typeName = "cosmos.base.store.v1beta1.BlockMetadata";
BlockMetadata.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "request_begin_block", kind: "message", T: types_pb_js_1.RequestBeginBlock },
    { no: 2, name: "response_begin_block", kind: "message", T: types_pb_js_1.ResponseBeginBlock },
    { no: 3, name: "deliver_txs", kind: "message", T: BlockMetadata_DeliverTx, repeated: true },
    { no: 4, name: "request_end_block", kind: "message", T: types_pb_js_1.RequestEndBlock },
    { no: 5, name: "response_end_block", kind: "message", T: types_pb_js_1.ResponseEndBlock },
    { no: 6, name: "response_commit", kind: "message", T: types_pb_js_1.ResponseCommit },
]);
/**
 * DeliverTx encapulate deliver tx request and response.
 *
 * @generated from message cosmos.base.store.v1beta1.BlockMetadata.DeliverTx
 */
class BlockMetadata_DeliverTx extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BlockMetadata_DeliverTx().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BlockMetadata_DeliverTx().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BlockMetadata_DeliverTx().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(BlockMetadata_DeliverTx, a, b);
    }
}
exports.BlockMetadata_DeliverTx = BlockMetadata_DeliverTx;
BlockMetadata_DeliverTx.runtime = protobuf_1.proto3;
BlockMetadata_DeliverTx.typeName = "cosmos.base.store.v1beta1.BlockMetadata.DeliverTx";
BlockMetadata_DeliverTx.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "request", kind: "message", T: types_pb_js_1.RequestDeliverTx },
    { no: 2, name: "response", kind: "message", T: types_pb_js_1.ResponseDeliverTx },
]);
