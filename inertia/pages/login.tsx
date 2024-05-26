import { Head, useForm, usePage } from "@inertiajs/react";
import Input from "~/components/Input";
import InputError from "~/components/InputError";
import Label from "~/components/Label";
import PrimaryButton from "~/components/PrimaryButton";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: ''
    })

    const {error_message} = usePage().props;

    function login(e) {
        e.preventDefault()
        post('/login')
    }

    return (
        <>
            <Head title="Login"></Head>
            <div className="bg-gray-100 min-h-screen flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 rounded shadow">
                    <h3 className="text-center font-bold text-2xl mb-2 text-indigo-600">Log in</h3>
                    { error_message ? (
                        <div className="text-center bg-red-100 py-2 px-1 text-red-500 rounded text-sm font-normal">{error_message}</div>
                    ) : null}
                    <form className="space-y-6 mt-4" onSubmit={login}>
                        <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input name="email" value={data.email} onChange={e => setData('email', e.target.value)} />
                            <InputError message={errors.email}/>
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" name="password" onChange={e => setData('password', e.target.value)} />
                            <InputError message={errors.password}/>
                        </div>
                        <div>
                            <PrimaryButton type="submit"
                                disabled={processing}
                                processing={processing} className="w-full">
                                    Log In
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}