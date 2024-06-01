import { useForm, usePage } from "@inertiajs/react";
import Input from "~/components/Input";
import InputError from "~/components/InputError";
import Label from "~/components/Label";
import PrimaryButton from "~/components/PrimaryButton";

export default function ProfileForm() {
    const {auth_user} = usePage().props;
    
    const {data, setData, put, processing, errors} = useForm({
        name: auth_user.fullName,
        email: auth_user.email,
    })

    function submit(e) {
        e.preventDefault();
        put('/updateProfile');
    }

    return (
        <form onSubmit={submit}>
            <div className="mb-3">
                <Label htmlFor="name">Name</Label>
                <Input name="name" value={data.name} onChange={e => setData('name', e.target.value)} />
                <InputError message={errors.name}/>
            </div>
            <div className="mb-6">
                <Label htmlFor="email">Email</Label>
                <Input name="email" value={data.email} onChange={e => setData('email', e.target.value)} />
                <InputError message={errors.email}/>
            </div>
            <div className="flex">
                <PrimaryButton type="submit" processing={processing} disabled={processing}>Save</PrimaryButton>
            </div>
        </form>
    )
}