import AppRouter from '../routes/AppRouter';

import AuthProvider from '../providers/AuthProvider';

import '../styles/App.css';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
