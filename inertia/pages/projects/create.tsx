import { Head, Link, useForm } from "@inertiajs/react";
import Card from "~/components/Card";
import Input from "~/components/Input";
import InputError from "~/components/InputError";
import Label from "~/components/Label";
import Layout from "~/template/layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from "~/components/PrimaryButton";


export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        project_name: '',
        project_description: '',
        start_date: '',
        end_date: '',
    });

    function submit(e) {
        e.preventDefault()

        post('/projects')
    }
    
    return (
        <>
            <Layout>
                <Head title="Create Project"></Head>
                <div className="flex mb-6">
                    <Link href="/projects" className="text-2xl font-semibold mr-2 text-indigo-600">Projects /</Link><h2 className="text-2xl font-semibold">Create</h2>
                </div>
                <Card className="w-2/4">
                    <form onSubmit={submit} autoComplete="off">
                        <div className="mb-3">
                            <Label htmlFor="project_name">Project Name</Label>
                            <Input name="project_name" value={data.project_name} onChange={e => setData('project_name', e.target.value)} />
                            <InputError message={errors.project_name}/>
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="project_description">Project Description</Label>
                            <textarea name="project_description" className="mt-2 text-sm border border-2 hover:border-indigo-500 focus:border-indigo-500 w-full border-gray-200 p-2 rounded-md" onChange={e => setData('project_description', e.target.value)}>{data.project_description}</textarea>
                            <InputError message={errors.project_description}/>
                        </div>
                        <div className="mb-6 flex items-center">
                            <div className="mr-6">
                                <Label htmlFor="start_date" className="block">Start Date</Label>
                                <DatePicker name="start_date" selected={data.start_date} dateFormat="dd-MM-YYYY" onChange={(date) => setData('start_date', date)} className="mt-2 text-sm border border-2 hover:border-indigo-500 focus:border-indigo-500 w-full border-gray-200 p-2 rounded-md block" />
                                <InputError message={errors.start_date}/>
                            </div>

                            <div>
                                <Label htmlFor="end_date" className="block">End Date</Label>
                                <DatePicker name="end_date" selected={data.end_date} dateFormat="dd-MM-YYYY" onChange={(date) => setData('end_date', date)} className="mt-2 text-sm border border-2 hover:border-indigo-500 focus:border-indigo-500 w-full border-gray-200 p-2 rounded-md block" />
                                <InputError message={errors.end_date}/>
                            </div>
                        </div>
                        <div className="flex">
                            <PrimaryButton type="submit" processing={processing} disabled={processing}>Submit</PrimaryButton>
                            <Link href="/users" className="ml-4 text-sm px-4 py-3 bg-gray-200 text-black rounded-md">Cancel</Link>
                        </div>
                    </form>
                </Card>
            </Layout>
        </>
    )
}