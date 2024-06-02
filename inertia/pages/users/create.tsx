import { Head, Link, useForm } from "@inertiajs/react";
import Card from "~/components/Card";
import Layout from "~/template/layout";
import FormInputs from "./FormInputs";

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
                <div className="flex mb-6">
                    <Link href="/users" className="text-2xl font-semibold mr-2 text-indigo-600">Users /</Link><h2 className="text-2xl font-semibold">Create</h2>
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