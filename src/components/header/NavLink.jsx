export default function NavLink({ to, children }) {
    return (
        <li>
            <a
                href={to}
                className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3 block font-bold text-1xl text-white hover:text-[#b5d3d6]"
            >
                {children}
            </a>
        </li>
    );
}
