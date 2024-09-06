import type { EduInfo } from "@/data/type";
export default function EduSection({ eduInfo }: { eduInfo: EduInfo[] }) {
  return (
    <section className="text-base">
      <ul>
        {eduInfo.map((edu, index) => (
          <li key={index}>
            {edu.school} | {edu.background} | {edu.major} | {edu.timeRange}
          </li>
        ))}
      </ul>
    </section>
  );
}
