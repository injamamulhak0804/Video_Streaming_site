import { sum } from "../sum"

test("Testing a calcualtion function ", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
})
