const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,

} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(() => {
            sumMultiples(87);
        }).toThrow("an Array is required");
    });
})

test("it returns the sum of any numbers which are a multiple of 3 or 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
});

test("it works with decimal numbers", () => {
    const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
    const expected = 30;
    expect(result).toBe(expected);
});

test("return 0 if there are no multiples of 3 or 5", () => {
    const result = sumMultiples([1, 7, 8, 34])
    const expected = 0;
    expect(result).toBe(expected);
});

describe("isValidDNA", () => {
    test("an error if there is no string", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");

        expect(() => {
            isValidDNA(["C", "G", "A", "T", "G"]);
        }).toThrow("a string is required");

        expect(() => {
            isValidDNA(87);
        }).toThrow("a string is required");
    });

    test("it returns true if the string has characters A, C, G, and T only", () => {
        const result = isValidDNA("ATGCTGACATGAGTC");
        const expected = true;
        expect(result).toBe(expected);
    })

    test("it returns false if the string has characters other than A, C, G, and T", () => {
        const result = isValidDNA("ATGCTHPTGXVAZGTC");
        const expected = false;
        expect(result).toBe(expected);
    });
});

describe("getComplementaryDNA", () => {
    test("it throws an error if not passed a string", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");

        expect(() => {
            getComplementaryDNA(["C", "G", "A", "T", "G"]);
        }).toThrow("a string is required");

        expect(() => {
            getComplementaryDNA(87);
        }).toThrow("a string is required");
    });

    test("it throws an error if not passed a valid DNA string", () => {
        expect(() => {
            getComplementaryDNA("ATGCTHPTGXVAZGTC");
        }).toThrow("not a valid DNA string");
    });

    test("it returns a complementary DNA to the one it was passed", () => {
        const result = getComplementaryDNA("ATGC");
        const expected = "TACG";
        expect(result).toBe(expected);
    });
});

describe("isItPrime", () => {
    test("it throws an error if not passed a number as i", () => {
        expect(() => {
            isItPrime();
        }).toThrow("i is required");

        expect(() => {
            isItPrime(["3", "7", "11", "17"]);
        }).toThrow("a number is required");

        expect(() => {
            isItPrime("87");
        }).toThrow("a number is required");
    });

    test("it returns true if passed a prime number", () => {
        const result = isItPrime(7);
        const expected = true;
        expect(result).toBe(expected);
    });

    test("it returns false if passed a number that is not a prime number", () => {
        const result = isItPrime(0);
        const expected = false;
        expect(result).toBe(expected);
    });
});

describe("createMatrix", () => {
    test("it throws an error if not passed a number as i", () => {
        expect(() => {
            createMatrix();
        }).toThrow("i is required");

        expect(() => {
            createMatrix(["3", "7", "11", "17"], "fill");
        }).toThrow("a number is required");

        expect(() => {
            createMatrix("87", "fill");
        }).toThrow("a number is required");
    });

    test("it throws an error if not passed a value for 'fill'", () => {
        expect(() => {
            createMatrix(34);
        }).toThrow("fill is required");
    });

    test("it returns a matrix of 1 * 1 when pass n=1", () => {
        const result = createMatrix(1, "blah");
        const expected = [["blah"]];
        expect(result).toEqual(expected);
    });

    test("it returns a matrix of 3 * 3 when pass n=3", () => {
        const result = createMatrix(3, "blah");
        const expected = [
            ["blah", "blah", "blah"],
            ["blah", "blah", "blah"],
            ["blah", "blah", "blah"]
        ];
        expect(result).toEqual(expected);
    });
});

describe("areWeCovered", () => {
    test("it returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });

    test("returns false if there are staff but < 3 are scheduled to work on the day provided", () => {
        const staff = [
            { name: "Thor", rota: ["Monday", "Tuesday"] },
            { name: "Hawkeye", rota: ["Monday", "Tuesday"] },
            { name: "Ironman", rota: ["Monday", "Tuesday"] },
            { name: "Spiderman", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
    });

    test("returns true if there are staff and > 3 are scheduled to work on the day provided", () => {
        const staff = [
            { name: "Thor", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
            { name: "Hawkeye", rota: ["Monday", "Tuesday"] },
            { name: "Ironman", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
            { name: "Spiderman", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
    });
});