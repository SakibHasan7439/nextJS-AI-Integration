import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";

export default function Home() {
  return (
    <div className="flex mt-[78px]">
      <Sidebar></Sidebar>
      <MainContent></MainContent>
    </div>
  );
}
