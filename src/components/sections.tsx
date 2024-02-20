import { CoreParagraphProps } from "./blocks/core/paragraph"

export { default as CoreParagraph } from "./blocks/core/paragraph"


export type SectionProps =
  | CoreParagraphProps

type Blocktypes =
  | "core/paragraph"

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string
  blocktype: B
} & P

export type HomepageBlock =
  | WithBlocktype<"core/paragraph", CoreParagraphProps>

