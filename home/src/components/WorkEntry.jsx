export default function WorkEntry(props) {

    return (
    <div className="grid--container">
        <div className="grid--cell" id="title">{props.title}</div>
        <div className="grid--cell" id="date">{props.date}</div>
        <div className="grid--cell" id="description">{props.description}</div>
    </div>
  )
}

// return (
//     <>
//         <div className="grid--cell" id="title">Sidebar Title</div>
//         <div className="grid--cell" id="date">Date</div>
//         <div className="grid--cell" id="content">Main Content</div>
//         <div className="grid--cell" id="subtitle">Sidebar Subtitle</div>
//     </>
//   )