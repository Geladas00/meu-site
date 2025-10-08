import React from "react";
import "../pages/Style.css";
import logo from "../assets/logo (2).png";
import about from "../assets/about-img.jpg";
import item1 from "../assets/menu-1.png";
import item2 from "../assets/menu-2.png";
import item3 from "../assets/menu-3.png";
import item4 from "../assets/menu-4.png";
import item5 from "../assets/menu-5.png";
import item6 from "../assets/menu-6.png";
import quote from "../assets/quote-img.png";
import pic1 from "../assets/pic-1.png";

function Home() {
  return (
    <>
      <header className="header">
        <section>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>

          <nav className="navbar">
            <a href="#">Home</a>
            <a href="#about">Sobre</a>
            <a href="#menu">Menu</a>
            <a href="#review">Avaliações</a>
            <a href="#address">Endereços</a>
          </nav>

          <div className="icons">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios/30/ffffff/search--v1.png"
              alt="search--v1"
            />
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart--v1.png"
              alt="shopping-cart--v1"
            />
          </div>
        </section>
      </header>

      <div className="home-container">
        <section id="#home">
          <div className="content">
            <h3>SADAS-CAFÉ COM O MELHOR CAFÉ DE LUANDA</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              atque consectetur laboriosam repudiandae incidunt fugit. Dolores
              eligendi in ipsum obcaecati unde beatae quisquam exercitationem.
              Perferendis corrupti exercitationem laborum repellendus
              recusandae?
            </p>
            <a href="#" className="btn">
              Pegue O Seu Agora!!!
            </a>
          </div>
        </section>
      </div>

      <section className="about" id="about">
        <h2 className="title">
          Sobre <span>Nós</span>
        </h2>
        <div className="row">
          <div className="container-img">
            <img src={about} alt="sobre-nós" />
          </div>
          <div className="content">
            <h3>O Que Faz Nosso Café Especial</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vel
              culpa ipsa. Amet esse illo exercitationem accusantium vel nobis
              error unde, ipsa nisi praesentium maiores eius veritatis at
              voluptas earum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique neque amet cum earum dolorem eos. Repudiandae incidunt,
              alias rerum ex sequi excepturi, explicabo in, modi commodi porro
              dolore facere dolores.
            </p>
            <a href="#" className="btn">
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      <section className="menu" id="menu">
        <h2 className="title">
          Nosso <span>Menu</span>
        </h2>

        <div className="box-container">
          <div className="box">
            <img src={item1} alt="item1" />
            <h3>Café Coado</h3>
            <div className="price">
              Kzs 3900kzs <span>5700kzs</span>
            </div>
            <a href="#" className="btn">
              Adicione Carrinho
            </a>
          </div>
          <div className="box">
            <img src={item2} alt="item2" />
            <h3>Café Coado</h3>
            <div className="price">
              Kzs 3900kzs <span>5700kzs</span>
            </div>
            <a href="#" className="btn">
              Adicione Carrinho
            </a>
          </div>
          <div className="box">
            <img src={item3} alt="item3" />
            <h3>Café Coado</h3>
            <div className="price">
              Kzs 3900kzs <span>5700kzs</span>
            </div>
            <a href="#" className="btn">
              Adicione Carrinho
            </a>
          </div>
          <div className="box">
            <img src={item4} alt="item4" />
            <h3>Café Coado</h3>
            <div className="price">
              Kzs 3900kzs <span>5700kzs</span>
            </div>
            <a href="#" className="btn">
              Adicione Carrinho
            </a>
          </div>
          <div className="box">
            <img src={item5} alt="item5" />
            <h3>Café Coado</h3>
            <div className="price">
              Kzs 3900kzs <span>5700kzs</span>
            </div>
            <a href="#" className="btn">
              Adicione Carrinho
            </a>
          </div>
          <div className="box">
            <img src={item6} alt="item6" />
            <h3>Café Coado</h3>
            <div className="price">
              Kzs 3900kzs <span>5700kzs</span>
            </div>
            <a href="#" className="btn">
              Adicione Carrinho
            </a>
          </div>
        </div>
      </section>

      <section className="review" id="review">
        <h2>
          Nossos <span>Clentes</span>
        </h2>

        <div className="box-container">
          <div className="box">
            <img src={quote} alt="comentario" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              velit repudiandae iure praesentium in minus. Dolorum possimus
              voluptatem obcaecati vel cumque explicabo labore beatae
              architecto, nam illum provident impedit ea?
            </p>
            <img src={pic1} alt="foto-cliente" className="user"/>
            <h3>Gelsadas AO</h3>
            <div className="star">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/ffffff/star-half-empty.png"
                alt="star-half-empty"
              />
            </div>
          </div>
          <div className="box">
            <img src={quote} alt="comentario" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              velit repudiandae iure praesentium in minus. Dolorum possimus
              voluptatem obcaecati vel cumque explicabo labore beatae
              architecto, nam illum provident impedit ea?
            </p>
            <img src={pic1} alt="foto-cliente" className="user"/>
            <h3>Gelsadas AO</h3>
            <div className="star">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/ffffff/star-half-empty.png"
                alt="star-half-empty"
              />
            </div>
          </div>

          <div className="box">
            <img src={quote} alt="comentario" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              velit repudiandae iure praesentium in minus. Dolorum possimus
              voluptatem obcaecati vel cumque explicabo labore beatae
              architecto, nam illum provident impedit ea?
            </p>
            <img src={pic1} alt="foto-cliente" className="user"/>
            <h3>Gelsadas AO</h3>
            <div className="star">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/ffffff/star-half-empty.png"
                alt="star-half-empty"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="address" id="address">
        <h2 className="title">
          NOSSO <span>ENDEREÇO</span>
        </h2>

        <iframe
          title="Localização - Nova Vida, Luanda"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31533.771027783936!2d13.194020066082498!3d-8.905474235620641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f510e19e4e67%3A0xc31096d337d1bfdc!2sNova%20Vida%2C%20Luanda!5e0!3m2!1spt-PT!2sao!4v1759741782292!5m2!1spt-PT!2sao"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <footer className="footer">
        <div className="share">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
            alt="instagram-new"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
            alt="facebook-new"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/30/ffffff/whatsapp--v1.png"
            alt="whatsapp--v1"
          />
        </div>
      </footer>
    </>
  );
}

export default Home;
