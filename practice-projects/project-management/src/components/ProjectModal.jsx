import { useState, useRef } from "react";

export default function ProjectModal({ func, setViewState }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [error, setError] = useState("");
    const timeoutRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim() || !description.trim() || !dueDate) {
            setError("All fields are required.");
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => setError(""), 2000);
            return;
        }
        func({ title, description, dueDate });
    }

    return (
        <div className="bg-transparent mt-8">
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    className="border-2 border-stone-700 rounded-md p-2 w-full mb-4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Description</label>
                <textarea
                    className="border-2 border-stone-700 rounded-md p-2 w-full mb-4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Due Date</label>
                <input
                    type="date"
                    className="border-2 border-stone-700 rounded-md p-2 w-full mb-4"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                {error && (
                    <div className="text-red-600 mb-2">{error}</div>
                )}
                <button type="button" className="px-4" onClick={() => setViewState('default')}>Cancel</button>
                <button
                    type="submit"
                    className="px-5 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                >
                    Save
                </button>
            </form>
        </div>
    );
}