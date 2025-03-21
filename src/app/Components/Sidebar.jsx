import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 hidden bg-blue-900 fixed z-10 top-[74px] text-white min-h-screen p-4 lg:flex lg:flex-col">
      <h1 className="text-2xl font-bold mb-24 overflow-y-auto ">EchoGPT</h1>
      <nav>
        <Link href="chatHistory" className="flex mb-6 items-center hover:text-gray-300">
          <Image src={'/icons8-chat-48.png'} className="mr-2" alt="history icon" width={20} height={20}/> History
        </Link>

        <li className="flex mb-6 items-center hover:text-gray-300">
          <Image src={'/icons8-bin-48.png'} className="mr-2" alt="history icon" width={20} height={20}/> Store
        </li>

        <li className="flex items-center hover:text-gray-300">
          <Image src={'/icons8-test-48.png'} className="mr-2" alt="history icon" width={20} height={20}/> AI Tasks
        </li>
      </nav>
      <div className="bg-blue-700 p-4 rounded-lg shadow mt-64">
        <p className="text-sm text-gray-200">Unlock pro features</p>
        <button className="mt-2 bg-yellow-400 text-blue-900 px-2 py-1 rounded">
            Upgrade to Pro
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
