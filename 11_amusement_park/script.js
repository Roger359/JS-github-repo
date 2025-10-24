/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */

function createVisitor(name, age, ticketId) {
	return {
		name: name,
		age: age,
		ticketId: ticketId ?? null,
	};
}

/**
 *
 * @param {Object} visitor
 * @returns {Object} visitor with ticketId set to null
 */
function revokeTicket(visitor) {
	if (visitor) {
		visitor.ticketId = null;
		return visitor;
	}
}

// **'unknown ticket id'**
//  'not sold'
// 'sold to Verena Nardi'

/**
 *
 * @param {object} tickets
 * @param {string} ticketId
 * @returns {string} status of the ticket
 */
function ticketStatus(tickets, ticketId) {
	const status = tickets[ticketId]; //
	if (status === undefined) {
		return "unknown ticket id";
	} else if (status === null) {
		return "not sold";
	} else {
		return `sold to ${status}`;
	}
}

/**
 * 
 * @param {object} tickets 
 * @param {string} ticketId 
 * @returns {string} simple status of the ticket 
 */
function simpleTicketStatus(tickets, ticketId) {
	const status = tickets[ticketId];
	return status === undefined || status === null
		? "invalid ticket !!!"
		: status;
}
/**
 * 
 * @param {object} visitor 
 * @returns {string|undefined} gtc version or undefined 
 * 
 */
function gtcVersion(visitor){
  return visitor.gtc?.version ?? undefined;
}




const visitorNew = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1',
  },
};

console.log(gtcVersion(visitorNew)); // '2.1'

module.exports = {
	createVisitor,
	revokeTicket,
	ticketStatus,
	simpleTicketStatus,
  gtcVersion
};
