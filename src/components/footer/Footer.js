import styles from "./footerstyle.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerArea}>
      {/* FOOTER MIDDLE AREA */}
      <div className={styles.footerMiddle}>
        <div className={styles.container}>
          <div className={styles.row}>
            {/* Descrição da Empresa */}
            <div className={`${styles.col} ${styles.description}`}>
              <h3>Quem Somos</h3>
              <p>
                Com quase 25 anos de experiência, a LC Copper Metalúrgica Eireli é referência em reposição de solda por resistência e usinagem de materiais para a indústria automotiva.
              </p>
              <div className={styles.socialIcons}>
                <Link href="#"><i className="icofont-facebook"></i></Link>
                <Link href="#"><i className="icofont-twitter"></i></Link>
                <Link href="#"><i className="icofont-linkedin"></i></Link>
              </div>
            </div>

            {/* Links Úteis */}
            <div className={`${styles.col} ${styles.usefulLinks}`}>
              <h3>Links Úteis</h3>
              <ul>
                <li><Link href="/quemsomos">Quem somos</Link></li>
                <li><Link href="/produtos">Produtos</Link></li>
                <li><Link href="/contato">Contato</Link></li>
                <li><Link href="/trabalheconosco">Trabalhe Conosco</Link></li>
              </ul>
            </div>

            {/* Informações de Contato */}
            <div className={`${styles.col} ${styles.contact}`}>
              <h3>Contato</h3>
              <div className={styles.contactInfo}>
                <p><strong>Fernando Ramirez</strong> - Comercial</p>
                <p>(11) 4676-0398</p>
                <p>(11) 94023-8626</p>
                <p>(11) 99601-6574</p>
                <p><Link href="mailto:fernando@lccopper.com">fernando@lccopper.com</Link></p>
              </div>
            </div>

            {/* Nossos Serviços */}
            <div className={`${styles.col} ${styles.services}`}>
              <h3>Nossos Serviços</h3>
              <div className={styles.serviceItem}>
                <strong>Soldagem a Ponto:</strong> Precisão em cada detalhe.
              </div>
              <div className={styles.serviceItem}>
                <strong>Usinagem de Materiais:</strong> Alta qualidade garantida.
              </div>
              <div className={styles.serviceItem}>
                <strong>Desenvolvimento de Projetos Especiais:</strong> Soluções personalizadas.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END FOOTER MIDDLE AREA */}

      {/* FOOTER BOTTOM AREA */}
      <div className={styles.footerBottom} style={{ fontSize: '14px', color: '#FFFFFF', width: "100%", margin: "0px" }}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.col} ${styles.copyRight}`}>
              <span style={{ fontSize: '14px', color: '#FFFFFF' }}>
                LC Copper Metalúrgica Eireli. Desenvolvido por:  
                <Link href="#" target="_blank" style={{ color: '#FFFFFF' }}>
                    ProjetoIntegrador2-Univesp
                </Link>
              </span>
            </div>
            <div className={`${styles.col} ${styles.footerMenu}`}>
              {/* Uncomment if needed */}
              {/* <ul>
                <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
                <li><Link href="/termos-de-servico">Termos de Serviço</Link></li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
