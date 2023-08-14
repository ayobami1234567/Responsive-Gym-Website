import { FaCrown } from "react-icons/fa"
import SectionHead from "./SectionHead"
import { Programs } from "../data"
// import Card from "../src/UI/Card"
import Card from "../UI/Card"
import { Link } from "react-router-dom"
import { AiFillCaretRight } from "react-icons/ai"

const programs = () => {
  return (
    <section className="programs">
      <div className="container programs-container">
        <SectionHead icon={<FaCrown />} title="Programs" />

        <div className="programs__wrapper">
          {Programs.map(({ id, icon, title, info, desc, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learm More <AiFillCaretRight />
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default programs
