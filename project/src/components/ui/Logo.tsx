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
        src="https://trinitetech.com/wp-content/uploads/2023/12/Logo-trinity.webp"
        alt="TrinityTech Logo"
        className="mr-6 ml-8 h-28 mt-4" // Increased height from h-20 to h-28
      />
    </div>
  );
};
export default Logo;