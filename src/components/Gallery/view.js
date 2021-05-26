import React, { Fragment, useState } from "react";
import {
  Disclosure,
  Listbox,
  Dialog,
  Menu,
  Transition,
} from "@headlessui/react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import {
  CogIcon,
  CollectionIcon,
  HeartIcon,
  HomeIcon,
  MenuAlt2Icon,
  PhotographIcon,
  PlusIcon as PlusIconOutline,
  UserGroupIcon,
  ViewGridIcon as ViewGridIconOutline,
  XIcon,
} from "@heroicons/react/outline";
import {
  PencilIcon,
  PlusIcon as PlusIconSolid,
  SearchIcon,
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon,
} from "@heroicons/react/solid";
import Modal from "./galModal";
import ProgressiveImage from "react-progressive-image";
import DropMenu from "./menu.js";
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "All Files", href: "#", icon: ViewGridIconOutline, current: false },
  { name: "Photos", href: "#", icon: PhotographIcon, current: true },
  { name: "Shared", href: "#", icon: UserGroupIcon, current: false },
  { name: "Albums", href: "#", icon: CollectionIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];

const tabs = [
  "All",
  "Bentonite ",
  "Brique pilée",
  "Des équipements d'arrosage",
].map((cat) => {
  return { name: cat, href: "#", current: false };
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ entries, assets }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [focus, setFocus] = useState(null);
  const [tab, setTab] = useState("All");
  const [entries_, setEntries] = useState(entries["data"]);
  const [entry, setEntry] = useState(null);
  const onTabClick = (tabName) => {
    setTab(tabName);
    if (tabName == "All") {
      let new_entries = entries["data"];
      setEntries(new_entries);
    } else {
      let new_entries = entries["data"].filter(
        (entry) => entry["name"] == tabName
      );
      setEntries(new_entries);
    }
  };
  return (
    <>
      <div className="h-screen bg-gray-50 w-full flex overflow-hidden  ">
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 z-10 flex md:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-blue-700 pt-5 pb-4 flex-1 flex flex-col">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-1 right-0 -mr-14 p-1">
                    <button
                      type="button"
                      className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Close sidebar</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 px-4 flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                  <nav className="h-full flex flex-col">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-blue-800 text-white"
                              : "text-blue-100 hover:bg-blue-800 hover:text-white",
                            "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-blue-300 group-hover:text-white",
                              "mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                  <h1 className="flex-1 text-2xl font-bold text-gray-900">
                    Products
                  </h1>
                  <div className="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
                    <Link to="/home">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        GO HOME
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Tabs */}
                <div className="mt-3 sm:mt-2">
                  <div className="hidden">
                    <label htmlFor="tabs" className="sr-only">
                      Select a tab
                    </label>
                    <select
                      id="tabs"
                      name="tabs"
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      defaultValue="All"
                    >
                      {tabs.map((tab_) => (
                        <option
                          key={tab_.name}
                          onPress={() => onTabClick(tab_.name)}
                          aria-current={tab ? "page" : undefined}
                          className={classNames(
                            tab == tab_.name
                              ? "border-blue-500 text-blue-600"
                              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                            "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                          )}
                        >
                          {tab_.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex items-center border-b border-gray-200">
                      <nav
                        className="flex-1 -mb-px flex space-x-6 xl:space-x-8"
                        aria-label="Tabs"
                      >
                        {tabs.map((tab_) => (
                          <button
                            key={tab_.name}
                            onClick={() => {
                              setTab(tab_.name);
                              if (tab_.name == "All") {
                                let new_entries = entries["data"];
                                setEntries(new_entries);
                              } else {
                                let new_entries = entries["data"].filter(
                                  (entry) => entry["name"] == tab_.name
                                );
                                setEntries(new_entries);
                              }
                            }}
                            aria-current={tab ? "page" : undefined}
                            className={classNames(
                              tab == tab_.name
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                            )}
                          >
                            {tab_.name}
                          </button>
                        ))}
                        <DropMenu onTabClick={onTabClick} />
                      </nav>
                      <Link to="/home">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          GO HOME
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <section
                  className="mt-8 pb-16"
                  aria-labelledby="gallery-heading"
                >
                  <h2 id="gallery-heading" className="sr-only">
                    Recently viewed
                  </h2>
                  <ul
                    role="list"
                    className={`${
                      focus == null
                        ? "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                        : "grid grid-cols-1 gap-x-4 gap-y-8  sm:grid-cols-3 sm:gap-x-6 xl:gap-x-8"
                    }`}
                  >
                    {entries_.map((file, index) => (
                      <li
                        onClick={() => {
                          console.log("test");
                          setOpen(true);
                          setEntry({
                            name: file.name,
                            url: `https:${assets[file.img_id]}`,
                          });
                          setFocus(index);
                        }}
                        key={index}
                        className="relative cursor-pointer transform hover:scale-110 ease-in-out duration-200 "
                      >
                        <div
                          className={classNames(
                            focus == index
                              ? "ring-2 ring-offset-2 ring-blue-500"
                              : "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500",
                            "group block w-full h-96 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
                          )}
                        >
                          <ProgressiveImage
                            //  delay={1000}
                            src={`https:${assets[file.img_id]}`}
                            placeholder="tiny-image.jpg"
                          >
                            {(src, loading) => (
                              <>
                                {loading ? (
                                  <div class="bg-blue-300 animate-pulse  h-full  "></div>
                                ) : (
                                  <img
                                    src={src}
                                    alt=""
                                    className={classNames(
                                      file.current
                                        ? ""
                                        : "group-hover:opacity-75",
                                      "object-fill w-full pointer-events-none h-full "
                                    )}
                                  />
                                )}
                              </>
                            )}
                          </ProgressiveImage>
                        </div>
                        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                          {file.name}
                        </p>
                        {/*       <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                        {file.size}
                          </p>*/}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </main>

            {/* Details sidebar */}
            {focus == null ? <></> : <Modal entry={entry} />}
          </div>
        </div>
      </div>
    </>
  );
}
