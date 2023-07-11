import './features.css';  

export default function Features(props) {
  return (
    <div>
       <section class="features">
   <div class="container">
         <div class="features-img">
          <img src="./images/reached.jpg" alt="features bg img" />
         </div>
         <div class="features-text">
          <h2>{props.event}</h2>
          <h2>{props.notify}</h2>
          <p>{props.details}</p>
          <a href="#" class="btn">{props.name}</a>
         </div>
   </div>
   </section>
    </div>
  )
}
