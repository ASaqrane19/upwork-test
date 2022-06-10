import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon, BellIcon } from '@heroicons/react/outline'
import { Link } from 'react-scroll';

const navigation = [
    { name: 'Explore', href: 'explore', current: false },
    { name: 'My Courses', href: 'courses', current: true },
    { name: 'Become an instructor', href: 'instructor', current: false }
];

export default function Example() {
    const router = useRouter();
    const [pageLoading, setPageLoading] = React.useState(false);
    const handleMint = () => {
        setPageLoading(true);
        router.push(`/mint`);
    }

    return (
        <Disclosure as="nav" className="border-b-2 border-[#1b3345] bg-[#0000001A]">
            {({ open }) => (
                <>
                    <div className="mx-auto px-2">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex items-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center ml-10">
                                    <div className='text-3xl font-bold'>Blockchain</div>
                                </div>
                            </div>
                            <div className="hidden h-full md:block md:ml-6">
                                <div className="flex space-x-4 h-full items-center">
                                    {navigation.map((item) => (
                                        <div
                                            className={clsx(
                                                item.current ? 'border-b-2 border-[#00FFC4] text-[#00FFC4]' : 'text-white hover:text-green-600 hover:border-b-2 hover:border-green-600',
                                                'cursor-pointer px-3 py-2 text-base font-medium h-full flex items-center justify-center'
                                            )}
                                        >
                                            <div className=''>{item.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 mr-6 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="bg-gray-600 text-white p-2 rounded-full mr-2">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-8 w-8" aria-hidden="true" />
                                </div>
                                <div className='flex items-center justify-between rounded-full bg-gray-600 p-2'>
                                    <div className='rounded-full w-8 h-8 mr-2'>
                                        <img className='rounded-full w-8 h-8' src='./images/header/avatar.jpg' />
                                    </div>
                                    <div className='tex-sm'>Kaine Shutler</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    className={clsx(
                                        item.current ? 'bg-gray-900/80 text-white' : 'text-gray-300 hover:bg-gray-700/80 hover:text-white',
                                        'block px-3 py-2 border border-transparent rounded-md text-base font-medium backdrop-blur-sm cursor-pointer hover:border hover:border-main'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <Link
                                        to={item.href}
                                        spy={true}
                                        smooth={true}
                                    >
                                        {item.name}
                                    </Link>
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
