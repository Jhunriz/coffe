import React from "react";

export default function Contact() {
  return (
    <div className="pb-12 md:pb-96">
      <div className="grid md:grid-cols-2 gap-5 p-4 md:p-24">
        <div className="space-y-8 md:text-start">
          <p className="text-3xl md:text-5xl">GET IN TOUCH</p>
          <p className="dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error atque
            voluptatum amet ducimus ex architecto nesciunt ipsum odio magnam?
            Excepturi amet velit quas dolorum et possimus repellendus odio
            repellat! Consequuntur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a sit
            quia molestiae, ea, adipisci nulla obcaecati eius sunt laborum
            debitis. Saepe voluptates molestias explicabo iure officiis
            corrupti, possimus similique!
          </p>
        </div>

        <div id="gradiant" className="rounded-lg">
          <form className="flex flex-col justify-start p-4 md:p-10">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ex: Juan Dela Cruz"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactNumber"
                className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="flex items-start mb-4"></div>
            <button
              type="submit"
              className="bg-black text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-none text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-yellow-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
