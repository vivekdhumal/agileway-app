import { PencilIcon } from "@heroicons/react/20/solid";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import DeleteButton from "~/components/DeleteButton";
import Pagination from "~/components/Pagination";
import Layout from "~/template/layout";

export default function Index(props: {users: [], pageUrls: []}) {
    function deleteUser(id: number) {
        router.delete(`/users/${id}`)
    }

    const querString = window.location.search
    const urlParams = new URLSearchParams(querString)


    const [search, setSearch] = useState(urlParams.get('search'));

    const onSearch = (e) => {
        setSearch(e.target.value)

        router.get('/users', { search: e.target.value}, { replace: true, preserveState: true })
    }

    return (
        <>
            <Layout>
                <Head title="Users"></Head>
                <h2 className="text-2xl font-semibold mb-4">Users</h2>
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
                    props.users.meta.total == 0 ? (
                        <div className="flex items-center justify-center w-full shadow bg-white p-6 min-h-52">
                            No Users
                        </div>
                    ) : (
                        <>
                            <table className="bg-white rounded text-sm shadow mt-4 table-auto w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Name</th>
                                        <th className="py-2 px-4 border-b">Email</th>
                                        <th className="py-2 px-4 border-b"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.users.data.map(user => (
                                        <tr key={user.id} className="hover:bg-gray-100">
                                            <td className="py-2 px-4 border-b">{user.fullName}</td>
                                            <td className="py-2 px-4 border-b">{user.email}</td>        
                                            <td className="py-2 px-4 border-b">
                                                <div className="flex items-center justify-end">
                                                    <Link href={`/users/${user.id}/edit`} title="Edit" className="mr-3 text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </Link>
                                                    <DeleteButton key={user.id} onConfirm={e => deleteUser(user.id)}/>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination meta={props.users.meta} pageUrl={props.pageUrls}></Pagination>
                        </>
                    )
                }

                
            </Layout>
        </>
    )
}