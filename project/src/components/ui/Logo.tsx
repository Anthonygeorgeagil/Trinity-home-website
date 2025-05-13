import React from 'react';
import { Database } from 'lucide-react';
import trinity from '../ui/trinity.png'
interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={trinity}
        alt="TrinityTech Logo"
        className="mr-6 h-20 mt-4" // Adjust height as needed
      />
      
    </div>
  );
};
export default Logo;