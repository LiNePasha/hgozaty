interface Props {
    title: string
}

function SectionTitle({title}: Props) {
  return (
    <div className='text-center mb-10'>
        <h2 className='sectionTitle relative text-4xl text-gray-500 '>
            {title}
        </h2>
    </div>
  )
}

export default SectionTitle;