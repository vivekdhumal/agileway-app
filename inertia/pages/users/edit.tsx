import { Head, Link, useForm } from "@inertiajs/react";
import Card from "~/components/Card";
import Input from "~/components/Input";
import InputError from "~/components/InputError";
import Label from "~/components/Label";
import PrimaryButton from "~/components/PrimaryButton";
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
                <Head title="Edit User"></Head>
                <Card title="Edit User">
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