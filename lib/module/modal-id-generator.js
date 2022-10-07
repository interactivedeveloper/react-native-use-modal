function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class ModalIdGenerator {
  constructor() {
    _defineProperty(this, "lastId", 1);
  }

  static getInstance() {
    if (ModalIdGenerator.INSTANCE === null) {
      ModalIdGenerator.INSTANCE = new ModalIdGenerator();
    }

    return ModalIdGenerator.INSTANCE;
  }

  generate() {
    return ++this.lastId;
  }

}

_defineProperty(ModalIdGenerator, "INSTANCE", null);
//# sourceMappingURL=modal-id-generator.js.map