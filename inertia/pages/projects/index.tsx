import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import Layout from "~/template/layout";

export default function Index(props: { projects: [] }){

    const querString = window.location.search
    const urlParams = new URLSearchParams(querString)


    const [search, setSearch] = useState(urlParams.get('search'));

    const onSearch = (e) => {
        setSearch(e.target.value)

        router.get('/projects', { search: e.target.value}, { replace: true, preserveState: true })
    }
    return (
        <>
            <Layout>
                <Head title="Projects"></Head>
                <div className="mt-0">
                    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                    <div className="flex justify-between mb-6">
                        <input type="text" 
                            placeholder="Search..."
                            value={search}
                            onChange={onSearch}
                            className="px-2 py-1 mr-6 w-1/2 rounded border-none shadow hover:border-none focus:border-none" />
                        <Link href="/users/create" className="px-4 py-2 text-sm bg-indigo-500 text-white rounded flex items-center justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Create New
                        </Link>
                    </div>
                    {
                        props.projects.meta.total == 0  ? (
                            <div className="flex items-center justify-center w-full shadow bg-white p-6 min-h-52">
                                No Projects
                            </div>
                        ) : (
                            <table className="min-w-full text-sm bg-white rounded shadow text-left">
                                <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Name</th>
                                    <th className="py-2 px-4 border-b"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {props.projects.map(project => (
                                    <tr key={project.id}>
                                        <td className="py-2 px-4 border-b">{project.projectName}
                                            {project.projectDescription}</td>
                                        <td className="py-2 px-4 border-b">
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </Layout>
        </>
    );
}