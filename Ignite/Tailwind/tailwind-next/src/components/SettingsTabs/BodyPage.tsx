import { MailIcon, Search } from 'lucide-react';
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
      {/* End-personal info */}

      {/* Name */}
      <form id="settings" className="pt-5 flex flex-col w-full ">
        <div className="grid grid-cols-form pb-5 border-b border-zinc-200  ">
          <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
            Name
          </label>
          <div className=" grid gap-6 grid-cols-2  ">
            <InputRoot>
              <InputControl id="firstName" placeholder="Philippe"></InputControl>
            </InputRoot>
            <InputRoot>
              <InputControl placeholder="Wanuty"></InputControl>
            </InputRoot>
          </div>
        </div>
        {/* End-Name */}

        {/* Email Adress */}

        <div className=" grid grid-cols-form pt-5 pb-5 border-b border-zinc-200  ">
          <label className="text-sm font-medium text-zinc-700">Email adress</label>

          <div className="">
            <InputRoot>
              <InputPrefix>
                <MailIcon className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="firstName" placeholder="contact@philippewanuty.com"></InputControl>
            </InputRoot>
          </div>
        </div>
        {/* End-Email Adress */}
        {/* Your foto */}
        <div className="flex items-center justify-between border-b  border-zinc-200 pb-5  ">
          <div className="space-y-1 ">
            <label className="text-sm font-medium text-zinc-700">Your photo</label>
            <p className="text-sm font-normal text-zinc-500">This will be displayed on your profile.</p>
          </div>
        </div>

        {/* Role */}
        <div className=" grid grid-cols-form pt-5 pb-5 border-b border-zinc-200  ">
          <label className="text-sm font-medium text-zinc-700">Role</label>

          <div className="">
            <InputRoot>
              <InputControl id="firstName" placeholder="Web Developer"></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* End - Role */}
      </form>

      {/* Final button */}
      {/* <div className="flex flex-row gap-3 justify-end  border-t  border-zinc-200 pt-4 ">
        <button type="button" className="py-2.5 px-4 text text-sm font-semibold border border-zinc-300 shadow text-zinc-700 rounded-lg bg-white hover:bg-zinc-50">
          Cancel
        </button>
        <button type="button" className="py-2.5 px-4 text text-sm font-semibold rounded-lg shadow text-white  bg-violet-600 hover:bg-violet-700">
          Save
        </button>
      </div> */}
      {/* End- final button */}
    </div>
  );
}
