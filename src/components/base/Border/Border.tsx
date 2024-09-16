import React from 'react'
import S from './Border.module.css'

type Props = React.SVGProps<{}>

export const Border = ({ className }: Props) => {
  return (
    <svg
      width="1116"
      height="44"
      viewBox="0 0 1116 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={[S.svg, className].join(' ')}
      aria-hidden="true"
    >
      <g>
        <path
          d="M66.7224 44C45.9795 44.2106 23.7866 44.221 0 44H66.7224C315.594 41.4727 355.744 10.1168 435.371 3.69231C675.593 -15.6937 709.668 60.9683 898.414 26.6753C993.625 9.37631 1016 43.9337 1115.5 44H66.7224Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
