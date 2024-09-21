import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import OLPC_pre from "../../images/coding.png";
import cricket from "../../images/cricket.jpeg";
import treaure_hunt from "../../images/treasure-hunt.jpg";
import recall from "../../images/recall.png"
import code_queen from "../../images/crown.png";
import designlab360 from "../../images/dl1.png"
import code_bingo from "../../images/code-bingo.png"
import reverse_coding from "../../images/reverse-coding.png"
import shuttle from "../../images/shuttle-smash.jpeg"
import techxpress from "../../images/techxpress.png"
import pixel from "../../images/pixel-perfect.jpg"
import family_feud from "../../images/family_feud.png"
import django from "../../images/django.png";
import quiz from "../../images/entertainment.png";
import helloworld from "../../images/helloworld.png";
import meme from "../../images/meme-ify.png";
import knivesout from "../../images/knives_out.png";
import kquiz from "../../images/quiz.png"
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
        name: "OLPC (Pre-Event)",
        desc: "In the realm of online programming contests, OLPC stands as a high-stakes battleground where swift minds race against the digital clock, tackling intricate challenges woven with complexities in data structures and algorithms.",
        Date: "September 26 2024",
        Time: "06:00 PM to 08:00 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Infancy P ", contact: "9047366527" },
        ],
      },
      {
        image: OLPC_pre,
        name: "OSPC",
        desc: "It's a fast-paced programming contest, where the innovative minds come together to resolve challenges in the most complicated coding questions, involving data structures and algorithms.",
        Date: "September 27 2024",
        Time: "09:30 AM to 4:00 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Infancy P ", contact: "9047366527" },
        ],
      },
      {
        image: helloworld,
        name: "Hello World!",
        desc: "The event is aimed at introducing the newbies to logical reasoning, arithmetic, and programming concepts. The questions will be assessing their critical thinking rather than their hardcore programming knowledge.",
        Date: "September 27 2024",
        Time: "09:30 AM to 12:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Infancy P ", contact: "9047366527" },
        ],
      },    
      {
        image: designlab360,
        name: "DesignLab 360",
        desc: "Participants unleash their creativity by designing a cutting-edge web frontend and bring their designs to life by coding them into functional, interactive working web pages. Showcase skills in both design and development.",
        Date: "September 27 2024",
        Time: "09:30 AM to 12:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Infancy P ", contact: "9047366527" },
        ],
      },    
      {
        image: reverse_coding,
        name: "Reverse Coding",
        desc: "Decipher the underlying code logic to reconstruct the original algorithm. Sharpen your problem-solving skills as you decode, debug, and deliver the solution in this unique coding battle!",
        Date: "September 28 2024",
        Time: "09:30 AM to 12:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Infancy P ", contact: "9047366527" },
        ],
      },
      {
        image: code_bingo,
        name: "Code Bingo",
        desc: "Step into the captivating world of Coding, an exhilarating coding adventure where each code challenge is a stepping stone in your journey, unlocking the secrets of the next thrilling quest!",
        Date: "September 28 2024",
        Time: "09:30 AM to 12:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Infancy P ", contact: "9047366527" },
        ],
      }, 
      {
        image: techxpress,
        name: "TechXpress",
        desc: "Step into the captivating world of Coding, an exhilarating coding adventure where each code challenge is a stepping stone in your journey, unlocking the secrets of the next thrilling quest!",
        Date: "September 28 2024",
        Time: "09:30 AM to 12:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Infancy P ", contact: "9047366527" },
        ],
      }, 
      {
        image: techxpress,
        name: "SYNC - CSAU",
        desc: "Step into the captivating world of Coding, an exhilarating coding adventure where each code challenge is a stepping stone in your journey, unlocking the secrets of the next thrilling quest!",
        Date: "September 28 2024",
        Time: "09:30 AM to 12:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Infancy P ", contact: "9047366527" },
        ],
      },
    ],
  },
  {
    event_type: "non-tech",
    events: [
      {
        image: pixel,
        name: "Pixel Perfect",
        desc: "Unleash your creativity by capturing photos under two intriguing themes “Campus Through My Eyes” or “Tech in Daily Life”. Submit your most captivating images for a chance to win and see the world through your lens!",
        participation: "Individual",
        prize: "Rs.1000/-",
        Date: "Till September 27 2024",
        Time: "-",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Harini S ", contact: "9363349994" },
        ],
      },
      {
        image: shuttle,
        name: "Shuttle Smash (Pre-Event)",
        desc: "A thrilling badminton showdown where skill meets strategy in separate tournaments for only girls! Compete in fast-paced matches to showcase your agility and precision, and aim for the top spot on the podium.",
        participation: "Individual",
        prize: "Rs.1000/-",
        Date: "September 28 2024",
        Time: "08:00 PM to 09:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Harini S ", contact: "9363349994" },
        ],
      },
      {
        image: cricket,
        name: "Cricket (Pre-Event)",
        desc: "Cricket is a thrilling showdown where strategy meets endurance in an exciting tournament! Teams will compete in fast-paced matches, showcasing their batting, bowling, and fielding skills to dominate the pitch and claim victory.",
        participation: "Team",
        prize: "Rs.1000/-",
        Date: "September 28 2024",
        Time: "08:00 PM to 09:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Harini S ", contact: "9363349994" },
        ],
      },
      {
        image: kquiz,
        name: "Kollywood Quiz",
        desc: "Put your skills to test on topics like Food, Technology, Movies, Lifestyle, and more!  Can your team guess the most popular answers to survey questions and win the title of Family Feud Champions?  Find out in this thrilling and intense competition! ",
        participation: "Individual",
        prize: "Rs.1000/-",
        Date: "September 27 2024",
        Time: "09:30 AM to 12:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Harini S ", contact: "9363349994" },
        ],
      },
      {
        image: knivesout,
        name: "Knives-out",
        desc: "Step into the ultimate test of wits and teamwork with our Knives Out  Challenge! Teams must unravel a web of clues, solve intricate puzzles, and uncover hidden secrets to solve the crime and find the murderer.",
        participation: "Team of size 2",
        prize: "Rs.1000/-",
        Date: "September 27 2024",
        Time: "10:30 AM to 5:00 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Harini S ", contact: "9363349994" },
        ],
      },
      {
        image: recall,
        name: "Recall Rumble",
        desc: "Participants will face a series of engaging tasks designed to push the limits of their memory. Compete to prove your sharpness and precision as you navigate through memory-intensive challenges!",
        participation: "Individual",
        prize: "Rs.1000/-",
        Date: "September 28 2024",
        Time: "09:30 AM to 12:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Harini S ", contact: "9363349994" },
        ],
      },
      {
        image: family_feud,
        name: "Family Feud",
        desc: "Put your skills to test on topics like Food, Technology, Movies, Lifestyle, and more!  Can your team guess the most popular answers to survey questions and win the title of Family Feud Champions?  Find out in this thrilling and intense competition! ",
        participation: "Team of size 5",
        prize: "Rs.1500/-",
        Date: "September 28 2024",
        Time: "09:30 AM to 03:00 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Harini S ", contact: "9363349994" },
        ],
      },
      {
        image: treaure_hunt,
        name: "Treasure Hunt",
        desc: "Join the Treasure Hunt for an adventurous campus quest! Teams will receive clues leading them to hidden locations around the campus, each revealing the next clue to uncover further secrets.",
        participation: "Team of size 3",
        prize: "Rs.1000/-",
        Date: "September 28 2024",
        Time: "10:00 AM to 03:30 PM",
        link: "",
        Contact: [
          { coord: "Ajai Krishna T.S ", contact: "7010707652" },
          { coord: "Harini S ", contact: "9363349994" },
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
    <div className="mb-[5%] text-[#222222]" data-aos="fade-up">
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
                    <span className="font-bold">Prize Pool</span>: {event.prize}
                  </p>
                  <p>
                    <span className="font-bold">Participation</span>: {event.participation}
                  </p>
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
