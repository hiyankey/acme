
"use client"
import { ComponentProps, ElementType, PropsWithRef, useRef, useState } from "react";
import { createUser } from "../lib/actions";



export function CreateUser() {
    const [editMode, setEditMode] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)
    const handleAction = async (data: FormData) => {
        await createUser(data)
        formRef.current?.reset()


    }
    if (!editMode) return <button onClick={() => setEditMode(true)}>Create user</button>
    return (
        <form ref={formRef} action={handleAction}>
            <input type="text" name="name" />
            <input type="text" name="email" />
            <button type="submit">Create</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
        </form>
    )
}