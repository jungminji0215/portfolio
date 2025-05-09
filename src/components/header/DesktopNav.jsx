export default function DesktopNav({ menuItems }) {
  return (
    <ul className="bg-opacity-50 font-subtitle mr-28 hidden items-center gap-4 rounded-full bg-white px-8 py-3 text-lg shadow-sm md:flex">
      {menuItems.map(({ label, href }) => (
        <li key={href}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  );
}
