/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropMenu({ onTabClick }) {
  const cats = [
    "EPDM",
    "Fibre",
    "Galet",

    "Gazon synthétique",

    "Gravier ",
    "Interlook",

    "Jeux pour enfants",
    "Pierres",
  ];
  return (
    <Menu
      as="div"
      className="relative inline-block flex   flex-col-end  items-center text-left"
    >
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full   px-4 py-2  text-sm font-medium text-gray-700 ">
              More
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className=" z-50 origin-top-left  absolute right-0  mt-64 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            >
              {cats.map((cat) => (
                <div className="py-1 cursor-pointer">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => onTabClick(cat)}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {cat}
                      </div>
                    )}
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
