<template>
  <!-- <h1 class="text-3xl font-semibold pt-2">Ayo Ade</h1> -->
  <div class="my-2 flex flex-col gap-8 md:flex-row items-start md:gap-4">
    <div class="md:basis-2/6 bg-color-white w-full">
      <div class="flex justify-between items-center p-2 border-b-2">
        <h1 class="text-lg font-semibold">Upload</h1>
        <i class="fas fa-search"></i>
      </div>
      <div>
        <p class="p-8 lg:p-12 border m-4 text-center">Drop your files here</p>
      </div>
      <div class="border-t p-6">
        <div class="my-2">
          <p class="">Fireboy ft Asake</p>
          <div class="w-full h-2 bg-color-light-bg my-2 rounded-md">
            <div class="bg-blue-500 w-1/6 h-full rounded-l-md"></div>
          </div>
        </div>
        <div class="my-2">
          <p class="">Buju</p>
          <div class="w-full h-2 bg-color-light-bg my-2 rounded-md">
            <div class="bg-blue-500 w-4/6 h-full rounded-l-md"></div>
          </div>
        </div>
        <div class="my-2">
          <p class="">Zinolesky</p>
          <div class="w-full h-2 bg-color-light-bg my-2 rounded-md">
            <div class="bg-blue-500 w-3/6 h-full rounded-l-md"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:basis-4/6 bg-color-white w-full">
      <div class="flex justify-between items-center p-2 border-b-2">
        <h1 class="text-lg font-semibold">My Uploads</h1>
        <i class="fas fa-search"></i>
      </div>
      <div class="m-4 border p-4 rounded-lg">
        <div class="flex items-center justify-between items-start">
          <h1 class="my-2 font-semibold">Song Name</h1>
          <div class="flex gap-2">
            <a href="" class="bg-blue-400 px-2 rounded-md text-color-black"
              ><i class="fas fa-pencil"></i
            ></a>
            <a href="" class="bg-red-400 px-2 rounded-md text-color-black"
              ><i class="fas fa-xmark"></i
            ></a>
          </div>
        </div>
        <!-- Edit form -->
        <form class="hidden">
          <div class="my-2 flex flex-col gap-2">
            <label for="songTitle" class="text-color-text text-[14px]"
              >Song Title</label
            >
            <input
              type="text"
              id="songTitle"
              placeholder="song title"
              class="border rounded-md py-1 px-2 border-gray-400"
            />
          </div>
          <div class="my-2 flex flex-col gap-2">
            <label for="genre" class="text-color-text text-[14px]">Genre</label>
            <input
              type="password"
              id="genre"
              placeholder="Password"
              class="border rounded-md py-1 px-2 border-gray-400"
            />
          </div>
          <button
            type="submit"
            class="my-2 px-4 py-2 bg-color-secondary text-center text-color-white"
          >
            Submit
          </button>
          <button
            type="submit"
            class="my-2 px-4 py-2 bg-color-gray-deep text-center text-color-white"
          >
            Cancel
          </button>
        </form>
      </div>
      <div class="m-4 border p-4 rounded-lg">
        <div class="flex items-center justify-between items-start">
          <h1 class="my-2 font-semibold">Song Name</h1>
          <div class="flex gap-2">
            <a href="" class="bg-blue-400 px-2 rounded-md text-color-black"
              ><i class="fas fa-pencil"></i
            ></a>
            <a href="" class="bg-red-400 px-2 rounded-md text-color-black"
              ><i class="fas fa-xmark"></i
            ></a>
          </div>
        </div>
        <!-- Edit form -->
        <form class="hidden">
          <div class="my-2 flex flex-col gap-2">
            <label for="songTitle2" class="text-color-text text-[14px]"
              >Song Title</label
            >
            <input
              type="text"
              id="songTitle2"
              placeholder="song title"
              class="border rounded-md py-1 px-2 border-gray-400"
            />
          </div>
          <div class="my-2 flex flex-col gap-2">
            <label for="genre1" class="text-color-text text-[14px]"
              >Genre</label
            >
            <input
              type="password"
              id="genre1"
              placeholder="Password"
              class="border rounded-md py-1 px-2 border-gray-400"
            />
          </div>
          <button
            type="submit"
            class="my-2 px-4 py-2 bg-color-secondary text-center text-color-white"
          >
            Submit
          </button>
          <button
            type="submit"
            class="my-2 px-4 py-2 bg-color-gray-deep text-center text-color-white"
          >
            Cancel
          </button>
        </form>
      </div>
      <div class="m-4 border p-4 rounded-lg">
        <div class="flex items-center justify-between items-start">
          <h1 class="my-2 font-semibold">Song Name</h1>
          <div class="flex gap-2">
            <a href="" class="bg-blue-400 px-2 rounded-md text-color-black"
              ><i class="fas fa-pencil"></i
            ></a>
            <a href="" class="bg-red-400 px-2 rounded-md text-color-black"
              ><i class="fas fa-xmark"></i
            ></a>
          </div>
        </div>
        <!-- Edit form -->
        <form class="hidden">
          <div class="my-2 flex flex-col gap-2">
            <label for="songTitle3" class="text-color-text text-[14px]"
              >Song Title</label
            >
            <input
              type="text"
              id="songTitle3"
              placeholder="song title"
              class="border rounded-md py-1 px-2 border-gray-400"
            />
          </div>
          <div class="my-2 flex flex-col gap-2">
            <label for="genre2" class="text-color-text text-[14px]"
              >Genre</label
            >
            <input
              type="password"
              id="genre2"
              placeholder="Password"
              class="border rounded-md py-1 px-2 border-gray-400"
            />
          </div>
          <button
            type="submit"
            class="my-2 px-4 py-2 bg-color-secondary text-center text-color-white"
          >
            Submit
          </button>
          <button
            type="submit"
            class="my-2 px-4 py-2 bg-color-gray-deep text-center text-color-white"
          >
            Cancel
          </button>
        </form>
      </div>
      <div class="m-4 border p-4 rounded-lg">
        <div class="flex items-center justify-between items-start">
          <h1 class="my-2 font-semibold">Song Name</h1>
          <div class="flex gap-2">
            <a href="" class="bg-blue-400 px-2 rounded-md text-color-black"
              ><i class="fas fa-pencil"></i
            ></a>
            <a href="" class="bg-red-400 px-2 rounded-md text-color-black"
              ><i class="fas fa-xmark"></i
            ></a>
          </div>
        </div>
        <!-- Edit form -->
        <form class="hidden">
          <div class="my-2 flex flex-col gap-2">
            <label for="songTitle4" class="text-color-text text-[14px]"
              >Song Title</label
            >
            <input
              type="text"
              id="songTitle4"
              placeholder="song title"
              class="border rounded-md py-1 px-2 border-gray-400"
            />
          </div>
          <div class="my-2 flex flex-col gap-2">
            <label for="genre3" class="text-color-text text-[14px]"
              >Genre</label
            >
            <input
              type="password"
              id="genre3"
              placeholder="Password"
              class="border rounded-md py-1 px-2 border-gray-400"
            />
          </div>
          <button
            type="submit"
            class="my-2 px-4 py-2 bg-color-secondary text-center text-color-white"
          >
            Submit
          </button>
          <button
            type="submit"
            class="my-2 px-4 py-2 bg-color-gray-deep text-center text-color-white"
          >
            Cancel
          </button>
        </form>
      </div>
      <div class="m-4 border p-4 rounded-lg">
        <div class="flex items-center justify-between items-start">
          <h1 class="my-2 font-semibold">Song Name</h1>
          <div class="flex gap-2">
            <a href="" class="bg-blue-400 px-2 rounded-md text-color-black"
              ><i class="fas fa-pencil"></i
            ></a>
            <a href="" class="bg-red-400 px-2 rounded-md text-color-black"
              ><i class="fas fa-xmark"></i
            ></a>
          </div>
        </div>
        <!-- Edit form -->
        <form class="hidden">
          <div class="my-2 flex flex-col gap-2">
            <label for="songTitle5" class="text-color-text text-[14px]"
              >Song Title</label
            >
            <input
              type="text"
              id="songTitle5"
              placeholder="song title"
              class="border rounded-md py-1 px-2 border-gray-400"
            />
          </div>
          <div class="my-2 flex flex-col gap-2">
            <label for="genre4" class="text-color-text text-[14px]"
              >Genre</label
            >
            <input
              type="password"
              id="genre4"
              placeholder="Password"
              class="border rounded-md py-1 px-2 border-gray-400"
            />
          </div>
          <button
            type="submit"
            class="my-2 px-4 py-2 bg-color-secondary text-center text-color-white"
          >
            Submit
          </button>
          <button
            type="submit"
            class="my-2 px-4 py-2 bg-color-gray-deep text-center text-color-white"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
