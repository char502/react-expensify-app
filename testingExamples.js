const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
  const result = add(3, 4);
  // The below is an assertion
  // if (result !== 7) {
  //      throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`)
  expect(result).toBe(7);
  // }
});

test("should return a greeting with the person's name", () => {
  const greeting = generateGreeting("Char");

  expect(greeting).toBe("Hello Char!");
  // }
});

test("should return a greeting for no name", () => {
  const greeting = generateGreeting();

  expect(greeting).toBe("Hello Anonymous!");
  // }
});
