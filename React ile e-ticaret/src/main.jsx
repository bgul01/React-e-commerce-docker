import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { store } from './store.jsx';
import { Provider } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51Mo4ZMIHwLBWixlv7bJo8b9LLZMDwwzl2TRPDibTph86prD3sXeqHNS0s9FHQ2FI5iEuUvOwlrcxZTWocUp5E3ES00xt1Ilpst');

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <Elements stripe={stripePromise}>
                <App />
            </Elements>
        </Provider>

    </BrowserRouter>
)
