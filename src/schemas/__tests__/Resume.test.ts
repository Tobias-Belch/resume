import { resumeSchema } from "../Resume";
import { testResume } from "../../../test/testData";

describe("Resume Schema", () => {
  it("should validate complete resume", () => {
    expect(() => resumeSchema.parse(testResume)).not.toThrow();
  });

  it("should require basics", () => {
    const invalid = { ...testResume, basics: undefined };
    expect(() => resumeSchema.parse(invalid)).toThrow();
  });

  it("should validate dates", () => {
    const invalid = {
      ...testResume,
      work: [{ ...testResume.work![0], startDate: "invalid" }],
    };
    expect(() => resumeSchema.parse(invalid)).toThrow();
  });

  it("should validate URLs", () => {
    const invalid = {
      ...testResume,
      basics: { ...testResume.basics, url: "not-a-url" },
    };
    expect(() => resumeSchema.parse(invalid)).toThrow();
  });
});
