import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#1B1C1E] flex flex-col lg:flex-row justify-center items-center p-4"
    >
      <div className="pb-1 lg:pb-24 pr-8 xl:pr-16">
        <p className="text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300">
          Contact
        </p>
        <p className="text-gray-300 py-4">
          // Get in touch with me by the contact below.
        </p>
        <p className="text-gray-300 py-4">
          Email -{" "}
          <a
            href="mailto: sitthipon.sint@gmail.com"
            className="underline decoration-solid text-yellow-300"
          >
            sitthipon.sint@gmail.com
          </a>
        </p>
        <p className="text-gray-300 py-4">
          Line - <span className="text-yellow-300">fight.sint</span>
        </p>
        <p className="text-gray-300 py-4">
          Tel - <span className="text-yellow-300">(+66) 928070245</span>
        </p>
        <p className="text-gray-300 py-4">
          Location -{" "}
          <span className="text-yellow-300">Bangkok, Thailand 10230</span>
        </p>
      </div>
      <form
        // method="POST"
        // action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            sitthipon.sint@gmail.com
          </p>
        </div>
        <input
          className="bg-[#1B1C1E] p-2 border-b border-yellow-300 text-white"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#1B1C1E] border-b border-yellow-300 text-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#1B1C1E] p-2 border-b border-yellow-300 text-white"
          name="message"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 transition ease-in-out hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
