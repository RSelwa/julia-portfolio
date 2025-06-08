import { projects } from "@/constants"
import { redirect } from "next/navigation"

const Page = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    redirect("/404")
  }

  return <div className="min-h-full-height">Page {project.title}</div>
}

export default Page
