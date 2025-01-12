import './App.css';
import { User, MessageCircle, Heart, X } from 'lucide-react';

const ProfileSelector = () => (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg">
        <div className="relative">
            <img
                src="http://127.0.0.1:8080/01f4c42f-86cb-45e6-ad2b-05430afb3639.jpg"
                alt="Profile"
            />
            {/* Gradient Overlay and Text */}
            <div
                className=" flex absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                <h2 className="text-3xl font-bold">Foo Bar, 30</h2>
            </div>
        </div>
        <div className="p-4">
            <p className="text-gray-600 mb-4">I am software developer.I am software developer.I am software developer.I am software developer.I am software developer.I am software developer.I am software developer.</p>
        </div>
        <div className="p-4 flex space-x-4 justify-center items-center">
            {/* Centered Buttons */}
            <button className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-red-700"
            onClick={() => {console.log("left")}}>
                <X size={24} />
            </button>
            <button className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-green-700"
            onClick={() => {console.log("right")}}>
                <Heart size={24} />
            </button>
        </div>
    </div>
);

function App() {
    return (
        <>
            <div className="max-w-md mx-auto mt-10">
                {/* Navigation */}
                <nav className="flex justify-between items-center mb-4 px-4">
                    <User className="w-6 h-6 text-gray-600 cursor-pointer" />
                    <MessageCircle className="w-6 h-6 text-gray-600 cursor-pointer" />
                </nav>
                {/* Profile Selector */}
                <ProfileSelector />
            </div>
        </>
    );
}

export default App;
