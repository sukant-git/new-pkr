import { useState } from "react";
import { GraduationCap } from "lucide-react";

interface LoginProps {
  onLogin: (userData: { name: string; role: string }) => void;
}

const dummyUsers = [
  {
    username: "abinaya",
    password: "faculty123",
    name: "ABINAYA M",
    role: "faculty",
  },
  {
    username: "swathi",
    password: "faculty124",
    name: "SWATHI R",
    role: "faculty",
  },
  {
    username: "harini",
    password: "faculty125",
    name: "HARINI S",
    role: "faculty",
  },
  {
    username: "priyanka",
    password: "faculty126",
    name: "PRIYANKA K",
    role: "faculty",
  },
  {
    username: "rajesh",
    password: "faculty127",
    name: "RAJESH P",
    role: "faculty",
  },
];

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const user = dummyUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      onLogin({ name: user.name, role: user.role });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="bg-white border-2 border-gray-800 w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            PKR Portal
          </h1>
          <p className="text-gray-600">
            Engineering Student Evaluation Center
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-400 bg-gray-100 focus:bg-white focus:border-gray-500 outline-none"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-400 bg-gray-100 focus:bg-white focus:border-gray-500 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-3 font-semibold hover:bg-gray-800 border-2 border-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
