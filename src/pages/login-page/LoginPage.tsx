import React, { useState } from 'react';
import './LoginPage.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useAuthContext } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.token, { name: data.user.username });
        toast.success('Login bem-sucedido!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => navigate('/home')
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Email ou senha inválidos.', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
      toast.error('Ocorreu um erro inesperado. Por favor, tente novamente.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email: registerEmail, password: registerPassword }),
      });

      if (response.ok) {
        toast.success('Registro bem-sucedido! Faça login para continuar.', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => setIsActive(false)
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Erro ao registrar. Por favor, tente novamente.', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Erro ao registrar', error);
      toast.error('Ocorreu um erro inesperado. Por favor, tente novamente.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="newBody">
      <div className={`container_login ${isActive ? 'active' : ''}`} id="container_login">
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button>Register</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" onClick={toggleActive}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>
                Hello, <br />
                Nice👌 Gadgets <br />
                friend!
              </h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" onClick={toggleActive}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
