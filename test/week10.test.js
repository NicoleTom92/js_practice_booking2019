const {
    SumOfDigits,
    returnRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

//First Test//
describe("SumOfDigits", () => {
    test("an error will be thrown if a number is not passed as n", () => {
        expect(() => {
            SumOfDigits();
        }).toThrow("n required");

        expect(() => {
            SumOfDigits(["1", "9", "15", "32"]);
        }).toThrow("number required");

        expect(() => {
            SumOfDigits("57");
        }).toThrow("number required");
    });

    test("it returns the sum of all individual digits in the number", () => {
        const result = SumOfDigits(163);
        const expected = 10;
        expect(result).toBe(expected);
    });

    test("it returns n if only one digit is provided", () => {
        const result = SumOfDigits(1);
        const expected = 1;
        expect(result).toBe(expected);
    });
});

//Second Test//
describe("returnRange", () => {
    test("create a range of numbers as an array using a start, an end and a step", () => {
        expect(returnRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    })
    test("both the start and end numbers are inclusive", () => {
        expect(returnRange(7, 18, 2)).toEqual([7, 9, 11, 13, 15, 17, 18]);
    })

    test("Step is optional. Assume the step is 1 if not provided.", () => {
        expect(returnRange(7, 10)).toEqual([7, 8, 9, 10]);
    })
    test("Step is a negative number, assume the step is 1.", () => {
        expect(returnRange(7, 10, -8)).toEqual([7, 8, 9, 10]);
    })
    test("If start number is greater than end number, the values ​​will be swapped.Start takes the number of End and vice versa.", () => {
        expect(returnRange(30, 10, 5)).toEqual([10, 15, 20, 25, 30]);
    })
});

//Third Test//
describe("getScreentimeAlertList", () => {
    test("return users who have exceeded 100 minutes of screentime on given date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-04", usage: { mapMyRun: 40, whatsApp: 61, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
            {
                username: "sam_t_2000",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-05-04", usage: { mapMyRun: 40, whatsApp: 61, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234", "sam_t_2000"]);
    })
});

//Fourth Test//
describe("hexToRGB", () => {
    test("an error appears if the incorrect number of characters are shown", () => {
        expect(() => {
            hexToRGB("#FF11339");
        }).toThrow("there are too many characters");
    });
        expect(() => {
            hexToRGB();
        }).toThrow("hex String required");
    test("it returns the rgb equivalent of the hexadecimal input", () => {
        const result = hexToRGB("#FF1133");
        const expected = "rgb(255,17,51)";
        expect(result).toEqual(expected);
    });
});

//Fifth Test//
describe("find winner of game", () => {
    test("there is an error if there is no input on the board", () => {
        expect(() => {
            findWinner();
        }).toThrow("board required");
    });

    test("returns null if there is no winner, 0 if player 0 wins, returns x if player x wins the game", () => {
        const board = [
            ["X", "0", null],
            ["X", "X", "X"],
            ["X", null, "0"]
        ];
        expect(findWinner(board)).toEqual("X");

        const board1 = [
            ["X", "0", null],
            [null, "0", "X"],
            ["X", "0", "0"]
        ];
        expect(findWinner(board1)).toEqual("0");

        const board2 = [
            ["X", "0", null],
            [null, null, "X"],
            ["X", "0", "0"]
        ];
        expect(findWinner(board2)).toEqual(null);
    });
})