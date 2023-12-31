

export default function CoreConceptItem ({image, title, description}) {
    return (
      <li key={title}>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }