import '../index.css';
import { SignUpCheck } from '../Components/Auth.tsx';

export default function Signup() {
  /*const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);*/

  return (
    <>
      <main>
        <div className="bg-white flex justify-center items-center">
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Sign Up</h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"></p>
            </div>
            <SignUpCheck></SignUpCheck>
          </div>
        </div>
      </main>
    </>
  );
}
