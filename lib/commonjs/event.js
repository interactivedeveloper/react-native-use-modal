"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Event {
  constructor(...[value]) {
    _defineProperty(this, "value", void 0);

    // @ts-ignore
    this.value = value;
  }

}

exports.Event = Event;
//# sourceMappingURL=event.js.map