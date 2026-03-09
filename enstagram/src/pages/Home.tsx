import HomeContent from "../components/shared/home-content";
import HomeSearch from "../components/shared/home-search";

function Home() {
  return (
    <div className="flex w-full  items-center justify-center">
      <div className="w-[25%] border-r fixed top-0 left-0 bottom-0">
        Sidebar kiri
      </div>
      <div className="w-[50%] overflow-y-auto max-h-screen">
        <HomeSearch />
        <HomeContent />
      </div>
      <div className="w-[25%] border-l fixed top-0 right-0 bottom-0">
        Sidebar kanan
      </div>
    </div>
  );
}

export default Home;
