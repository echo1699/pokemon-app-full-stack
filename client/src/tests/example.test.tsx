import { describe, it, expect } from "vitest"
import { Capitalize } from "../components/Capitalize"

describe("Capitalize first letter", () => {
  it("should capitalize the first letter of the string", () => {
    const str = "hello world"
    const result = Capitalize(str)
    expect(result).toBe("Hello world")
  })
})