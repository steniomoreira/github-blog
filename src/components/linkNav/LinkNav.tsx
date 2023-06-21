import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from './styles'

type LinkProp = {
  to: string
  children: ReactNode
}

export function LinkNav({ to, children }: LinkProp) {
  const internalLink = to?.startsWith('/')

  return (
    <LinkContainer className="linkNav">
      {internalLink ? (
        <Link to="/">{children}</Link>
      ) : (
        <a href={to} target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
    </LinkContainer>
  )
}
