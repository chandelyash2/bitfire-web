import Image from "next/image";
import Container from "../Container";
import Link from "next/link";

export const social = [
  {
    name: "instagram",
    img: "/instagram.png",
  },
  {
    name: "facebook",
    img: "/facebook.png",
  },
  {
    name: "whtsapp",
    img: "/whtsapp.png",
  },
];
export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="lg:absolute bottom-0 bg-header w-full">
      <Container>
        <div className="flex justify-between items-center">
          <Image src="/bitlogo.png" alt="logo" width="80" height="80" />
          <div className="flex flex-col gap-2">
            <span>All rights reserved © {date}</span>
            <hr />
            <div className="flex gap-4 justify-center">
              {social.map((item) => (
                <Link key={item.name} href="">
                  <Image src={item.img} alt="logo" width="20" height="20" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
