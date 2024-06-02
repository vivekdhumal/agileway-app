import { useState } from "react"
import {Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild,} from "@headlessui/react"

export default function DeleteButton(props: {onConfirm}) {
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <Button onClick={open} className="text-gray-500" title="Delete">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </Button>
            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-lg bg-gray/5 p-6 bg-white shadow">
                                    <DialogTitle as="h3" className="text-base/7 text-xl font-medium text-gray">
                                        Confirm
                                    </DialogTitle>
                                    <p className="mt-2 text-sm/2 text-gray/50">
                                        Do you really want to delete this record?
                                    </p>
                                    <div className="mt-8 text-right">
                                        <Button
                                        className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-600 data-[open]:bg-red-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                        onClick={props.onConfirm}
                                        >
                                        Delete
                                        </Button>
                                        <Button
                                        className="ml-4 inline-flex items-center gap-2 rounded-md bg-gray-200 py-1.5 px-3 text-sm/6 font-semibold text-gray shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-300 data-[open]:bg-gray-300 data-[focus]:outline-1 data-[focus]:outline-white"
                                        onClick={close}
                                        >
                                        Close
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}