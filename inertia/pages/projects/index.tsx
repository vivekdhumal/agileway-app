import { Head } from "@inertiajs/react";
import Layout from "~/template/layout";

export default function Index(props: { projects: [] }){
    return (
        <>
            <Layout>
                <Head title="Projects"></Head>
                <div className="mt-0">
                    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                    <table className="min-w-full bg-white rounded shadow">
                        <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.projects.map(project => (
                            <tr key={project.id}>
                            <td className="py-2 px-4 border-b">{project.name}</td>
                            <td className="py-2 px-4 border-b">{project.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </>
    );
}