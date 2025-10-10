const frontDoorResponse = require("./script").frontDoorResponse;
const frontDoorPassword = require("./script").frontDoorPassword;
const backDoorResponse = require("./script").backDoorResponse;
const backDoorPassword = require("./script").backDoorPassword;

test("Functions are defined", () => {
  expect(frontDoorResponse).toBeDefined();
  expect(frontDoorPassword).toBeDefined();
  expect(backDoorResponse).toBeDefined();
  expect(backDoorPassword).toBeDefined();
});

test("frontDoorResponse works", () => {
  expect(frontDoorResponse("Stands so high")).toBe("S");
  expect(frontDoorResponse("  Stands so high  ")).toBe("S");
  expect(frontDoorResponse("Stands so high\n")).toBe("S");
});

test("frontDoorPassword works", () => {
  expect(frontDoorPassword("  hELLO  ")).toBe("Hello");
  expect(frontDoorPassword("  HELLO  ")).toBe("Hello");
  expect(frontDoorPassword("hello")).toBe("Hello");
});

test("backDoorResponse works", () => {
  expect(backDoorResponse("Stands so high")).toBe("h");
  expect(backDoorResponse("  Stands so high  ")).toBe("h");
  expect(backDoorResponse("Stands so high\n")).toBe("h");
});

test("backDoorPassword works", () => {
  expect(backDoorPassword("yEs")).toBe("Yes, please");
  expect(backDoorPassword("YEs")).toBe("Yes, please");
  expect(backDoorPassword("YES")).toBe("Yes, please");
});
