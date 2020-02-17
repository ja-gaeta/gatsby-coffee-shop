import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore
              asperiores aliquam cupiditate est sunt voluptas alias quia quo
              ipsum repudiandae molestias officiis aliquid deserunt itaque
              reprehenderit, quaerat, magnam aut, inventore fugiat corrupti
              perspiciatis dolorem! Quis ab eligendi ratione officia totam
              expedita, quasi labore suscipit adipisci eos perferendis odit
              magnam.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
