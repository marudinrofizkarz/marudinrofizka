import { Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const experienceData = [
  {
    date: "Feb 2025 - Present",
    title: "Marketing Communication Section Head",
    company: "PT. Samara Sejahtera Realty",
    description: "Leading marketing communication strategies and initiatives to enhance brand visibility and drive property sales.",
  },
  {
    date: "Nov 2021 - Feb 2025",
    title: "Co-Founder Business Development",
    company: "PT KREASI MKMUR PERSADA",
    description: "Leading business development initiatives and digital transformation strategies",
  },
  {
    date: "Dec 2019 - Oct 2021",
    title: "Digital Advertiser Digital Marketing",
    company: "PT CAHAYA SUBUR LESTARI",
    description: "Managed digital advertising campaigns and implemented marketing strategies to drive business growth",
  },
  {
    date: "Aug 2019 - Dec 2019",
    title: "Graphic Designer IT Staff",
    company: "Amary Bintaro Dental Clinic",
    description: "Created visual content and provided IT support for clinic operations",
  },
  {
    date: "Feb 2018 - Jul 2019",
    title: "School Relations Executive",
    company: "PT ARTHA TEKNOLOGI SENI INOVASI",
    description: "Developed and maintained relationships with educational institutions while managing technology integration projects",
  },
  {
    date: "Mar 2017 - Jan 2018",
    title: "IT Support",
    company: "SMK IT GLOBAL PERSADA",
    description: "Provided technical support and maintained IT infrastructure for the educational institution",
  },
  {
    date: "Mar 2014 - Apr 2016",
    title: "Graphic Design and IT Staff",
    company: "CV Antsoft Media Computindo",
    description: "Combined creative design work with technical IT responsibilities to support company operations",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container space-y-12 py-12 md:py-24 animate-in fade-in-up duration-1000">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          Professional Experience
        </h2>
      </div>
      <div className="relative">
        {/* Timeline for medium and up screens */}
        <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block"></div>
        {/* Timeline for small screens */}
        <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:hidden"></div>
        
        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative flex w-full items-start md:items-center">
              {/* Desktop layout */}
              <div className={`hidden w-1/2 md:flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                {index % 2 === 0 && (
                  <Card className="max-w-md w-full transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 text-right">
                    <CardHeader>
                      <p className="text-sm text-primary">{item.date}</p>
                      <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                      <p className="text-sm font-medium text-muted-foreground">{item.company}</p>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                )}
              </div>
              
              <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform animate-in zoom-in-50 duration-500 md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="absolute left-5 top-0 z-10 -translate-x-1/2 -translate-y-0 transform animate-in zoom-in-50 duration-500 md:hidden">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className={`hidden w-1/2 md:flex ${index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                {index % 2 !== 0 && (
                  <Card className="max-w-md w-full transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 text-left">
                     <CardHeader>
                      <p className="text-sm text-primary">{item.date}</p>
                      <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                      <p className="text-sm font-medium text-muted-foreground">{item.company}</p>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Mobile layout */}
              <div className="w-full pl-12 md:hidden">
                <Card className="transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                  <CardHeader>
                    <p className="text-sm text-primary">{item.date}</p>
                    <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
