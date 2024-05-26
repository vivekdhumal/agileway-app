import { Head, useForm, usePage } from "@inertiajs/react";
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
                    <h3 className="text-center font-bold text-2xl mb-2">Log in</h3>
                    <form className="space-y-6" onSubmit={login}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.email && <span className="text-sm text-red-400">{errors.email}</span>}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                                </label>
                                <div className="text-sm">
                                {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a> */}
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                onChange={e => setData('password', e.target.value)}
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {errors.password && <span className="text-sm text-red-400">{errors.password}</span>}
                        </div>

                        <div>
                            <PrimaryButton type="submit"
                                disabled={processing}
                                processing={processing} className="w-full">
                                    Log In
                            </PrimaryButton>
                            {/* <button
                                type="submit"
                                disabled={processing}
                                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                                leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                                focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${processing ? 'opacity-30 cursor-disabled' : ''}`}
                            >
                                { processing && (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>) }
                                Log in
                            </button> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}