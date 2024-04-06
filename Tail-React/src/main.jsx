import {useState} from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductThree from './assets/components/products.jsx'

function MainComponent(){
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div>
      {showSignIn ? (
        <App />
      ) : (
        <div>
          <h1>Welcome to Products Page</h1>
          <button className="mt-2 text-white" onClick={() => setShowSignIn(true)}>Sign In</button>
          <ProductThree/>
        </div>
      )}
    </div>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 <MainComponent/>
  </>
)

export default MainComponent;