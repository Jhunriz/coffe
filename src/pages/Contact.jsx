import React from "react";

export default function Contact() {
  return (
    <div className="pb-96">
      <div className="grid grid-cols-2 gap-5 p-24">
        <div className="space-y-24 text-start">
          <p className="text-5xl">GET IN TOUCH</p>
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

        <div className="bg-yellow-900 rounded-lg">
          <form className="flex flex-col justify-start p-10">
            <div class="mb-6">
              <label
                for="email"
                class="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ex: Juan Dela Cruz"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact Number
              </label>
              <input
                type="number"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div class="flex items-start mb-6"></div>
            <button
              type="submit"
              class="bg-yellow-950 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-none text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-950 dark:hover:bg-yellow-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
