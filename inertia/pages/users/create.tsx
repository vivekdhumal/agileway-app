import { Head, useForm } from "@inertiajs/react";
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
                <Card title="Create User">
                    <form onSubmit={submit}>
                        <FormInputs data={data} setData={setData} errors={errors} processing={processing}/>
                    </form>
                </Card>
            </Layout>
        </>
    )
}