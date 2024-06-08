"use strict";
// Since: cosmos-sdk 0.43
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRevoke = exports.EventGrant = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * EventGrant is emitted on Msg/Grant
 *
 * @generated from message cosmos.authz.v1beta1.EventGrant
 */
class EventGrant extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Msg type URL for which an autorization is granted
         *
         * @generated from field: string msg_type_url = 2;
         */
        this.msgTypeUrl = "";
        /**
         * Granter account address
         *
         * @generated from field: string granter = 3;
         */
        this.granter = "";
        /**
         * Grantee account address
         *
         * @generated from field: string grantee = 4;
         */
        this.grantee = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventGrant().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventGrant().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventGrant().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventGrant, a, b);
    }
}
exports.EventGrant = EventGrant;
EventGrant.runtime = protobuf_1.proto3;
EventGrant.typeName = "cosmos.authz.v1beta1.EventGrant";
EventGrant.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EventRevoke is emitted on Msg/Revoke
 *
 * @generated from message cosmos.authz.v1beta1.EventRevoke
 */
class EventRevoke extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * Msg type URL for which an autorization is revoked
         *
         * @generated from field: string msg_type_url = 2;
         */
        this.msgTypeUrl = "";
        /**
         * Granter account address
         *
         * @generated from field: string granter = 3;
         */
        this.granter = "";
        /**
         * Grantee account address
         *
         * @generated from field: string grantee = 4;
         */
        this.grantee = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventRevoke().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventRevoke().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventRevoke().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventRevoke, a, b);
    }
}
exports.EventRevoke = EventRevoke;
EventRevoke.runtime = protobuf_1.proto3;
EventRevoke.typeName = "cosmos.authz.v1beta1.EventRevoke";
EventRevoke.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
