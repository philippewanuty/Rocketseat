import { InputControl, InputPrefix, InputRoot } from '../sidebar/mainNavegation/Input';

export function BodyPage() {
  return (
    <div className="gap-5">
      <div className="flex flex-row gap-3 pt-8 pb-5 ">
        <div className="flex flex-col gap-1 mr-auto">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <p
            className="text-sm font-normal text-zinc-500
              "
          >
            Update your photo and personal details here
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center ">
          <button type="button" className="py-2.5 px-4 text text-sm font-semibold border order-zinc-300 shadow text-zinc-700 rounded-lg bg-white">
            Cancel
          </button>
          <button type="button" className="py-2.5 px-4 text text-sm font-semibold rounded-lg shadow text-white  bg-violet-600">
            Save
          </button>
        </div>
      </div>
      {/* End-personal info */}

      <div className="flex flex-row border-t pt-6 pb-5 ">
        <h3 className="text-sm font-medium text-zinc-700">Name</h3>
        <div className="flex flex-row items-center gap-2">
          <InputRoot >
            <InputPrefix></InputPrefix>
            <InputControl placeholder="Oliva"></InputControl>
          </InputRoot>
          <InputRoot>
            <InputPrefix></InputPrefix>
            <InputControl placeholder="Rhye"></InputControl>
          </InputRoot>
          {/* TODO */}
        </div>
      </div>
      <div className="flex flex-row border-t py-5 ">
        <h3 className="text-sm font-medium text-zinc-700">Email adress</h3>
      </div>
      <div className="flex flex-col border-t py-5">
        <h3 className="text-sm font-medium text-zinc-700">Your photo</h3>
        <p className="text-sm font-normal text-zinc-500 ">This will be displayed on your profile.</p>
      </div>
      <div className="flex flex-row border-t py- 5">
        <h3 className="text-sm font-medium text-zinc-700">Role</h3>
      </div>
      <div className="flex flex-row border-t py-5 ">
        <h3 className="text-sm font-medium text-zinc-700">Country</h3>
      </div>
      <div className="flex flex-row border-t py-5 ">
        <h3 className="text-sm font-medium text-zinc-700">Timezone</h3>
      </div>
      <div className="flex flex-col border-t py-5 ">
        <h3 className="text-sm font-medium text-zinc-700">Bio</h3>
        <p className="text-sm font-normal text-zinc-500">Write a short introduction.</p>
      </div>
      <div className="flex flex-col border-t py-5 ">
        <h3 className="text-sm font-medium text-zinc-700">Portfolio projects</h3>
        <p className="text-sm font-normal text-zinc-500 ">Update your photo and personal details here</p>
      </div>

      <div className="flex flex-row gap-3 justify-end ">
        <button type="button" className="py-2.5 px-4 text text-sm font-semibold border order-zinc-300 shadow text-zinc-700 rounded-lg bg-white">
          Cancel
        </button>
        <button type="button" className="py-2.5 px-4 text text-sm font-semibold rounded-lg shadow text-white  bg-violet-600">
          Save
        </button>
      </div>
    </div>
  );
}
