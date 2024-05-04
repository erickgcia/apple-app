import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <article className="screen-max-width">
        <section className="pb-5 border-b-2 border-neutral-700">
          <p className="font-semibold text-gray text-xs pb-1">
            More ways to shop:{' '}
            <span className="underline text-blue">
              Find an Apple Store {'  '}
            </span>
            or <span className="underline text-blue">other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call +00800-040-1966
          </p>
        </section>
        <section className="flex flex-col md:flex-row md:items-center justify-between  pt-4">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link) => (
              <p key={link} className="font-semibold text-gray text-xs px-1">
                {link}
              </p>
            ))}
          </div>
        </section>
      </article>
    </footer>
  )
}

export default Footer
