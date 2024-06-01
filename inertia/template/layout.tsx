import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";

export default function Layout({children}) {
    const {url, component} = usePage()
    const { auth_user } = usePage().props

    return (
        <div className="min-h-screen flex flex-col text-gray-700">
            <header className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-2 flex justify-between">
                <h1 className="text-2xl font-bold ml-2">AgileWay</h1>
                {/* <p className="mr-4 text-gray-500 cursor-pointer">{user.fullName}</p> */}
                <Popover>
                    <PopoverButton className="mr-4 flex items-center text-sm/2 font-semibold text-gray-400 focus:outline-none data-[active]:text-gray-500 data-[hover]:text-gray-500 data-[focus]:outline-1 data-[focus]:outline-white">
                        {auth_user.fullName}
                        <svg
                            className="ms-2 -me-0.5 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </PopoverButton>
                    <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <PopoverPanel
                        anchor="bottom"
                        className="w-48 mt-2 bg-white shadow rounded opacity-100 text-sm/6 [--anchor-gap:var(--spacing-5)]"
                        >
                        <div className="py-2">
                            <Link href="/profile" className="block py-2 px-3 border-b">
                                <p className="font-semibold text-gray-500 hover:text-gray-900">Profile</p>
                            </Link>
                            <Link className="block py-2 px-3" href="/logout" method="post">
                                <p className="font-semibold text-gray-500 hover:text-gray-900">Logout</p>
                            </Link>
                        </div>
                        </PopoverPanel>
                    </Transition>
                </Popover>
            </header>
            <div className="flex flex-1">
                <aside className="w-64 bg-white-200 border-r border-gray-100 p-4">
                    <nav>
                        <ul>
                        <li className="my-2"><Link href="/" className={`block p-2 ${url === '/' ? 'bg-gray-100 rounded' : ''}`}>Dashboard</Link></li>
                        <li className="my-2"><Link href="/projects" className={`block p-2 ${url === '/projects' ? 'bg-gray-100 rounded' : ''}`}>Projects</Link></li>
                        <li className="my-2"><Link href="/users" className={`block p-2 ${url === '/users' ? 'bg-gray-100 rounded' : ''}`}>Users</Link></li>
                        <li className="my-2"><Link href="/" className={`block p-2 ${url === '/settings' ? 'bg-gray-100 rounded' : ''}`}>Settings</Link></li>
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 p-6 bg-gray-50">
                    {children}
                </main>
            </div>
            <footer className="border-t border-gray-100 p-2 text-sm text-center text-gray-400">
                &copy; 2024 AgileWay Inc.
            </footer>
        </div>
    );
}