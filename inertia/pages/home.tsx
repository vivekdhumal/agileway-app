import { Head } from '@inertiajs/react'
import Layout from '~/template/layout'

export default function Home(props: { version: string }) {
  return (
    <>
      <Layout>
        <Head title="Home" />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cards for different metrics */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-medium">Total Projects</h3>
              <p className="text-2xl">24</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-medium">Active Projects</h3>
              <p className="text-2xl">12</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-medium">Teams</h3>
              <p className="text-2xl">5</p>
            </div>
          </div>
      </div>
      </Layout>
    </>
  )
}