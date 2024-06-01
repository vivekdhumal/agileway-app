import { Head, useForm } from "@inertiajs/react";
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
                <Card title="Edit User">
                    <form onSubmit={submit}>
                        <FormInputs data={data} setData={setData} errors={errors} processing={processing}/>
                    </form>
                </Card>
            </Layout>
        </>
    )
}