export default function ProjectView({project}) {

    console.log(project.current)

    return (
        <>
            <div>{project.current.title}</div>
        </>
    )
}