import { Resume } from "../src/schemas/Resume";

export const testResume: Resume = {
  basics: {
    name: "Test User",
    label: "Software Developer",
    summary: "Test summary",
    image: "test.jpg",
    url: "https://example.com",
    profiles: [
      {
        network: "GitHub",
        url: "https://github.com/test",
      },
    ],
  },
  certificates: [
    {
      name: "Test Certificate",
      issuer: "Test Issuer",
      startDate: "2020-01-01",
      url: "https://example.com/cert",
    },
  ],
  education: [
    {
      area: "Computer Science",
      institution: "Test University",
      studyType: "Bachelor",
      score: "4.0",
      startDate: "2016-09-01",
      endDate: "2020-06-01",
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "native",
    },
  ],
  projects: [
    {
      name: "Test Project",
      description: "Test description",
      startDate: "2021-01-01",
      skills: ["JavaScript", "TypeScript"],
    },
  ],
  skills: [
    {
      name: "JavaScript",
      level: "expert",
    },
  ],
  work: [
    {
      name: "Test Company",
      position: "Developer",
      summary: "Worked on things",
      startDate: "2020-01-01",
      highlights: ["Did stuff", "Built things"],
    },
  ],
};
