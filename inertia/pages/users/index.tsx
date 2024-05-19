import { Head, Link } from "@inertiajs/react";
import Layout from "~/template/layout";

export default function Index(props: {users: []}) {
    return (
        <>
            <Layout>
                <Head title="Users"></Head>
                <div className="flex justify-between items-baseline">
                    <h2 className="text-2xl font-semibold mb-4">Users</h2>
                    <Link href="/users/create" className="px-4 py-2 bg-blue-500 text-white rounded-md">Create New</Link>
                </div>
                <table className="bg-white rounded shadow mt-4 table-auto w-full">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.users.map(user => (
                        <tr key={user.id}>
                            <td className="py-2 px-4 border-b">{user.fullName}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">
                                <Link href={`/users/${user.id}/edit`} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Edit</Link>
                                <a href="" className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Layout>
        </>
    )
}