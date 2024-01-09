import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Welcome to CodingNepal, a blog dedicated to providing valuable and informative content about web development technologies such as HTML, CSS, Bootstrap, JavaScript, and PHP.
          <br/><br/>
          As a passionate team of web developers from Nepal, we understand the importance of having access to quality resources to improve your coding skills. That's why, here on CodingNepal, you’ll find in-depth blog posts and video tutorials that cover various coding topics, including real-world web projects and free source codes.
          <br/><br/>
          Our goal is to empower others to learn and excel in the world of web development, which is why we make all our content accessible to everyone for free.
          <br/><br/>
          Don't forget to explore our YouTube channel, where we create interactive coding project videos designed to facilitate your learning process. Stay up-to-date with our latest posts and projects by following us on Instagram.
          <br/><br/>
          If you have any questions or would like to contact us, please visit our contact page.
          <br/><br/>
          We hope that you find our content informative and helpful, and we look forward to helping you on your coding journey.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
