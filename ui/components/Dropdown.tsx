"use client"

import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { FaChevronDown } from "react-icons/fa"

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <Menu as="div">
      <div className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 items-center">
          Sort by: Trending Today
          <FaChevronDown className="text-gray-400 text-xs" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {[
              "Latest from Top Contributors",
              "Trending Today",
              "Trending this Week",
              "Trending this Month",
              "Trending this Year",
            ].map((optionText) => {
              const active = optionText === "Trending Today"
              return (
                <Menu.Item key={optionText}>
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    {optionText}
                  </a>
                </Menu.Item>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
