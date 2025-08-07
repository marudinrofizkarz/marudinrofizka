import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faUsers, faChartLine, faPenSquare, faCode, faDatabase, faMagnifyingGlass, faDisplay, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faLaravel, faFacebook, faCodiepie, faJs, faReact, faHtml5, faCss3Alt, faBootstrap, faPhp, faVuejs } from '@fortawesome/free-brands-svg-icons';

const skillsData = [
  { name: "Digital Marketing", icon: <FontAwesomeIcon icon={faBullhorn} className="w-10 h-10 text-primary" /> },
  { name: "Teamwork", icon: <FontAwesomeIcon icon={faUsers} className="w-10 h-10 text-primary" /> },
  { name: "Analytical Skills", icon: <FontAwesomeIcon icon={faChartLine} className="w-10 h-10 text-primary" /> },
  { name: "Laravel", icon: <FontAwesomeIcon icon={faLaravel} className="w-10 h-10 text-primary" /> },
  { name: "Meta Ads", icon: <FontAwesomeIcon icon={faFacebook} className="w-10 h-10 text-primary" /> },
  { name: "Codeigniter", icon: <FontAwesomeIcon icon={faCodiepie} className="w-10 h-10 text-primary" /> },
  { name: "Presentation Skills", icon: <FontAwesomeIcon icon={faDisplay} className="w-10 h-10 text-primary" /> },
  { name: "SEO Optimization", icon: <FontAwesomeIcon icon={faMagnifyingGlass} className="w-10 h-10 text-primary" /> },
  { name: "Content Writing", icon: <FontAwesomeIcon icon={faPenSquare} className="w-10 h-10 text-primary" /> },
  { name: "Next.js", icon: <FontAwesomeIcon icon={faCode} className="w-10 h-10 text-primary" /> },
  { name: "SQL Database", icon: <FontAwesomeIcon icon={faDatabase} className="w-10 h-10 text-primary" /> },
  { name: "Firebase", icon: <FontAwesomeIcon icon={faCode} className="w-10 h-10 text-primary" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="container space-y-8 py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center animate-in fade-in-up duration-500">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills & Expertise</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in-up duration-500 delay-200">
        {skillsData.map((skill) => (
          <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
            <CardContent className="p-0 flex flex-col items-center justify-center gap-4">
              {skill.icon}
              <p className="font-semibold">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
