import React from "react";

import Form from "./form";

export default function Modal({ entry }) {
  return (
    <aside className="hidden  w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
      <div className="pb-16  space-y-6">
        <div>
          <div className="block w-full h-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
            <img src={entry.url} alt="" className="object-cover" />
          </div>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                <span className="sr-only">Details for </span>
                {entry.name}
              </h2>
            </div>
          </div>
        </div>
        <h3 className="font-medium text-gray-900">Contact us</h3>
        <Form subject={entry.name} />
      </div>
    </aside>
  );
}
