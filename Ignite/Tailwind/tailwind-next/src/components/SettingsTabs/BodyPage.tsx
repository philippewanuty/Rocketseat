import { Cloud, MailIcon, Search, UploadCloud, User } from 'lucide-react';
import { InputControl, InputPrefix, InputRoot } from '../sidebar/mainNavegation/Input';

export function BodyPage() {
  return (
    //  Personal info
    <div className="mt-8 flex flex-col ">
      <div className="flex items-center justify-between border-b  border-zinc-200 pb-5  ">
        <div className="space-y-1 ">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <p className="text-sm font-normal text-zinc-500">Update your photo and personal details here</p>
        </div>
        <div className="flex gap-3 items-center ">
          <button type="button" className="py-2.5 px-4 text text-sm font-semibold border border-zinc-300 shadow-sm text-zinc-700 rounded-lg bg-white hover:bg-zinc-50">
            Cancel
          </button>
          <button type="submit" form="settings" className="py-2.5 px-4 text text-sm font-semibold rounded-lg shadow-sm text-white  bg-violet-600 hover:bg-violet-700">
            Save
          </button>
        </div>
      </div>

      {/* Name */}
      <form id="settings" className="pt-5 flex flex-col w-full ">
        <div className="grid grid-cols-form pb-5 border-b border-zinc-200  ">
          <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
            Name
          </label>
          <div className=" grid gap-6 grid-cols-2  ">
            <InputRoot>
              <InputControl id="firstName" defaultValue="Philippe"></InputControl>
            </InputRoot>
            <InputRoot>
              <InputControl defaultValue="Wanuty"></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* Email Adress */}

        <div className=" grid grid-cols-form pt-5 pb-5 border-b border-zinc-200  ">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email adress
          </label>

          <div className="">
            <InputRoot>
              <InputPrefix>
                <MailIcon className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="email" type="email" defaultValue="contact@philippewanuty.com"></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* Your foto */}

        <div className="grid grid-cols-form border-b  border-zinc-200 pt-5 pb-5  ">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">This will be displayed on your profile.</span>
          </label>

          <div className="flex items-start gap-5">
            <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
              <User className="w-8 h-8 text-violet-500" />
            </div>

            <label
              htmlFor="photo"
              className=" group flex-1 mx-2 cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-200 py-4 px-6 shadow-sm hover:border-violet-200 hover:bg-violet-25"
            >
              <div className="bg-zinc-100 flex h-10 w-10 items-center justify-center rounded-full border-6 border-zinc-50 group-hover:border-violet-50   group-hover:bg-violet-100">
                <UploadCloud className="w-5 h-5 text-zinc-600  group-hover:text-violet-600" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sm font-normal text-zinc-500  group-hover:text-violet-600">
                  <span className=" text-sm font-semibold text-violet-700 ">Click to upload</span> or drag and drop
                </span>
                <span className=" text-xs text-zinc-500  group-hover:text-violet-600">SVG, PNG, JPG or GIF (max. 800x400px)</span>
              </div>
            </label>
            <input type="file" className="sr-only" id="photo" />
          </div>
        </div>

        {/* Role */}
        <div className=" grid grid-cols-form pt-5 pb-5 border-b border-zinc-200  ">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>

          <div className="">
            <InputRoot>
              <InputControl id="role" defaultValue="Web Developer"></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* Country */}
        <div className=" grid grid-cols-form pt-5 pb-5 border-b border-zinc-200  ">
          <label htmlFor="country" className="text-sm font-medium text-zinc-700">
            Country
          </label>

          <div className="">
            <InputRoot>
              <InputControl id="country" defaultValue="Brazil"></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* Timezone */}
        <div className=" grid grid-cols-form pt-5 pb-5 border-b border-zinc-200  ">
          <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
            Timezone
          </label>

          <div className="">
            <InputRoot>
              <InputControl id="timezone" defaultValue=""></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* Bio */}
        <div className="grid grid-cols-form pt-5 pb-5 border-b  border-zinc-200 pt-5 pb-5  ">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">Write a short introduction.</span>
          </label>
        </div>

        {/* Portfolio projects */}
        <div className="grid grid-cols-form pt-5 pb-5 border-b  border-zinc-200 pt-5 pb-5  ">
          <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">Share a few snippets of your work.</span>
          </label>

          <label
            htmlFor="projects"
            className=" group flex-1 mx-2 cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-200 py-4 px-6 shadow-sm hover:border-violet-200 hover:bg-violet-25"
          >
            <div className="bg-zinc-100 flex h-10 w-10 items-center justify-center rounded-full border-6 border-zinc-50 group-hover:border-violet-50   group-hover:bg-violet-100">
              <UploadCloud className="w-5 h-5 text-zinc-600  group-hover:text-violet-600" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sm font-normal text-zinc-500  group-hover:text-violet-600">
                <span className=" text-sm font-semibold text-violet-700 ">Click to upload</span> or drag and drop
              </span>
              <span className=" text-xs text-zinc-500  group-hover:text-violet-600">SVG, PNG, JPG or GIF (max. 800x400px)</span>
            </div>
          </label>
          <input type="file" className="sr-only" id="projects" />
        </div>

        {/* Final button */}
        <div className="flex flex-row gap-3 justify-end   pt-4 ">
          <button type="button" className="py-2.5 px-4 text text-sm font-semibold border border-zinc-300 shadow text-zinc-700 rounded-lg bg-white hover:bg-zinc-50">
            Cancel
          </button>
          <button type="button" className="py-2.5 px-4 text text-sm font-semibold rounded-lg shadow text-white  bg-violet-600 hover:bg-violet-700">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
