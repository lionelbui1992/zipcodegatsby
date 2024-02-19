interface FallbackProps {
  name: string
}

export default function Fallback({ name }: FallbackProps) {
  console.warn(`No component found for: ${name}`)
  return null
}
