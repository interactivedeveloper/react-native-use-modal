function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class Event {
  constructor(...[value]) {
    _defineProperty(this, "value", void 0);

    // @ts-ignore
    this.value = value;
  }

}
//# sourceMappingURL=event.js.map