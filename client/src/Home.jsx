import React from "react";
import { Link } from "react-router-dom";
import BgImg from "./images/Sports.avif";
import favicon from "./images/Favicon.jpg";

const Header = () => (
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link
        to="/"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 transition-transform transform hover:scale-105"
      >
        <img src={favicon} alt="Favicon" className="mr-2 w-6 h-6" />
        <span className="ml-3 text-xl">Sports_Zone</span>
      </Link>
      <nav
        id="NavLinks"
        className="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <Link
          to="/"
          className="mr-5 hover:text-gray-900 hover:underline transform hover:scale-105 transition-transform duration-300 ease-in-out "
        >
          Home
        </Link>
        <Link
          to="/teams"
          className="mr-5 hover:text-gray-900 hover:underline transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Teams
        </Link>
        <Link
          to="/register"
          className="mr-5 hover:text-gray-900 hover:underline transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="mr-5 hover:text-gray-900 hover:underline transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Login
        </Link>
        <Link
          to="/events"
          className="mr-5 hover:text-gray-900 hover:underline transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Event
        </Link>
      </nav>
    </div>
  </header>
);

const MainSection = () => (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Unleash the Thrill:{" "}
          <span className="text-blue-600">Sports Zone </span>- Your Ultimate
          Sporting Destination!
        </h1>
        <p className="mb-8 leading-relaxed">
          <span className="text-blue-600">Sports Zone </span> is a dynamic hub
          for enthusiasts and athletes alike, fostering a vibrant community
          united by the passion for various sports. Offering state-of-the-art
          facilities and a diverse range of activities, it serves as a premier
          destination for both recreational players and competitive athletes to
          hone their skills. With a commitment to promoting fitness, teamwork,
          and a love for the game, Sports Zone provides an immersive and
          inclusive environment for individuals of all ages and skill levels..
        </p>
        <div className="flex justify-center">
          <Link to="/register">
            <button
              id="Get-start-button"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Get Started
            </button>
          </Link>
          <Link
            to="/events"
            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >
            Join Upcoming Event
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-gray-200 shadow-lg">
        <img
          id="Sports_image"
          className="object-cover object-center rounded"
          alt="hero"
          src={BgImg}
        />
      </div>
    </div>
  </section>
);

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={favicon} alt="Favicon" className="mr-2 w-6 h-6" />
          <span className="ml-3 text-xl">Sports_Zone</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {currentYear} Sports_Zone —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Developers_view
          </a>
        </p>
      </div>
    </footer>
  );
};

function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}

export default Home;
