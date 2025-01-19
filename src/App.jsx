import './App.css';
import {User, MessageCircle, Heart, X} from 'lucide-react';
import {useState} from "react";

const ProfileSelector = () => (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg">
        <div className="relative">
            <img
                src="http://127.0.0.1:8081/01f4c42f-86cb-45e6-ad2b-05430afb3639.jpg"
                alt="Profile"
            />
            {/* Gradient Overlay and Text */}
            <div
                className="flex absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                <h2 className="text-3xl font-bold">Foo Bar, 30</h2>
            </div>
        </div>
        <div className="p-4">
            <p className="text-gray-600 mb-4">
                I am a software developer. I am a software developer. I am a software developer.
                I am a software developer. I am a software developer. I am a software developer.
            </p>
        </div>
        <div className="p-4 flex space-x-4 justify-center items-center">
            {/* Centered Buttons */}
            <button
                className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-red-700"
                onClick={() => {
                    console.log("left")
                }}
            >
                <X size={24}/>
            </button>
            <button
                className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-green-700"
                onClick={() => {
                    console.log("right")
                }}
            >
                <Heart size={24}/>
            </button>
        </div>
    </div>
);

const MatchesList = () => (
    <div className="shadow-xl bg-white rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Matches</h2>
        <ul>
            {[
                {
                    id: 1,
                    firstName: "Lin Lat",
                    lastName: "Htun",
                    imageUrl: "http://127.0.0.1:8081/03401693-2cfa-47f6-ba6a-5581c4791f65.jpg"
                },
                {
                    id: 2,
                    firstName: "Tun Myat",
                    lastName: "Myint Oo",
                    imageUrl: "http://127.0.0.1:8081/03401693-2cfa-47f6-ba6a-5581c4791f65.jpg"
                }
            ].map((match) => (
                <li
                    key={match.id}
                    className="flex items-center space-x-4 mb-4 hover:bg-gray-100 p-2 rounded-lg transition-all"
                >
                    <button
                        className="focus:outline-none">
                        <img
                            src={match.imageUrl}
                            alt={`${match.firstName} ${match.lastName}`}
                            className="w-12 h-12 rounded-full border-2 border-gray-300"
                        />
                    </button>
                    <div>
                        <h3 className="font-bold text-lg">{match.firstName} {match.lastName}</h3>
                        <p className="text-gray-600">Software Developer</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const ChatScreen = () => {
    const messages = ["Hi", "How are you?", "Let date at a coffee shop"];

    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
        }
        cosole.log(input);
        setInput("");
    }
    return (
        <div className="rounded-lg shadow-lg p-4 bg-white">
            <h2 className="text-2xl font-bold mb-4">Chat with Foo Bar</h2>
            <div className="mb-4 h-[50vh] overflow-y-auto">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-2 p-2 rounded ${
                            index % 2 === 0 ? "bg-blue-100 text-left" : "bg-gray-100 text-right"
                        }`}
                    >
                        {message}
                    </div>
                ))}
            </div>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                    placeholder="Type a message..."
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={handleSend}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Send
                </button>
            </div>
        </div>
    );
};


function App() {

    const [currentScreen, setCurrentScreen] = useState('profile');

    const renderScreen = () => {
        switch (currentScreen) {
            case 'profile':
                return <ProfileSelector/>;
            case 'matches':
                return <MatchesList/>;
            case 'chat':
                return <ChatScreen/>;
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            {/* Navigation */}
            <nav className="flex justify-between items-center mb-4 px-4">
                <User
                    className="w-6 h-6 text-gray-600 cursor-pointer"
                    onClick={() => setCurrentScreen('profile')}
                />
                <MessageCircle
                    className="w-6 h-6 text-gray-600 cursor-pointer"
                    onClick={() => setCurrentScreen('matches')}
                />
            </nav>
            {renderScreen()}
        </div>
    );
}

export default App;
