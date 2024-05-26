import { Head, Link, useForm } from "@inertiajs/react";
import Card from "~/components/Card";
import Input from "~/components/Input";
import InputError from "~/components/InputError";
import Label from "~/components/Label";
import PrimaryButton from "~/components/PrimaryButton";
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
                            <InputError message={errors.name}/>
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" value={data.email} onChange={e => setData('email', e.target.value)} />
                            <InputError message={errors.email}/>
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" name="password" onChange={e => setData('password', e.target.value)} />
                            <InputError message={errors.password}/>
                        </div>
                        <div className="flex">
                            <PrimaryButton type="submit" processing={processing} disabled={processing}>Submit</PrimaryButton>
                            <Link href="/users" className="ml-2 text-sm px-4 py-3 bg-gray-200 text-black rounded-md">Cancel</Link>
                        </div>
                    </form>
                </Card>
            </Layout>
        </>
    )
}