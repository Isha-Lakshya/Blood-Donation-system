import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar: React.FC = () => {
  // State to track if the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-primary text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Logo</Link>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="px-4 py-2 rounded-md transition-colors hover:underline">Home</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/" className="block px-4 py-2">
                  Home
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="px-4 py-2 rounded-md transition-colors hover:underline">About Us</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/about" className="block px-4 py-2">
                  About Us
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dropdown for Looking for Blood */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="px-4 py-2 rounded-md transition-colors hover:underline">Looking for Blood</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/login" className="block px-4 py-2">
                  Looking for Blood
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dropdown for Donate Blood */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="px-4 py-2 rounded-md transition-colors hover:underline">Donate Blood</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/donate" className="block px-4 py-2">
                  Donate Blood
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Login/Register combined link */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="px-4 py-2 rounded-md transition-colors hover:underline">
                Login / Register
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link to="/login" className="block px-4 py-2">
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/register" className="block px-4 py-2">
                  Register
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <Button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="bg-foregorund text-background w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="text-white">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/" className="block px-4 py-2">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about" className="block px-4 py-2">
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/login" className="block px-4 py-2">
                  Login / Register
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
