import type { Skill } from "@/data/index";
export default function SkillSection({ skills }: { skills: Skill[] }) {
  return (
    <section>
      <ul>
        {skills.map((skill, index) => (
          <li className="text-lg" key={index}>
            <span className="font-bold">{skill.label}：</span>
            <span>{skill.skills.join("、")}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
