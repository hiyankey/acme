
"use client"
import { useRef, useState } from "react";
import { createUser } from "../lib/actions";



export function CreateUser() {
    const [editMode, setEditMode] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)
    const handleAction = async (data: FormData) => {
        await createUser(data)
        formRef.current?.reset()


    }
    if (!editMode) return <div className="max-w-[600px] mx-auto"><button onClick={() => setEditMode(true)} className="border-[2px] border-blue-300 bg-blue-500 text-white  rounded-[8px] p-1 ">Create user</button></div>
    return (
        <form ref={formRef} action={handleAction} className="space-y-2 flex flex-col max-w-[600px] mx-auto">
            <div className="flex-col flex space-y-1">
                <input type="text" name="name" />
                <input type="text" name="email" />
            </div>

            <button type="submit" className="border-[2px] border-[#444] bg-[#000] text-white  rounded-[8px] p-1">Create</button>
            <button onClick={() => setEditMode(false)} className="border-[2px] border-red-300 text-white bg-red-600 rounded-[8px] p-1 " >Cancel</button>
        </form>
    )
}