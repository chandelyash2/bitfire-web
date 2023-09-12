import { Login } from "../components/Login";

const img = "/home.jpg";
const LoginPage = () => {
  return (
    <div
      className="absolute top-0 bg-no-repeat w-screen h-screen bg-cover z-1"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Login />
    </div>
  );
};

export default LoginPage;
