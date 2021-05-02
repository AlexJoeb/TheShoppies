import React, { useState, useEffect } from "react";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import NominationModal from "./Components/NominationModal";
import { useAppDispatch, useAppSelector } from "./Redux/hooks";
import { fetchPriorNominations } from "./Redux/reducers/nominationReducer";

function App() {
  const [nominationModalOpen, setNominationModalOpen] = useState<boolean>(
    false
  );
  const nominations = useAppSelector((state) => state.nominations);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // Get movies from local.
    const nominationsFromLocal = localStorage.getItem("nominations");
    if (!nominationsFromLocal || !nominationsFromLocal.trim()) return;
    dispatch(fetchPriorNominations());
  }, []);
  return (
    <div className="pb-8">
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
