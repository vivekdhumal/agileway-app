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
                    <Link href="/users/create" className="px-4 py-2 text-sm bg-indigo-500 text-white rounded">Create New</Link>
                </div>
                <table className="bg-white rounded shadow mt-4 table-auto w-full text-left">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.users.data.map(user => (
                        <tr key={user.id}>
                            <td className="py-2 px-4 border-b">{user.fullName}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b text-right">
                                <Link href={`/users/${user.id}/edit`} className="px-4 py-2 bg-indigo-500 text-sm text-white rounded mr-2">Edit</Link>
                                <DeleteButton key={user.id} onConfirm={e => deleteUser(user.id)}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Pagination meta={props.users.meta} pageUrl={props.pageUrls}></Pagination>
            </Layout>
        </>
    )
}