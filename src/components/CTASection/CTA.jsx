import React from "react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923098495478", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:farazazeem66@gmail.com";
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Let's Build Something Great Together</h1>
        <p className={styles.description}>
          Whether you need a website, mobile app, or custom solution, I'm here
          to help.
        </p>
        <div className={styles.buttonGroup}>
          <button
            onClick={handleWhatsAppClick}
            className={styles.whatsappButton}
          >
            WhatsApp Chat
          </button>
          <button onClick={handleEmailClick} className={styles.emailButton}>
            Send Email
          </button>
        </div>
      </div>

      <style>{`
        .${styles.container} {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px 20px;
          border:1px solid rgba(255, 255, 255, 0.1);
          margin-top:50px;
          border-radius:30px;
           background-color: rgba(29, 34, 51);
        }

        .${styles.content} {
          text-align: center;
          
        }

        .${styles.heading} {
          font-size: 1.4rem;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 1.5rem 0;
          line-height: 1;
        }

        .${styles.description} {
          font-size: 18px;
          color: #b8c1d9;
          margin: 0 0 2rem 0;
          line-height: 1;
        }

        .${styles.buttonGroup} {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .${styles.whatsappButton} {
          background:#20c15c;
          color: #ffffff;
          border: none;
          border-radius: 16px;
          padding: 12px 25px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          background: #20ba5a;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
          
        }

        .${styles.whatsappButton}:hover {
          transform:translateY(-5px);
        }

        .${styles.emailButton} {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-radius: 16px;
          padding: 11px 25px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1);
         
        }

        .${styles.emailButton}:hover {
        transform:translateY(-5px);

        }

        @media (max-width: 768px) {
          .${styles.heading} {
            font-size: 2rem;
          }

          .${styles.description} {
            font-size: 1.1rem;
          }

          .${styles.buttonGroup} {
            flex-direction: column;
            width: 100%;
          }

          .${styles.whatsappButton},
          .${styles.emailButton} {
            width: 100%;
            max-width: 300px;
          }
            
        }
          @media (max-width: 650px) {
         .${styles.heading}{
            font-size: 16px;
            padding: 15px 10px;
            font-weight:800;
        }
       .${styles.description}{
           font-size:14px;
        }
       .${styles.whatsappButton} {
          border-radius: 12px;
          padding: 10px 10px;
        }
        .${styles.emailButton} {
          border-radius: 12px;
          padding: 10px 10px;
        }
          .${styles.container} {
          margin-top:20px;
          border-radius:20px;
          padding: 10px 10px;
        }
}

      `}</style>
    </div>
  );
};

// CSS Module object structure
const styles = {
  container: "container",
  content: "content",
  heading: "heading",
  description: "description",
  buttonGroup: "buttonGroup",
  whatsappButton: "whatsappButton",
  emailButton: "emailButton",
};

export default CTASection;
