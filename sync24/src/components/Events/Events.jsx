import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import OLPC_pre from "../../images/coding.png";
import cricket from "../../images/cricket.png";
import code_queen from "../../images/crown.png";
import django from "../../images/django.png";
import quiz from "../../images/entertainment.png";
import helloworld from "../../images/helloworld.png";
import meme from "../../images/meme-ify.png";
import knivesout from "../../images/knivesout.png";
import snap from "../../images/snap.png";
import league from "../../images/images.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const events = [
  {
    event_type: "tech",
    events: [
      {
        image: OLPC_pre,
        name: "OLPC(Pre-Event)",
        desc: "In the realm of online programming contests, OLPC stands as a high-stakes battleground where swift minds race against the digital clock, tackling intricate challenges woven with complexities in data structures and algorithms.",
        Date: "September 28 2024",
        Time: "8 PM to 9:30 PM",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
      {
        image: OLPC_pre,
        name: "OLPC",
        desc: "It's a fast-paced programming contest, where the innovative minds come together to resolve challenges in the most complicated coding questions, involving data structures and algorithms.",
        Date: "September 27 2024",
        Time: "8 PM to 9:30 PM",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
      {
        image: helloworld,
        name: "Hello World!",
        desc: "The event is aimed at introducing the newbies to logical reasoning, arithmetic, and programming concepts. The questions in this event will be assessing their critical thinking rather than their hardcore programming knowledge.",
        Date: "September 27 2024",
        Time: "8 PM to 9:30 PM",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
      {
        image: code_queen,
        name: "Code For Queens",
        desc: "It's a women-only programming event where the CodHers will have to put forth their ingenious solutions to win the crown.",
        Date: "September 27 2024",
        Time: "8 PM to 9:30 PM",
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
        image: league,
        name: "Fantasy League",
        desc: "Participate in the Fantasy League and experience the thrill of managing your virtual team to glory! Compete against others and show your team management skills.",
        Date: "September 28 2024",
        Time: "8 PM to 9:30 PM",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
      {
        image: cricket,
        name: "Sync Trophy-Cricket Championship",
        desc: "A 6-over cricket tournament played in knockout fashion. Each team should consist of 11 players. Exclusive to students of CSE Department.",
        Date: "September 28 2024",
        Time: "8 PM to 9:30 PM",
        link: "",
        Contact: [
          { coord: "aaa", contact: "987654321" },
          { coord: "bbb", contact: "987654322" },
        ],
      },
      {
        image: knivesout,
        name: "Knives-out",
        desc: "A murder mystery event where the participant will have to find who the murderer is using the clues and also present the logic and their train of thought that made them zero in on the killer.",
        Date: "September 28 2024",
        Time: "8 PM to 9:30 PM",
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
        image: django,
        name: "Building and Scaling Applications using Python Django (Python) [Workshop]",
        desc: "Explore the world of application building and scaling with Python Django in this event. Unleash the power of Python for robust and scalable applications!",
        Date: "September 28 2024",
        Time: "8 PM to 9:30 PM",
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
  const [tech, SetTech] = useState(false);
  const [nonTech, SetNonTech] = useState(false);
  const [workshop, SetWorkshop] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,  
    });
  }, []);
  const handleDateEvents = (date) => {
    if (selectedDate === date) {
      setSelectedDate("");
      return;
    }
    setSelectedDate(date);

    const filteredEvents = events.flatMap((eventType) =>
      eventType.events.filter((event) => event.Date === date)
    );

    setEventsForSelectedDate(filteredEvents);
  };

  const handleTech = () => SetTech(!tech);
  const handleNonTech = () => SetNonTech(!nonTech);
  const handleWorkshop = () => SetWorkshop(!workshop);

  const techEvents =
    events.find((eventType) => eventType.event_type === "tech")?.events || [];
  const nonTechEvents =
    events.find((eventType) => eventType.event_type === "non-tech")?.events ||
    [];
  const workshops =
    events.find((eventType) => eventType.event_type === "workshops")?.events ||
    [];

    

  return (
   <div className="mb-[5%] text-[#222222]" 
    data-aos="fade-up" 
    style={{ minHeight: '100vh', paddingTop: '100px' }}
  >
      <div
        className="flex flex-row justify-center items-center my-[1%]"
        data-aos="fade-up"
      >
        <div className="w-12 h-[2.5px] bg-sky-600"></div>
        <div className="flex justify-center text-center font-bold text-4xl py-3 mx-2 text-[#222222]">
          EVENTS
        </div>
        <div className="w-12 h-[2.5px] bg-sky-600 "></div>
      </div>

      <div className="flex flex-col justify-center font-bold items-center py-6  bg-gray-100 w-[80%] lg:w-[30%] mx-auto rounded-lg">
        <h2 className="text-sm lg:text-2xl md:text-2xl">Event Dates</h2>
        <p className="text-sm lg:text-xl md:text-xl">
          Event Scheduled for two days
        </p>
        <p
          className="flex flex-row text-md lg:text-xl md:text-xl items-center bg-gray-300 p-1 rounded-md m-1 px-3 hover:cursor-pointer hover:bg-gray-400"
          onClick={() => handleDateEvents("September 27 2024")}
        >
          Day-1:<span className="font-normal ">September 27 2024</span>
          {selectedDate && selectedDate === "September 27 2024" ? (
            <FaChevronUp className="text-sky-500 ml-2" />
          ) : (
            <FaChevronDown className="text-sky-500 ml-2" />
          )}
        </p>
        {selectedDate === "September 27 2024" && (
          <div className="flex flex-col justify-center items-center  ">
            {eventsForSelectedDate.map((event, index) => (
              <div
                key={index}
                className="bg-gray-200 w-[80%]  p-2 rounded-md m-1"
              >
                <p className="font-semibold text-sm lg:text-xl md:text-xl">
                  {event.name}
                </p>
              </div>
            ))}
          </div>
        )}
        <p
          className="flex lg:text-xl md:text-xl text-md flex-row items-center bg-gray-300 p-1 rounded-md m-1 px-3 hover:cursor-pointer hover:bg-gray-400"
          onClick={() => handleDateEvents("September 28 2024")}
        >
          Day-2:<span className="font-normal">September 28 2024</span>
          {selectedDate && selectedDate === "September 28 2024" ? (
            <FaChevronUp className="text-sky-500 ml-2" />
          ) : (
            <FaChevronDown className="text-sky-500 ml-2" />
          )}
        </p>
        {selectedDate === "September 28 2024" && (
          <div className="flex flex-col justify-center items-center">
            {eventsForSelectedDate.map((event, index) => (
              <div
                key={index}
                className="bg-gray-200 w-[80%] items-center  p-2 rounded-md m-1"
              >
                <p className="font-semibold text-sm lg:text-xl md:text-xl">
                  {event.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center py-3">
        <div className="flex flex-col items-center " data-aos="fade-up">
          <button
            className="text-xl w-[50%] lg:w-[20%] md:w-[50%] hover:border-gray-700 py-3 bg-gray-300 text-center rounded-lg flex items-center justify-between px-4 hover:bg-gray-400 transition relative group duration-300 ease-in-out mx-auto my-1.5 hover:scale-105"
            onClick={handleTech}
            
          >
            Tech
            {tech ? (
              <FaChevronUp className="text-sky-500" />
            ) : (
              <FaChevronDown className="text-sky-500" />
            )}
          </button>
          <div className="flex flex-col md:flex-row flex-wrap">
            {tech &&
              techEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-4 mx-3 my-4 shadow-lg rounded-lg lg:w-[31%] md:w-[47%] w-[95%] h-[30%] lg:h-[90%] mx-auto transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200"
                  data-aos="fade-up"               
                >
                  <div className="absolute top-0 right-0 w-[10%] h-[14%] bg-sky-100 rounded-bl-full"></div>
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-[25%] h-22 object-contain rounded-lg mb-4 object-cover"
                  />
                  <h4 className="font-bold">{event.name}</h4>
                  <p>{event.desc}</p>
                  <hr className="my-4 border-t border-gray-300" />
                  <p>
                    <span className="font-bold">Date</span>: {event.Date}
                  </p>
                  <p>
                    <span className="font-bold">Time</span>: {event.Time}
                  </p>
                  <hr className="my-4 border-t border-gray-300" />
                  {event.link && (
                    <a href={event.link} className="text-blue-500">
                      More Info
                    </a>
                  )}
                  {event.Contact && (
                    <div>
                      {event.Contact.map((contact, i) => (
                        <p key={i}>
                          <span className="font-bold">{contact.coord}</span>:{" "}
                          <a href={`tel:+91${contact.contact}`}>
                            <span className="text-sky-500">
                              {contact.contact}
                            </span>
                          </a>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col items-center " data-aos="fade-up">
          <button
            className="text-xl w-[50%] lg:w-[20%] md:w-[50%] py-3 hover:border-gray-700 bg-gray-300 text-center rounded-lg flex items-center justify-between px-4 hover:bg-gray-400 transition relative group duration-300 ease-in-out mx-auto my-1.5 mx-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={handleNonTech}
          >
            Non-Tech
            {nonTech ? (
              <FaChevronUp className="text-sky-500" />
            ) : (
              <FaChevronDown className="text-sky-500" />
            )}
          </button>
          <div className="flex flex-col md:flex-row flex-wrap ">
            {nonTech &&
              nonTechEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-4 mx-3 my-4 shadow-lg rounded-lg lg:w-[31%] md:w-[45%] w-[95%] h-[30%] lg:h-[90%] mx-auto transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200"
                  data-aos="fade-up"
                >
                  <div className="absolute top-0 right-0 w-[10%] h-[14%] bg-sky-100 rounded-bl-full"></div>

                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-[20%] h-22 object-contain rounded-lg mb-4"
                  />
                  <h4 className="font-bold">{event.name}</h4>
                  <p>{event.desc}</p>
                  <hr className="my-4 border-t border-gray-300" />
                  <p>
                    <span className="font-bold">Date</span>: {event.Date}
                  </p>
                  <p>
                    <span className="font-bold">Time</span>: {event.Time}
                  </p>
                  <hr className="my-4 border-t border-gray-300" />
                  {event.link && (
                    <a href={event.link} className="text-blue-500">
                      More Info
                    </a>
                  )}
                  {event.Contact && (
                    <div>
                      {event.Contact.map((contact, i) => (
                        <p key={i}>
                          <span className="font-bold">{contact.coord}</span>:{" "}
                          <a href={`tel:+91${contact.contact}`}>
                            <span className="text-sky-500">
                              {contact.contact}
                            </span>
                          </a>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <button
            className="text-xl w-[50%] lg:w-[20%] md:w-[50%] py-3 hover:border-gray-700 bg-gray-300 text-center rounded-lg flex items-center justify-between px-4 hover:bg-gray-400 transition relative group duration-300 ease-in-out mx-auto my-1.5 mx-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={handleWorkshop}
          >
            Workshops
            {workshop ? (
              <FaChevronUp className="text-sky-500" />
            ) : (
              <FaChevronDown className="text-sky-500" />
            )}
          </button>
          <div className="flex flex-col md:flex-row flex-wrap ">
            {workshop &&
              workshops.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-4 mx-3 my-4 shadow-lg rounded-lg lg:w-[31%] md:w-[45%] w-[95%] h-[30%] lg:h-[90%] mx-auto transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200"
                  data-aos="fade-up"
                >
                  <div className="absolute top-0 right-0 w-[10%] h-[14%] bg-sky-100 rounded-bl-full"></div>

                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-[20%] h-22 object-contain rounded-lg mb-4"
                  />
                  <h4 className="font-bold">{event.name}</h4>
                  <p>{event.desc}</p>
                  <hr className="my-4 border-t border-gray-300" />
                  <p>
                    <span className="font-bold">Date</span>: {event.Date}
                  </p>
                  <p>
                    <span className="font-bold">Time</span>: {event.Time}
                  </p>
                  <hr className="my-4 border-t border-gray-300" />
                  {event.link && (
                    <a href={event.link} className="text-blue-500">
                      More Info
                    </a>
                  )}
                  {event.Contact && (
                    <div>
                      {event.Contact.map((contact, i) => (
                        <p key={i}>
                          <span className="font-bold">{contact.coord}</span>:{" "}
                          <a href={`tel:+91${contact.contact}`}>
                            <span className="text-sky-500">
                              {contact.contact}
                            </span>
                          </a>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
