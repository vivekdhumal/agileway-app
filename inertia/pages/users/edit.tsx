import { Head, Link, useForm } from "@inertiajs/react";
import Card from "~/components/Card";
import Layout from "~/template/layout";
import FormInputs from "./FormInputs";

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
                <div className="flex mb-6">
                    <Link href="/users" className="text-2xl font-semibold mr-2 text-indigo-600">Users /</Link><h2 className="text-2xl font-semibold">Edit</h2>
                </div>
                <Card className="w-2/4">
                    <form onSubmit={submit}>
                        <FormInputs data={data} setData={setData} errors={errors} processing={processing}/>
                    </form>
                </Card>
            </Layout>
        </>
    )
}