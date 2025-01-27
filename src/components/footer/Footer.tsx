import { InstagramLogo, LinkedinLogo, GithubLogo, TiktokLogo } from '@phosphor-icons/react';

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-black text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Raquel Morabito | Copyright: {data}
          </p>
          <p className="text-lg mb-4">Acesse nossas redes sociais</p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/raquelmorabito/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-all"
            >
              <LinkedinLogo size={32} weight="bold" />
            </a>
            <a
              href="https://www.instagram.com/raquelmorabito/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-all"
            >
              <InstagramLogo size={32} weight="bold" />
            </a>
            <a
              href="https://github.com/raquelmorabito"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-all"
            >
              <GithubLogo size={32} weight="bold" />
            </a>
            <a
              href="https://www.tiktok.com/@raquelmorabito"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-all"
            >
              <TiktokLogo size={32} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
