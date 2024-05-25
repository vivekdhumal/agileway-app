import { Head, Link, useForm } from "@inertiajs/react";
import Card from "~/components/Card";
import Input from "~/components/Input";
import Label from "~/components/Label";
import Layout from "~/template/layout";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
    });

    function submit(e) {
        e.preventDefault()
        post('/users')
    }

    return (
        <>
            <Layout>
                <Head title="Create User"></Head>
                <Card title="Create User">
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <Label htmlFor="name">Name</Label>
                            <Input name="name" value={data.name} onChange={e => setData('name', e.target.value)} />
                            {/* <input type="text" name="name" id="name" className="mt-2 border w-full border-gray-200 p-2 rounded-md" value={data.name} onChange={e => setData('name', e.target.value)} /> */}
                            {errors.name && <span className="text-sm text-red-400">{errors.name}</span>}
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" value={data.email} onChange={e => setData('email', e.target.value)} />
                            {/* <input type="text" name="email" id="email" className="mt-2 border w-full border-gray-200 p-2 rounded-md" value={data.email} onChange={e => setData('email', e.target.value)} /> */}
                            {errors.email && <span className="text-sm text-red-400">{errors.email}</span>}
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="password">Password</Label>
                            <Input name="password" onChange={e => setData('password', e.target.value)} />
                            {/* <input type="password" name="password" id="password" className="mt-2 border w-full border-gray-200 p-2 rounded-md" onChange={e => setData('password', e.target.value)} /> */}
                            {errors.password && <span className="text-sm text-red-400">{errors.password}</span>}
                        </div>
                        <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md mr-3" disabled={processing}>Submit</button>
                        <Link href="/users" className="px-4 py-3 bg-gray-200 text-black rounded-md">Cancel</Link>
                    </form>
                </Card>
            </Layout>
        </>
    )
}