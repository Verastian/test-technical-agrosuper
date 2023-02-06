import React from "react";

const Card = () => {
  return (
    <div class="flex rounded-xl bg-white p-4 col-span-12">
      <div class="mx-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full flex-shrink-0">
        <img src="https://randomuser.me/api/portraits/women/8.jpg" />
      </div>

      <div class="ml-4 w-full">
        <div class="flex w-full items-center justify-between">
          <h2 class="text-lg font-medium">Maria</h2>
          <p>19 hours ago</p>
        </div>
        <div class="mt-4">
          <p>It's such a bright sunny day</p>

          <div class="mt-4 space-x-2">
            <button class="px-4 py-2 rounded-xl bg-zinc-400 text-white font-medium">
              Reply
            </button>

            <button class="px-4 py-2 rounded-xl bg-sky-400 text-white font-medium">
              Edit
            </button>

            <button class="px-4 py-2 rounded-xl bg-red-400 text-white font-delete">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
