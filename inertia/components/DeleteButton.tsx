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
            <Button onClick={open} className="px-4 py-1 bg-red-500 text-white rounded-md">Delete</Button>
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