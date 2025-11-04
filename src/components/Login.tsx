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
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-medium w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-primary p-4 rounded-full mb-4">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">
            ESEC Portal
          </h1>
          <p className="text-neutral-600">
            Engineering Student Evaluation Center
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition duration-200 shadow-soft hover:shadow-medium"
          >
            Login
          </button>
        </form>

        {/* <div className="mt-8 p-4 bg-neutral-100 rounded-lg">
          <p className="text-xs text-neutral-600 font-semibold mb-2">Demo Credentials:</p>
          <div className="space-y-1 text-xs text-neutral-600">
            <p><span className="font-medium">Faculty:</span> abinaya / faculty123</p>
            <p><span className="font-medium">Student:</span> student1 / student123</p>
            <p><span className="font-medium">Admin:</span> admin / admin123</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
