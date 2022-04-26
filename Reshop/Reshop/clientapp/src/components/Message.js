"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProps = void 0;
var React = require("react");
var MessageProps = /** @class */ (function () {
    function MessageProps() {
    }
    return MessageProps;
}());
exports.MessageProps = MessageProps;
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    /**
     *
     */
    function Message(props) {
        return _super.call(this, props) || this;
    }
    Message.prototype.render = function () {
        return React.createElement("div", null, "Sklep internetowy");
    };
    return Message;
}(React.Component));
exports.default = Message;
//# sourceMappingURL=Message.js.map