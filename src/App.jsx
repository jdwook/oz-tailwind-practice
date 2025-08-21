import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Header />
      <section className="flex flex-wrap justify-center gap-5 p-5 px-10">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;