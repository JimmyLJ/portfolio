import { projects } from "../../data";
import SectionHeading from "../Helper/SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        title_1="案例"
        title_2="项目"
        description="近期的工作成果与个人项目精选"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
