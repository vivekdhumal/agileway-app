import { useForm } from "@inertiajs/react";
import Input from "~/components/Input";
import InputError from "~/components/InputError";
import Label from "~/components/Label";
import PrimaryButton from "~/components/PrimaryButton";

export default function PasswordForm() {
    const {data, setData, put, processing, errors} = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    })

    function submit(e) {
        e.preventDefault();
        put('/updatePassword');
    }

    return (
        <form onSubmit={submit}>
            <div className="mb-3">
                <Label htmlFor="name">Current Password</Label>
                <Input name="current_password" type="password" onChange={e => setData('current_password', e.target.value)} />
                <InputError message={errors.current_password}/>
            </div>
            <div className="mb-3">
                <Label htmlFor="password">New Password</Label>
                <Input name="password" type="password" onChange={e => setData('password', e.target.value)} />
                <InputError message={errors.password}/>
            </div>
            <div className="mb-6">
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input name="password_confirmation" type="password" onChange={e => setData('password_confirmation', e.target.value)} />
                <InputError message={errors.password_confirmation}/>
            </div>
            <div className="flex">
                <PrimaryButton type="submit" processing={processing} disabled={processing}>Save</PrimaryButton>
            </div>
        </form>
    )
}