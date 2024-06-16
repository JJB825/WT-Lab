class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar">
      <a href="./index.html"><h1 class="title">Buy It</h1></a>
      <ul>
        <li class="list active">
          <a href="./index.html">
            <span class="icon"><ion-icon name="home"></ion-icon></span>
          </a>
        </li>
        <li class="list">
          <a href="./shop.html">
            <span class="icon"><ion-icon name="bag-add"></ion-icon></span>
          </a>
        </li>
        <li class="list">
          <a href="./review.html">
            <span class="icon"><ion-icon name="pencil"></ion-icon></span>
          </a>
        </li>
        <li class="list">
          <a href="#contact">
            <span class="icon"><ion-icon name="call"></ion-icon></span>
          </a>
        </li>
        <li class="list">
          <a href="./login.html">
            <span class="icon"><ion-icon name="person"></ion-icon></span>
          </a>
        </li>
        <div class="indicator"><span></span></div>
      </ul>
    </nav>
    `
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer id="contact">
      <div class="feedback">
        <h1>Why people like us!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          doloribus quas repellat nesciunt cum fugit ipsam aperiam ex et!
          Temporibus.
        </p>
      </div>
      <div class="quicklinks">
        <h1>Quicklinks</h1>
        <a href="./index.html"
          ><i class="fa-solid fa-circle-chevron-right links-icon"></i>Home</a
        ><br />
        <a href="./shop.html"
          ><i class="fa-solid fa-bag-shopping links-icon"></i>Shop</a
        ><br />
        <a href="./review.html"
          ><i class="fa-solid fa-comment links-icon"></i>Feedback</a
        ><br />
      </div>
      <div class="contact">
        <h1>Contact</h1>
        <span>
          <i class="fa-solid fa-address-book contact-links"></i>Address: 123,
          New York Street, London </span
        ><br />
        <span
          ><i class="fa-solid fa-phone contact-links"></i>+91 XXX-XXX-XXXX</span
        ><br />
        <span
          ><i class="fa-solid fa-envelope contact-links"></i>xyz@gmail.com</span
        ><br />
        <div class="socials">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </footer>
    `
  }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
