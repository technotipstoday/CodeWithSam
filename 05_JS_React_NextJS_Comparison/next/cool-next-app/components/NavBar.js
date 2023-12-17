import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-between">
                <li className="hover:text-blue-400"><Link href="/">Home</Link></li>
                <li className="hover:text-blue-400"><Link href="/user">User</Link></li>
                <li className="hover:text-blue-400"><Link href="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
