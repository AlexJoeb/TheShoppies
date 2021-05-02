/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppSelector } from "../Redux/hooks";
import MovieCard, { CardType } from "./MovieCard";

interface ModalProps {
  nominationModalOpen: boolean;
  setNominationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NominationModal({
  nominationModalOpen: open,
  setNominationModalOpen: setOpen,
}: ModalProps) {
  const nominations = useAppSelector(({ nominations }) => nominations);
  if (!nominations || nominations.length <= 0) return null;
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative w-screen inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 md:max-w-xl lg:max-w-2xl xl:max-w-4xl bg-gray-100">
              <svg
                onClick={() => setOpen(false)}
                className="absolute bg-white rounded-full -top-4 -right-4 cursor-pointer fill-current text-red-400 w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <title>c-remove</title>
                <g>
                  <path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M11.5,10.1l-1.4,1.4L8,9.4l-2.1,2.1l-1.4-1.4L6.6,8 L4.5,5.9l1.4-1.4L8,6.6l2.1-2.1l1.4,1.4L9.4,8L11.5,10.1z"></path>
                </g>
              </svg>
              <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 xs:gap-x-4 xl:gap-x-8 gap-y-4">
                {!!nominations &&
                  nominations.length >= 1 &&
                  nominations.map((nomination) => (
                    <MovieCard
                      key={nomination.imdbID}
                      movie={nomination}
                      cardType={CardType.NOMINATED_CARD}
                    />
                  ))}
              </ul>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
