interface Props {
  content: string
}

const EbookLi: React.FC<Props> = ({ content }) => {
  return <li>{content}</li>
}

export default EbookLi
