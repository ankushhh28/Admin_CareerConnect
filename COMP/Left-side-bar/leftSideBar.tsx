'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Home, Bell, Users, Building, UserPlus } from 'lucide-react';

const sidebarLinks = [
  { href: '/dashboard', label: 'Overview', icon: <Home size={20} /> },
  {
    href: '/dashboard/announcement',
    label: 'Announcement',
    icon: <Bell size={20} />,
  },
  {
    href: '/dashboard/Caf-details',
    label: 'Caf-Details',
    icon: <Users size={20} />,
  },
  {
    href: '/dashboard/campus-details',
    label: 'Campus-details',
    icon: <Building size={20} />,
  },
  {
    href: '/dashboard/add-faculty',
    label: 'Add-Faculty',
    icon: <UserPlus size={20} />,
  },
];

export default function Left_Side_Bar({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getUserInitials = (fullName: string) => {
    const names = fullName.split(' ');
    return (names[0][0] + (names[1]?.[0] || '')).toUpperCase();
  };

  const SidebarContent = (
    <nav className='flex flex-col gap-2'>
      {sidebarLinks.map((link) => {
        const isActive = router.pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center p-2 pl-3 rounded-md transition-all duration-200
              ${isActive ? 'bg-gray-500 font-semibold shadow-inner' : 'hover:bg-gray-800 hover:shadow-md'}`}
          >
            <div className='text-white w-6 flex-shrink-0 flex justify-center'>
              {link.icon}
            </div>
            <span
              className={`text-sm text-white ml-2 transition-all duration-300 overflow-hidden whitespace-nowrap ${
                hover || isMobile ? 'opacity-100 w-auto' : 'opacity-0 w-0'
              }`}
            >
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className='flex min-h-screen bg-gray-100 dark:bg-gray-900 overflow-x-hidden'>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-gray-900 text-white shadow-lg h-screen transition-all duration-300 ${
          hover ? 'w-64 overflow-y-auto' : 'w-20 overflow-hidden'
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='flex flex-col flex-1 p-4'>
          <div className='mb-2 flex mt-3 items-center justify-center md:justify-start'>
            <Home size={24} className='text-white ml-3 flex-shrink-0' />
            <span
              className={`ml-2 font-bold text-xl mt-1 text-white transition-all duration-300 overflow-hidden whitespace-nowrap ${
                hover ? 'opacity-100 w-auto' : 'opacity-0 w-0'
              }`}
            >
              Dashboard
            </span>
          </div>
          {/* Divider */}
          <div
            className={`border-t border-gray-700 my-3 transition-all duration-300 ${
              hover ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>

          {SidebarContent}
        </div>

        <div className='relative p-4 flex flex-col items-center md:items-start'>
          <div className='flex items-center w-full'>
            <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0'>
              {getUserInitials('John Doe')}
            </div>

            <div
              className={`flex flex-col ml-2 transition-all duration-300 overflow-hidden whitespace-nowrap ${
                hover ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'
              }`}
            >
              <span className='text-white font-semibold'>John Doe</span>
              <span className='text-gray-400 text-xs'>
                john.doe@example.com
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isMobile && (
        <div className='flex flex-col relative'>
          <div className='h-12 flex items-center justify-start bg-gray-900 text-white px-4'>
            <Menu
              className='cursor-pointer'
              onClick={() => setMobileOpen(true)}
            />
          </div>

          <div
            className={`fixed inset-0 z-50 w-full h-screen bg-gray-900 text-white p-6 flex flex-col transform transition-transform duration-300 ${
              mobileOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className='flex justify-end mb-6'>
              <X
                className='cursor-pointer'
                onClick={() => setMobileOpen(false)}
              />
            </div>
            <div className='flex flex-col flex-1 overflow-y-auto'>
              <div className='mb-2 font-bold text-2xl flex items-center gap-2'>
                <Home size={24} /> Dashboard
              </div>
              {/* Divider */}
              <div className='border-t border-gray-700 my-3'></div>
              {SidebarContent}
            </div>
            {/* Profile Section */}
            <div className='relative p-4 flex flex-col items-center md:items-start'>
              <div className='flex items-center w-full gap-2'>
                {/* Avatar always visible */}
                <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0'>
                  {getUserInitials('John Doe')}{' '}
                </div>

                <div className='flex flex-col'>
                  <span className='text-white font-semibold'>John Doe</span>
                  <span className='text-gray-400 text-xs'>
                    john.doe@example.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className='flex-1'>{children}</main>
    </div>
  );
}
