import { Link } from "@inertiajs/react";
import Input from "~/components/Input";
import InputError from "~/components/InputError";
import Label from "~/components/Label";
import PrimaryButton from "~/components/PrimaryButton";

const FormInputs = ({data, setData, processing, errors}: {data: object, setData: any, processing: boolean, errors: object}) => {
    return (
        <>
        <div className="mb-3">
            <Label htmlFor="name">Name</Label>
            <Input name="name" value={data.name} onChange={e => setData('name', e.target.value)} />
            <InputError message={errors.name}/>
        </div>
        <div className="mb-3">
            <Label htmlFor="email">Email</Label>
            <Input name="email" value={data.email} onChange={e => setData('email', e.target.value)} />
            <InputError message={errors.email}/>
        </div>
        <div className="mb-6">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" onChange={e => setData('password', e.target.value)} />
            <InputError message={errors.password}/>
        </div>
        <div className="flex">
            <PrimaryButton type="submit" processing={processing} disabled={processing}>Submit</PrimaryButton>
            <Link href="/users" className="ml-2 text-sm px-4 py-3 bg-gray-200 text-black rounded-md">Cancel</Link>
        </div>
        </>
    )
}

export default FormInputs;