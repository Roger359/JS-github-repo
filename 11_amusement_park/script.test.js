const createVisitor = require("./script").createVisitor;
const revokeTicket = require("./script").revokeTicket;
const ticketStatus = require("./script").ticketStatus;
const simpleTicketStatus = require("./script").simpleTicketStatus;
const gtcVersion = require("./script").gtcVersion;

// Tests for createVisitor function
test("createVisitor function exists", () => {
	expect(typeof createVisitor).toBe("function");
	expect(createVisitor()).toBeDefined();
});

test("createVisitor returns correct object with all parameters", () => {
	const visitor = createVisitor("Alice", 30, "H32AZ123");
	expect(visitor).toEqual({
		name: "Alice",
		age: 30,
		ticketId: "H32AZ123",
	});
});
test("createVisitor returns correct object without ticketID", () => {
	const visitor = createVisitor("Bob", 25);
	expect(visitor).toEqual({
		name: "Bob",
		age: 25,
		ticketId: null,
	});
});

// Tests for revokeTicket function
describe("revokeTicket function", () => {
	test("revokeTicket function exists", () => {
		expect(typeof revokeTicket).toBe("function");
		expect(revokeTicket({})).toBeDefined();
	});

	test("removes the ticketId from the visitor", () => {
		const visitor = { name: "Roger", age: 35, ticketId: "H32AZ123" };
		revokeTicket(visitor);
		expect(visitor.ticketId).toBeNull();
	});

	test("works even if visitor has no ticketId", () => {
		const visitor = { name: "Roger", age: 35 };
		revokeTicket(visitor);
		expect(visitor.ticketId).toBeNull();
	});

	test("does nothing if visitor is undefined", () => {
		expect(() => revokeTicket(undefined)).not.toThrow();
	});
});

// Tests for ticketStatus function
describe("ticketStatus function", () => {
	const tickets = {
		H32AZ123: "John Doe",
		X12BC456: null,
		Z98XY321: "Verena Nardi",
	};

	test("ticketStatus function exists", () => {
		expect(typeof ticketStatus).toBe("function");
		expect(ticketStatus(tickets, "H32AZ123")).toBeDefined();
	});

	test('returns "unknown ticket id" for invalid ticketId', () => {
		const status = ticketStatus(tickets, "INVALID_ID");
		expect(status).toBe("unknown ticket id");
	});

	test('returns "not sold" for tickets that are not sold', () => {
		const status = ticketStatus(tickets, "X12BC456");
		expect(status).toBe("not sold");
	});

	test('returns "sold to [name]" for sold tickets', () => {
		const status = ticketStatus(tickets, "Z98XY321");
		expect(status).toBe("sold to Verena Nardi");
	});
});

//test s for simpleTicketStatus function
describe("simpleTicketStatus function", () => {
	const tickets = {
		H32AZ123: "John Doe",
		X12BC456: null,
		Z98XY321: "Verena Nardi",
	};

	test("simpleTicketStatus function exists", () => {
		expect(typeof simpleTicketStatus).toBe("function");
		expect(simpleTicketStatus(tickets, "H32AZ123")).toBeDefined();
	});

	test('returns "invalid ticket !!!" for invalid ticketId', () => {
		const status = simpleTicketStatus(tickets, "INVALID_ID");
		expect(status).toBe("invalid ticket !!!");
	});

	test("returns the name for sold tickets", () => {
		const status = simpleTicketStatus(tickets, "Z98XY321");
		expect(status).toBe("Verena Nardi");
	});
});

// Tests for gtcVersion function
describe("gtcVersion function", () => {

	test("gtcVersion function exists", () => {
		expect(typeof gtcVersion).toBe("function");
	});

  test("returns version when gtc is present", () => {
		const visitor = {
			name: "Alice",
			age: 30,
			ticketId: "H32AZ123",
			gtc: {
				version: "1.2.3",
				accepted: true
			}
		};
		expect(gtcVersion(visitor)).toBe("1.2.3");
	});

  test("returns undefined when gtc is absent", () => {
    const visitor = {
      name: "Bob",
      age: 25,
      ticketId: "X12BC456"
    };
    expect(gtcVersion(visitor)).toBeUndefined();
  });
});
