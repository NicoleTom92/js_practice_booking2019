const {
    sumDigits,
    createRange,
    hexToRGB, 
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("it throws an error if not passed a number as n", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");

        expect(() => {
            sumDigits(["3", "7", "11", "17"]);
        }).toThrow("a number is required");

        expect(() => {
            sumDigits("87");
        }).toThrow("a number is required");
    });
    
    test("it returns the sum of all individual digits in the number", () => {
        const result = sumDigits(163);
        const expected = 10;
        expect(result).toBe(expected);
    });

    test("it returns n if only one digit is provided", () => {
        const result = sumDigits(1);
        const expected = 1;
        expect(result).toBe(expected);
    });
});

describe("createRange", () => {
    test("it throws an error if not passed numbers for each of the start, end and step arguments", () => {
        expect(() => {
            createRange(undefined, 5, 6);
        }).toThrow("start is required");

        expect(() => {
            createRange(5, undefined, 6);
        }).toThrow("end is required");

        expect(() => {
            createRange([16], [54], [7]);
        }).toThrow("to create a range you must input numbers");

        expect(() => {
            createRange("19", "50", "9");
        }).toThrow("to create a range you must input numbers");
    });
    
    test("it returns the range of numbers as an array. The range goes from the start number to the end number, with intervals determined by the step", () => {
        const result = createRange(5, 60, 6);
        const expected = [ 5, 11, 17, 23, 29, 35, 41, 47, 53, 59 ];
        expect(result).toEqual(expected);
    });  
});

describe("hexToRGB", () => {
    test("it throws an error if not passed an input with the correct number of characters", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required");

        expect(() => {
            hexToRGB("#FF11339");
        }).toThrow("Your input contains too many characters!");
    });
    
    test("it returns the rgb equivalent of the hexadecimal input", () => {
        const result = hexToRGB("#FF1133");
        const expected = "rgb(255,17,51)";
        expect(result).toEqual(expected);
    });
});

describe.only("findWinner", () => {
    test("it throws an error if not passed an input for board", () => {
        expect(() => {
            findWinner();
        }).toThrow("board is required");
    });

    test("it returns X if player X has won, 0 if the player 0 has won, and null if there is currently no winner", () => {
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