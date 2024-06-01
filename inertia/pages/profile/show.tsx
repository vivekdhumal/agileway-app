import { Head, usePage } from "@inertiajs/react";
import Card from "~/components/Card";
import Layout from "~/template/layout";
import ProfileForm from "./ProfileForm";
import PasswordForm from "./PasswordForm";

export default function Show() {
    const {success_message} = usePage().props

    return (
        <>
            <Layout>
                <Head title="Profile"/>
                
                {success_message && (
                    <div className="p-3 bg-green-100 w-full mb-6 shadow text-sm rounded">
                        {success_message}
                    </div>
                )}

                <Card title="Profile" className="mb-6">
                    <ProfileForm/>
                </Card>
                <Card title="Change Password">
                    <PasswordForm/>
                </Card>
            </Layout>
        </>
    )
}