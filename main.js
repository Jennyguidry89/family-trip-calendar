
const calendarData = {
  "Friday, July 18, 2025": [
    {
      "time": "04:00 PM",
      "event": "Pick up rental car NO airport",
      "location": "MSY airport",
      "status": "Confirmed",
      "ticket": "Chuck",
      "notes": ""
    }
  ],
  "Saturday, July 19, 2025": [
    {
      "time": "07:30 AM",
      "event": "pick up Abel, Jenny - drive to Birmingham Residence Inn",
      "location": "6904 Jefferson Hwy, Harahan, Louisiana to Birmingham, Residence Inn",
      "status": "Confirmed",
      "ticket": "Chuck",
      "notes": ""
    },
    {
      "time": "05:30 PM",
      "event": "Josh & Abigail",
      "location": "Birmingham",
      "status": "Confirmed",
      "ticket": NaN,
      "notes": ""
    }
  ],
  "Sunday, July 20, 2025": [
    {
      "time": "11:00 AM",
      "event": "family brunch",
      "location": "Birmingham",
      "status": "Confirmed",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "04:00 PM",
      "event": "return rental car",
      "location": "Birmingham Airport",
      "status": "Confirmed",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "06:00 PM",
      "event": "flight to DC",
      "location": "Birmingham Airport",
      "status": "Confirmed",
      "ticket": "Jenny/Chuck",
      "notes": ""
    },
    {
      "time": "09:15 PM",
      "event": "arrive DC",
      "location": "Ronald Reagan Washington National Airport",
      "status": "Confirmed",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "10:00 PM",
      "event": "Check into DC hotel",
      "location": "Capitol Hill Hotel",
      "status": "Confirmed",
      "ticket": "Jenny",
      "notes": ""
    }
  ],
  "Monday, July 21, 2025": [
    {
      "time": "10:00 AM",
      "event": "Smithsonian Air & Space",
      "location": "Smithsonian Air & Space",
      "status": "Confirmed",
      "ticket": "Jenny",
      "notes": ""
    },
    {
      "time": "01:00 PM",
      "event": "Smithsonian Natural History",
      "location": "Smithsonian Natural History",
      "status": "Open",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "03:00 PM",
      "event": "Museums, White House ?",
      "location": "National Mall, DC",
      "status": "Open",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "05:00 PM",
      "event": "WWII museum taps",
      "location": "WWI memorial",
      "status": "Open",
      "ticket": NaN,
      "notes": ""
    }
  ],
  "Tuesday, July 22, 2025": [
    {
      "time": "09:30 AM",
      "event": "Arlington Cemetery",
      "location": "Arlington Cemetery",
      "status": "Confirmed",
      "ticket": "Jenny",
      "notes": "2 hrs"
    },
    {
      "time": "01:00 PM",
      "event": "Pentagon",
      "location": "Pentagon",
      "status": "Open",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "02:00 PM",
      "event": "Jefferson Memorial",
      "location": "Jefferson Memorial",
      "status": "Open",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "07:00 PM",
      "event": "Alyssa & Tina",
      "location": "Alyssa & Tina's house",
      "status": "Confirmed",
      "ticket": NaN,
      "notes": ""
    }
  ],
  "Wednesday, July 23, 2025": [
    {
      "time": "10:00 AM",
      "event": "Library of Congress",
      "location": "Library of Congress",
      "status": "Confirmed",
      "ticket": "Jenny",
      "notes": ""
    },
    {
      "time": "11:00 AM",
      "event": "Lincoln Memorial",
      "location": "Lincoln Memorial",
      "status": "Open",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "12:00 PM",
      "event": "Washington Memorial",
      "location": "Washington Memorial",
      "status": "Open",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "01:00 PM",
      "event": "Mall",
      "location": "National Mall, DC",
      "status": "Open",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "02:30 PM",
      "event": "US Capital ",
      "location": "US Capital ",
      "status": "Confirmed",
      "ticket": "Gina",
      "notes": "2.5 hrs Need to arrive by 2pm"
    }
  ],
  "Thursday, July 24, 2025": [
    {
      "time": "10:00 AM",
      "event": "Cathedral",
      "location": "Basilica of the National Shrine of the Immaculate Conception",
      "status": "Open",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "03:00 PM",
      "event": "Leave hotel",
      "location": "Capitol Hill Hotel",
      "status": "Confirmed",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "05:00 PM",
      "event": "Mt. Vernon (George Washington)",
      "location": "Mt. Vernon",
      "status": "Open",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "06:00 PM",
      "event": "Cedar Knoll",
      "location": "Cedar Knoll restaurant",
      "status": "Confirmed",
      "ticket": NaN,
      "notes": ""
    }
  ],
  "Friday, July 25, 2025": [
    {
      "time": "10:00 AM",
      "event": "Check out of hotel",
      "location": "Capitol Hill Hotel",
      "status": "Confirmed",
      "ticket": NaN,
      "notes": ""
    },
    {
      "time": "11:50 AM",
      "event": "Flight to NOLA",
      "location": "Ronald Reagan Washington National Airport",
      "status": "Confirmed",
      "ticket": "Chuck",
      "notes": ""
    },
    {
      "time": "06:30 PM",
      "event": "Amtrak to NOLA",
      "location": "Amtrak Union Station",
      "status": "Confirmed",
      "ticket": "Jenny",
      "notes": ""
    }
  ]
};

const ticketLinks = {"Arlington": "Arlington Cemetery.pdf", "Library": "Library of Congress.pdf", "Flight": "flight to DC.pdf", "Hotel": "Check into DC hotel.pdf"};

function createCalendar() {
    const container = document.getElementById('calendar');
    for (const [date, events] of Object.entries(calendarData)) {
        const section = document.createElement('div');
        section.classList.add('day-section');

        const header = document.createElement('h2');
        header.textContent = date;
        section.appendChild(header);

        const ul = document.createElement('ul');
        for (const event of events) {
            const li = document.createElement('li');

            let ticketHtml = "";
            if (event.ticket && ticketLinks[event.ticket]) {
                ticketHtml = `📎 <a href="docs/${ticketLinks[event.ticket]}" target="_blank">View Ticket</a><br>`;
            } else if (event.ticket) {
                ticketHtml = `📎 ${event.ticket}<br>`;
            }

            let notesHtml = event.notes ? `📝 Notes: ${event.notes}` : "";

            li.innerHTML = `<strong>${event.time}</strong> — <em>${event.event}</em><br>
                            📍 ${event.location}<br>
                            ✅ Status: ${event.status}<br>` +
                            ticketHtml + notesHtml;

            ul.appendChild(li);
        }
        section.appendChild(ul);
        container.appendChild(section);
    }
}

window.onload = createCalendar;
