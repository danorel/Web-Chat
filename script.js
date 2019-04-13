let flight = {
    flight_number: "BC1231f3",
    able_tickets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    airplane: {
        "name": "Dream",
        company: "UA",
        stuff: {
            captains: ["John Kersey", "Sally Obrick"],
            cook: "Jeany Green",
        }
    },
    from: {
        country: "Ukraine",
        city: "Kyiv",
        airport: "Boryspil Airport",
        arrival: {
            date: "12:10:00"
        }
    },
    destination: {
        country: "USA",
        city: "New York",
        airport: "New York State Airport",
        arrival: {
            date: "21:10:00"
        }
    }
};

let ticket_info = ["flight_number", ];

/*
    Function which stands for booking the ticket in the current flight
 */

function book(ticket_number){
    let isBooked = false;
    for(let ticket in flight.able_tickets){
        if(ticket === ticket_number){
            removeTicketFromAbleList(ticket);
            isBooked = true;
            break;
        }
    }
    isBooked === true ? isBookingValid(ticket_number) : isNotBookingValid(ticket_number);
}

function isBookingValid(ticket_number){
    alert("The booking of the ticket #" + ticket_number + " was successful!");
}

function isNotBookingValid(ticket_number){
    alert("The booking of the ticket #" + ticket_number + " was failed! The ticket with such a number doesn't exist or was already booked.");
}

/*
    Ticket set of functions
    - Booking the ticket (removing the booking ticket from the able array)
 */

function removeTicketFromAbleList(ticket){
    let position = 0;
    for(let current_ticket in flight.able_tickets){
        if(flight.able_tickets[position] === ticket){
            flight.able_tickets.slice(position, position + 1);
        }
        position++;
    }
}

alert(JSON.parse(flight));