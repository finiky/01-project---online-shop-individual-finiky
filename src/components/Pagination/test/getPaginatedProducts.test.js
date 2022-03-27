import { getPaginatedProducts } from "../getPaginatedProducts";

const exampleProducts1 = [1, 2, 3, 4, 5];
const exampleProducts2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const exampleProducts3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("getPaginatedProducts", () => {
  it("should paginate products correctly", () => {
    const limit = 2;
    const page = 2;
    const result1 = getPaginatedProducts(exampleProducts1, limit, page);
    expect(result1).toEqual([3, 4]);
  });
});
