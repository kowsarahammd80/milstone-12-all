import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="mx-w-[1440px] mx-auto">
          
          <RouterProvider router={router}>
             
          </RouterProvider>

          <Toaster />

    </div>
  );
}

export default App;
