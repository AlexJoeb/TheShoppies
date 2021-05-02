import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export default function Banner({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0">
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-full flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-blue-800">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="md:hidden">
                    You've reached five nominations!
                  </span>
                  <span className="hidden md:inline">
                    <span className="font-bold">Big news!</span> You've reached
                    five nominations.
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
                >
                  See Nominations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
