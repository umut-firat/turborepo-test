import { AuthProvider, useAuth } from "auth";

const App = () => {
  const { user, login, logout } = useAuth();

  function handleLoginButtonClick() {
    login({
      username: "umutfirat",
    });
  }

  function handleLogoutButtonClick() {
    logout();
  }

  let button = <button onClick={handleLoginButtonClick}>Login</button>;
  if (user) {
    button = <button onClick={handleLogoutButtonClick}>Logout</button>;
  }

  return (
    <div>
      <div>
        <h1>App: Docs</h1>
      </div>
      {user && (
        <div>
          <h3>Username: {user.username}</h3>
        </div>
      )}
      <div>{button}</div>
    </div>
  );
};

const Docs = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default Docs;
