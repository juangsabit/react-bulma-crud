
const About = () => {

  return (
    <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
        <div class="tile">
        {/* <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
            <p class="title">Vertical...</p>
            <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
            <p class="title">...tiles</p>
            <p class="subtitle">Bottom tile</p>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child notification is-info">
            <p class="title">Middle tile</p>
            <p class="subtitle">With an image</p>
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" alt=""/>
            </figure>
            </article>
        </div> */}
        </div>
        <div class="tile is-parent">
        <article class="tile is-child notification is-light">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
            </div>
        </article>
        </div>
    </div>
    <div class="tile is-parent">
        <article class="tile is-child notification is-light">
        <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
            </div>
        </div>
        </article>
    </div>
    </div>
    // <section class="hero is-medium is-info">
    //     <div class="hero-body">
    //         <p className="is-size-1 has-text-centered has-text-weight-light">Welcome To My App</p>
    //     </div>
    // </section>
    // <section class="section is-medium">
    //     <p className="is-size-1 has-text-centered has-text-weight-light">Welcome To My App</p>
    // </section>
  )
}

export default About