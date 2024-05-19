import { Head, Link, useForm } from "@inertiajs/react";
import Layout from "~/template/layout";

export default function Edit(props: {user: {}}) {
    const { data, setData, put, processing, errors } = useForm({
        name: props.user.fullName,
        email: props.user.email,
        password: '',
    });

    function submit(e) {
        e.preventDefault()
        put(`/users/${props.user.id}`)
    }

    return (
        <>
            <Layout>
                <Head title="Create User"></Head>
                <div className="py-2 border border-gray-200 rounded-md shadow">
                    <div className="border-b border-gray-200 pb-3">
                        <h3 className="ml-4 text-2xl font-semibold">Edit User</h3>
                    </div>
                    <form onSubmit={submit} className="p-4">
                        <div className="mb-3">
                            <label htmlFor="name" className="font-semibold text-gray-500">Name</label>
                            <input type="text" name="name" id="name" className="mt-2 border w-full border-gray-200 p-2 rounded-md" value={data.name} onChange={e => setData('name', e.target.value)} />
                            {errors.name && <span className="text-sm text-red-400">{errors.name}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="font-semibold text-gray-500">Email</label>
                            <input type="text" name="email" id="email" className="mt-2 border w-full border-gray-200 p-2 rounded-md" value={data.email} onChange={e => setData('email', e.target.value)} />
                            {errors.email && <span className="text-sm text-red-400">{errors.email}</span>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="font-semibold text-gray-500">Password</label>
                            <input type="password" name="password" id="password" className="mt-2 border w-full border-gray-200 p-2 rounded-md" onChange={e => setData('password', e.target.value)} />
                            {errors.password && <span className="text-sm text-red-400">{errors.password}</span>}
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md mr-3" disabled={processing}>Submit</button>
                        <Link href="/users" className="px-4 py-3 bg-gray-200 text-black rounded-md">Cancel</Link>
                    </form>
                </div>
            </Layout>
        </>
    )
}