import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6 text-center">
            <div className="max-w-lg">
                <h1 className="text-9xl font-bold text-[#00f0ff] font-['Space_Grotesk'] mb-4 opacity-20">404</h1>
                <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
                <p className="text-gray-400 mb-8 text-lg">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/">
                    <Button variant="primary" icon={Home}>
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
