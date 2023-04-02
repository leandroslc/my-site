type Props = {
  symbol: string
  alt: string
}

export const Emoji = ({ symbol, alt }: Props) => {
  return <span aria-label={alt}>{symbol}</span>
}
