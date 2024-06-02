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

                <h2 className="text-xl font-semibold">Profile Information</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Update your account's profile information and email address.</p>
                
                <Card className="mb-6 mt-4">
                    <ProfileForm/>
                </Card>
                
                <h2 className="text-xl font-semibold">Change Password</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Ensure your account is using a long, random password to stay secure.</p>

                <Card className="mt-4">
                    <PasswordForm/>
                </Card>
            </Layout>
        </>
    )
}