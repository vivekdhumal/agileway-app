import { Link, usePage } from "@inertiajs/react";

export default function Layout({children}) {
    const {url, component} = usePage()
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-2">
                <h1 className="text-2xl font-bold ml-2">AgileWay</h1>
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
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
            <footer className="border-t border-gray-100 p-4 text-center text-gray-400">
                &copy; 2024 AgileWay Inc.
            </footer>
        </div>
    );
}