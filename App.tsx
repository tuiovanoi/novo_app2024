import { StatusBar } from 'expo-status-bar';
import { Navigation } from './src/Navigations/index';
import { AuthProvider } from './src/context/auth';

export default function App() {
  return (
    <>
    <AuthProvider>
      <Navigation />
    </AuthProvider>
      <StatusBar style="auto" />
    </>
    );
}