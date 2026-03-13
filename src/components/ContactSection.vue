<template>
  <section class="contact-section" id="contact">
    <div style="text-align: center;">
      <h2 class="section-title" v-scroll-reveal>
        {{ isMobile ? "SIGUENOS" : "Siguenos en nuestras redes sociales" }}
      </h2>
    </div>
    <div class="contact-links" v-scroll-reveal="'fade-up'">
      <div class="content-facebook">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1391850115751679%2F&show_text=true&width=560&t=0"
          width="560"
          :height="isMobile ? 334 : 429"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="
            autoplay;
            clipboard-write;
            encrypted-media;
            picture-in-picture;
            web-share;
          "
          allowFullScreen="true"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2027644991434636%2F&show_text=true&width=560&t=0"
          width="560"
          :height="isMobile ? 334 : 429"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="
            autoplay;
            clipboard-write;
            encrypted-media;
            picture-in-picture;
            web-share;
          "
          allowFullScreen="true"
        ></iframe>
      </div>
      <div class="links">
        <a
          href="https://www.facebook.com/people/Felipe-Coaquira-Choque/61586723584020/"
          target="_blank"
          class="social-link facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            />
          </svg>
          Facebook
        </a>
        <a
          href="https://www.tiktok.com/@felipecoaquirachoquira"
          target="_blank"
          class="social-link tiktok"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
            />
          </svg>
          TikTok
        </a>
        <a
          href="https://chat.whatsapp.com//KwYJr5X74tMFGL3mTirsUz"
          target="_blank"
          class="social-link whatsapp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
            />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useMobile } from "../composable/useMobile";
const { isMobile } = useMobile();
</script>
<style scoped>
.contact-section {
  padding: 4rem 2rem;
  background-color: #f0f0f0;
  color: #333;
  text-align: center;
}

.section-title {
  color: #1a1a1a;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  border-bottom: 3px solid #76ff03;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #222;
  background-color: #76ff03;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(118, 255, 3, 0.4);
}

.social-link svg {
  width: 24px;
  height: 24px;
}

.social-link.facebook:hover {
  background-color: #1877f2;
  color: #fff;
}

.social-link.tiktok:hover {
  background-color: #000;
  color: #fff;
}

.social-link.whatsapp:hover {
  background-color: #25d366;
  color: #fff;
}

.content-facebook {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}
.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}
@media (max-width: 768px) {
  .social-link {
    font-size: 0.8rem;
  }
  .content-facebook {
    gap: 0;
  }
  .social-link {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
  .social-link svg {
    width: 18px;
    height: 18px;
  }
}
</style>
