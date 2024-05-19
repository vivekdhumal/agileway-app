import { Head, Link } from "@inertiajs/react";
import Layout from "~/template/layout";

export default function Index(props: {users: []}) {
    return (
        <>
            <Layout>
                <Head title="Users"></Head>
                <div className="flex justify-between items-baseline">
                    <h2 className="text-2xl font-semibold mb-4">Users</h2>
                    <Link href="/users/create" className="px-4 py-2 bg-blue-600 text-white rounded">Create New</Link>
                </div>
                <table className="min-w-full bg-white rounded shadow mt-4">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.users.map(user => (
                        <tr key={user.id}>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Layout>
        </>
    )
}