import { CoreParagraphProps } from "./blocks/core-paragraph"

export { default as HomepageHero } from "./blocks/core-paragraph"


export type SectionProps =
  | CoreParagraphProps

type Blocktypes =
  | "HomepageHero"
  | "CoreParagraph"

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string
  blocktype: B
} & P

export type HomepageBlock =
  | WithBlocktype<"CoreParagraph", CoreParagraphProps>

