export class Namespace {
    getData() {
      throw new Error("Method not implemented.");
    }

    name: String;
    // hash: String;

    constructor(name: string)
    {
        this.name = name;
        // this.hash = hash;
    }
}
