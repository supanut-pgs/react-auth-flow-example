
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuthProvider';
import Routes from './navigation/Routes';



function App() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </AuthProvider>


        </div>
    );
}

export default App;
