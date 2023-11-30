import workdata from "../data/workdata";
import WorkEntry from "./WorkEntry"
import WorkData from "../data/workdata"

export default function WorkHistory() {
    
    const work = WorkData.map((obj) => {
        return (
            <WorkEntry
                key={obj.id}
                {...obj}
            />
        );
    })
    
    return (
    <>
        <h1 className="work-history--header">Work History</h1>
        <div className="work-history">
            <div className="flex--layout">
                {work}
            </div>
        </div>
    </>
  )
}
