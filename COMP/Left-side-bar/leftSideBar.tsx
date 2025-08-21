import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const sidebarLinks = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/announcement', label: 'Announcement' },
  { href: '/dashboard/Caf-details', label: 'Caf-Details' },
  { href: '/dashboard/campus-details', label: 'Campus-details' },
];

export default function Left_Side_Bar({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className='flex min-h-screen'>
      {/* Sidebar */}
      <aside className='w-64 bg-gray-900 text-white p-4'>
        <h2 className='text-xl font-bold mb-4'>Dashboard</h2>
        <nav className='space-y-2'>
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md ${
                router.pathname === link.href
                  ? 'bg-gray-700 font-semibold'
                  : 'hover:bg-gray-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Page Content */}
      <main className='flex-1 p-6'>{children}</main>
    </div>
  );
}
