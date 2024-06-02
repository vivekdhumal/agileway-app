import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";

export default function Layout({children}) {
    const {url, component} = usePage()
    const { auth_user } = usePage().props

    return (
        <div className="min-h-screen flex flex-col text-gray-700">
            <header className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-3 flex justify-between items-center">
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
                <aside className="w-56 bg-white-200 border-r border-gray-100 p-4">
                    <nav>
                        <ul>
                        <li className={`my-4 px-6 flex items-center ${url === '/' ? 'bg-gray-100 rounded' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <Link href="/" className={`block p-2`}>Dashboard</Link>
                        </li>
                        <li className={`my-4 px-6 flex items-center ${url.includes('/projects') ? 'bg-gray-100 rounded' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                            <Link href="/projects" className={`block p-2`}>Projects</Link>
                        </li>
                        <li className={`my-4 px-6 flex items-center ${url.includes('/users') ? 'bg-gray-100 rounded' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            <Link href="/users" className={`block p-2`}>Users</Link>
                        </li>
                        <li className={`my-4 px-6 flex items-center ${url === '/settings' ? 'bg-gray-100 rounded' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <Link href="/" className={`block p-2`}>Settings</Link>
                        </li>
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