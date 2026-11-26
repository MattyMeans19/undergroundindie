import { profileProject } from "@/lib/definitions"
import Image from "next/image"

interface Projects {
    projects: Array<profileProject>  
}

export default function ProfileProjects(projects: Projects){
    const projectList = projects.projects
    return(
        <div className="w-full flex flex-col gap-10">
            <span className="text-center text-xl text-app-primary">*Projects can be added/edited under <strong className="text-app-secondary">My Projects Tab</strong> in the menu.</span>
            {projectList.map((project) => (
                <div key={project.id} className="w-full bg-app-card flex flex-col gap-3 border-10 border-app-border rounded-2xl p-3">
                    <h1 className="text-app-accent text-4xl text-center underline">{project.title}</h1>
                    <h2 className="text-2xl text-app-accent text-center">{project.role}</h2>
                    <Image src={project.image} alt="Project Image" width={800} height={800} className="place-self-center"/>
                    <span className="text-app-secondary text-3xl text-center">{project.description}</span>
                </div>
            ))}
        </div>
    )
}