import { Head } from '@inertiajs/react'

export default function Home(props: { version: string }) {
  return (
    <>
      <Head title="AgileWay" />

      <div className="container">
        <div className="title">AgileWay</div>

        <span>
          Version: {props.version}
        </span>
      </div>
    </>
  )
}