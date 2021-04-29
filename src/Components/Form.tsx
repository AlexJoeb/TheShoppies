export default function Form() {
  return (
    <div className="flex flex-col xs:flex-row items-end justify-between">
      <div className="w-full xs:w-auto xs:flex-grow">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Movie Title
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="title"
            id="title"
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full xs:text-sm border-gray-300 rounded-md"
            placeholder="Ex: The Lion King"
          />
        </div>
      </div>
      <button
        type="button"
        className="w-full xs:w-auto mt-4 xs:mt-0 inline-flex items-center ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        See Nominations
      </button>
    </div>
  );
}