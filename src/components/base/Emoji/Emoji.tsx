type Props = {
  symbol: string
  alt: string
}

export const Emoji = ({ symbol, alt }: Props) => {
  return (
    <span title={alt} aria-hidden="true">
      {symbol}
    </span>
  )
}
