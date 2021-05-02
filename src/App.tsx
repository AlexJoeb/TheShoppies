import React, { useState } from "react";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import NominationModal from "./Components/NominationModal";
import { useAppSelector } from "./Redux/hooks";

function App() {
  const [nominationModalOpen, setNominationModalOpen] = useState<boolean>(
    false
  );
  const nominations = useAppSelector((state) => state.nominations);
  return (
    <div className="pb-16">
      <div className="app w-full min-h-screen bg-gray-100 sm:p-12 lg:px-24">
        <Header />
        <main className="px-4 sm:px-0 space-y-8 relative">
          <Form setNominationModalOpen={setNominationModalOpen} />
          <MovieList />
        </main>
        <NominationModal
          nominationModalOpen={nominationModalOpen}
          setNominationModalOpen={setNominationModalOpen}
        />
        {nominations.length >= 5 && <Banner setOpen={setNominationModalOpen} />}
      </div>
    </div>
  );
}

export default App;
