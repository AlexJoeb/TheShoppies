import Form from "./Components/Form";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <div className="app w-full min-h-screen bg-gray-100 sm:p-12 lg:px-24">
      <Header />
      <main className="px-4 sm:px-0 space-y-8 relative">
        <Form />
        <MovieList />
      </main>
    </div>
  );
}

export default App;
