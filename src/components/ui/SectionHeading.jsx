function SectionHeading({ eyebrow, title, copy, align = 'left', level = 2 }) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : ''
  const TitleTag = `h${level}`

  return (
    <div className={`mb-12 flex flex-col ${alignClass}`}>
      <span className="eyebrow">{eyebrow}</span>
      <TitleTag className="section-title max-w-3xl">{title}</TitleTag>
      {copy ? <p className="section-copy mt-5">{copy}</p> : null}
    </div>
  )
}

export default SectionHeading
