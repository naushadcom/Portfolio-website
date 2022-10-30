import React from "react";
import ANTHRO from "../assets/Anthro.png";
import phr from "../assets/pharm.png";
import fitness from "../assets/fitness.png";
import GROWW from "../assets/grow.png";
import YOUTUBE from "../assets/youtube.png";
import TIC from "../assets/c.png";
import CAL from "../assets/calculator.png";
import { FaEye, FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full  sm:h-[1600px] md:h-[1300px] bg-[#0a192f] text-gray-300 "
    >
      <div className="sm:max-w-[720px] md:max-w-[1000px] lg:max-w-[1250px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-800">
            Projects
          </p>
          <p className="py-6">Check some of my recent work</p>
        </div>

        {/* Container */}

        <div className=" w-full grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={fitness}
              alt="kimaye image"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">
                myfitnesspal.com
              </p>
              <p className="my-2 text-sm text-left text-gray-500">
                MyFitnessPal allows users to track calories, monitor progress
                toward weight-management goals, and gain support from an online
                community.
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>
                HTML | CSS | Javascript | ReactJs | Redux | Redux-thunk | Mongodb | ExpessJs | NodeJs | chakra-UI
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://myfitnesspal-clone.netlify.app/"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/rajashree27/MyFitnessPal-Clone"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={ANTHRO}
              alt="Sugar Cosmetics image"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">
                Anthropologie.com
              </p>
              <p className="my-2 text-sm text-left text-gray-500">
                Anthropologie is an American clothing retailer with
                approximately 200 stores across the U.S., Canada, and the UK
                that offers an assortment of clothing, jewelry, home furniture,
                decoration, beauty products, and gifts.
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>
                ReactJS | NodeJS | bootstrap | HTML | CSS | Nodeserver
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://incomparable-sorbet-96eaba.netlify.app/"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/naushadcom/Anthropologie-Clone"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={GROWW}
              alt="Sugar Cosmetics image"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">Groww app</p>
              <p className="my-2 text-sm text-left text-gray-500">
                Investment application In 2016, four Flipkart employees – Lalit
                Keshre, Harsh Jain, Ishan Bansal and Neeraj Singh, quit their
                jobs to start a venture that could make investing easy. They
                called this venture Groww and started operations In 2017. Here
                is all you need to know about the founders, the history of Groww
                and investors backing its vision…
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>
                JavaScript | HTML | CSS | ES6
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://astounding-empanada-72ca7f.netlify.app/"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/naushadcom/Groww-Clone"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={YOUTUBE}
              alt="AnthroPologie"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">
                Mini Youtube.com
              </p>
              <p className="my-2 text-sm text-left text-gray-500">
                This is a clone of youtube.com which is an American online video
                sharing and social media platform headquartered in San Bruno,
                California. It was launched on February 14, 2005, by Steve Chen,
                Chad Hurley, and Jawed Karim. It is currently owned by Google,
                and is the second most visited website, after Google Search.
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>
                HTML | CSS | JavaScript
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://gorgeous-speculoos-ba3a71.netlify.app/"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/naushadcom/Youtube-Clone"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={TIC}
              alt="LinkedIn Learning image"
            />
            <div className="px-3 my-4">
              <p className=" font-bold  text-left text-gray-600">Tic-tac-toe</p>
              <p className="my-2 text-sm text-left  text-gray-500">
                Tic-tac-toe is a game in which two players take turns in drawing
                either an ` O' or an ` X' in one square of a grid consisting of
                nine squares. The winner is the first player to get three of the
                same symbols in a row.
              </p>
              <p className="my-2 text-sm text-left   text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>
                HTML | CSS | JavaScript
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://silly-fairy-dc3274.netlify.app/"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/naushadcom/Tic-Tac-Toe"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={CAL}
              alt="Textutils image"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left  text-gray-600">Calculator</p>
              <p className="my-2 text-sm text-left  text-gray-500">
                this is a small simple calculator. An electronic calculator is
                typically a portable electronic device used to perform
                calculations, ranging from basic arithmetic to complex
                mathematics.
              </p>
              <p className="my-2 text-sm text-left   text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>
                ReactJS | NodeJS | Bootstrap
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://stellular-platypus-d06ebb.netlify.app/"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/naushadcom/Calculator"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
