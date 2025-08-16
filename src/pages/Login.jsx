import { useState } from "react";
import './log.css';

export default function Auth({ closeModal }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (isLogin) {
      alert(`Logged in as: ${email}`);
    } else {
      alert(`Signed up as: ${name} (${email})`);
    }
    if (closeModal) closeModal();
  };

  return (
    <div className={closeModal ? "modal-overlay" : "page-container"}>
      <div className={closeModal ? "modal-content" : "auth-container"}>
        {closeModal && (
          <button className="close-btn" onClick={closeModal}>✖</button>
        )}
        <div className="auth-container">
          <div className="auth-icon" role="img" aria-label="airplane">✈️</div>
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </>
            )}

            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />

            <button type="submit">{isLogin ? "Login" : "Signup"}</button>
          </form>

          <p style={{ marginTop: "10px" }}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
