import React from "react";
const events = [
  {
    event_type: "tech",
    events: [
      {
        image: "",
        name: "OLPC(Pre-Event)",
        desc: "In the realm of online programming contests, OLPC stands as a high-stakes battleground where swift minds race against the digital clock, tackling intricate challenges woven with complexities in data structures and algorithms.",
        Round1: " 15 Oct: 8 PM to 09:30 PM",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
      {
        image: "",
        name: "OLPC",
        desc: "It's a fast-paced programming contest, where the innovative minds come together to resolve challenges in the most complicated coding questions, involving data structures and algorithms.",
        Round1: "17 Oct: 9 AM to 12 PM ",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
      {
        image: "",
        name: "Hello World!",
        desc: "The event is aimed at introducing the newbies to logical reasoning, arithmetic, and programming concepts. The questions in this event will be assessing their critical thinking rather than their hardcore programming knowledge.",
        Round1: "17 Oct: 9 AM to 12 PM ",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
      {
        image: "",
        name: "Code For Queens",
        desc: "It's a women-only programming event where the CodHers will have to put forth their ingenious solutions to win the crown.",
        Round1: "17 Oct: 9 AM to 12 PM ",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
    ],
  },
  {
    event_type: "non-tech",
    events: [
      {
        image: "",
        name: "Fantasy League",
        desc: "Participate in the Fantasy League and experience the thrill of managing your virtual team to glory! Compete against others and show your team management skills.",
        Round1: "27 Oct: 9 AM to 3 PM ",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
      {
        image: "",
        name: "Sync Trophy-Cricket Championship",
        desc: "A 6-over cricket tournament played in knockout fashion. Each team should consist of 11 players. Exclusive to students of CSE Department.",
        Round1: "27 Oct: 4 PM to 6 PM ",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
      {
        image: "",
        name: "Knives-out",
        desc: "A murder mystery event where the participant will have to find who the murderer is using the clues and also present the logic and their train of thought that made them zero in on the killer.",
        Round1: "27 Oct: 4 PM to 6 PM ",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
    ],
  },
  {
    event_type: "workshops",
    events: [
      {
        image: "",
        name: "Building and Scaling Applications using Python Django (Python) [Workshop]",
        desc: "Explore the world of application building and scaling with Python Django in this event. Unleash the power of Python for robust and scalable applications!",
        Round1: "27 Oct: 9 AM to 3 PM ",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
    ],
  },
];

const Events = () => {
  const techEvents =
    events.find((eventType) => eventType.event_type === "tech")?.events || [];
  const nonTechEvents =
    events.find((eventType) => eventType.event_type === "non-tech")?.events ||
    [];
  const workshops =
    events.find((eventType) => eventType.event_type === "workshops")?.events ||
    [];

  return (
    <div className="bg-indigo-200">
      <div className="flex justify-center text-center w-screen font-bold text-3xl py-3">
        Events
      </div>
      <div className="flex flex-col justify-center font-bold items-center py-6 bg-gray-100 w-[20%] mx-auto rounded-lg">
        <h2>Event Dates</h2>
        <p>Event Scheduled for two days</p>
        <p className="bg-indigo-300 p-1 rounded-md m-1 hover:cursor-pointer">
          Day-1:<span className="font-normal">September 27th 2024</span>
        </p>
        <p className="bg-indigo-300 p-1 rounded-md m-1 hover:cursor-pointer">
          Day-2:<span className="font-normal">September 28th 2024</span>
        </p>
      </div>
      <div className="flex flex-row justify-around font-bold py-3">
        <div className="flex flex-col items-center">
          <h3 className="text-xl">Tech</h3>
          {techEvents.map((event, index) => (
            <div key={index} className="bg-white p-4 m-2 shadow-lg rounded-lg">
              <h4 className="font-bold">{event.name}</h4>
              <p>{event.desc}</p>
              <p>Round1: {event.Round1}</p>
              {event.link && (
                <a href={event.link} className="text-blue-500">
                  More Info
                </a>
              )}
              {event.Contact && (
                <div>
                  {event.Contact.map((contact, i) => (
                    <p key={i}>
                      {contact.coord}: {contact.contact}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl">Non-Tech</h3>
          {nonTechEvents.map((event, index) => (
            <div key={index} className="bg-white p-4 m-2 shadow-lg rounded-lg">
              <h4 className="font-bold">{event.name}</h4>
              <p>{event.desc}</p>
              <p>Round1: {event.Round1}</p>
              {event.link && (
                <a href={event.link} className="text-blue-500">
                  More Info
                </a>
              )}
              {event.Contact && (
                <div>
                  {event.Contact.map((contact, i) => (
                    <p key={i}>
                      {contact.coord}: {contact.contact}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl">Workshops</h3>
          {workshops.map((event, index) => (
            <div key={index} className="bg-white p-4 m-2 shadow-lg rounded-lg">
              <h4 className="font-bold">{event.name}</h4>
              <p>{event.desc}</p>
              <p>Round1: {event.Round1}</p>
              {event.link && (
                <a href={event.link} className="text-blue-500">
                  More Info
                </a>
              )}
              {event.Contact && (
                <div>
                  {event.Contact.map((contact, i) => (
                    <p key={i}>
                      {contact.coord}: {contact.contact}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
