import Layout from '../components/Layout.js'
import SvgLink from '../components/SvgLink.js'

const Line = ({ text, href, link, children }) => (
  <p className="mv1">
    {text}
    <a target="_blank" href={href} className="link blue dim no-undeline">
      {link}
    </a>
    {` `}
    {children}
  </p>
)

const Block = props => (
  <div className="measure">
    <hr />
    {props.children}
  </div>
)

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="#ffffff"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="1.414"
  >
    <path
      fill-rule="nonzero"
      d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8 "
    />
  </svg>
)

const SoundcloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="#ffffff"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="1.414"
  >
    <path
      fill-rule="nonzero"
      d="M.773 8.13c-.034 0-.062.03-.067.066L.55 9.633l.156 1.405c.005.038.033.065.067.065.033 0 .06-.027.066-.065l.17-1.405-.18-1.437c0-.038-.03-.066-.06-.066m-.6.552c-.04 0-.06.025-.07.062l-.11.89.11.872c0 .037.03.063.06.063s.06-.03.07-.07l.14-.88-.14-.89c0-.04-.03-.06-.06-.06m1.22-.82c-.04 0-.08.03-.08.07l-.14 1.71.15 1.64c0 .04.03.08.08.08.04 0 .07-.04.08-.08l.17-1.65-.17-1.7c-.01-.04-.04-.08-.08-.08m.63-.06c-.05 0-.09.04-.1.09L1.8 9.63l.14 1.697c.01.052.05.092.1.092s.09-.04.1-.1l.16-1.69-.16-1.75c0-.05-.04-.09-.09-.09m.75 3.56zm0-3.33c-.003-.06-.05-.1-.106-.1-.06 0-.106.04-.11.1L2.44 9.64l.133 1.71c0 .06.05.105.106.105.05 0 .1-.046.1-.106l.15-1.71-.15-1.63zm.54-1.14c-.067 0-.12.06-.12.12l-.14 2.64.124 1.71c0 .06.054.11.12.11.063 0 .116-.06.12-.12l.14-1.71-.14-2.65c-.005-.07-.058-.12-.12-.12m.64-.61c-.07 0-.13.06-.135.13l-.12 3.25.11 1.7c0 .08.06.14.13.14s.13-.06.14-.14l.13-1.7-.13-3.24c-.01-.08-.07-.14-.14-.14m.66-.3c-.08 0-.14.06-.15.14l-.11 3.52.11 1.68c.01.08.07.15.15.15.08 0 .15-.07.15-.15l.13-1.68-.13-3.52c0-.08-.07-.15-.15-.15m.83.03c0-.09-.07-.16-.16-.16-.08 0-.16.07-.16.16l-.1 3.63.1 1.67c.01.09.08.16.17.16.09 0 .16-.07.16-.16l.11-1.67-.11-3.64zm0 5.3zm.5-5.39c-.09 0-.17.08-.17.17l-.1 3.55.1 1.65c0 .1.08.17.17.17.09 0 .17-.08.17-.18l.1-1.65-.11-3.54c0-.1-.08-.18-.18-.18m.67.11c-.11 0-.19.09-.19.19L6.33 9.6l.09 1.65c0 .1.08.185.19.185.1 0 .18-.08.19-.19l.08-1.63-.09-3.41c-.008-.11-.09-.19-.19-.19m.79-.63c-.03-.02-.07-.03-.11-.03-.04 0-.08.01-.11.03-.06.036-.1.1-.1.17v.04L7 9.63l.077 1.634v.005c.005.04.02.09.05.12.038.04.094.07.156.07.054 0 .105-.03.14-.06.038-.04.06-.09.06-.15l.01-.16.078-1.47-.09-4.06c0-.07-.04-.13-.09-.16m.09 5.87zm.58-6.25c-.03-.03-.06-.04-.1-.04-.05 0-.1.01-.14.04-.05.04-.08.1-.08.16v.02l-.09 4.41.05.81.04.79c0 .11.1.21.22.21s.22-.1.22-.22l.1-1.61-.1-4.428c0-.08-.05-.147-.11-.185m5.96 2.52c-.27 0-.53.057-.76.155-.16-1.77-1.64-3.16-3.46-3.16-.44 0-.87.09-1.26.24-.15.06-.18.12-.19.24v6.25c.01.12.1.22.22.23h5.46c1.08.01 1.96-.86 1.96-1.95s-.88-1.97-1.96-1.97 "
    />
  </svg>
)

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="#ffffff"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="1.414"
  >
    <path
      fill-rule="nonzero"
      d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z "
    />
  </svg>
)

const Index = props => (
  <Layout path={props.url.pathname}>
    <div className="pl2 white mw8 center">
      <header>
        <h2 className="f2 f1-m f-headline-l mv2 mv3-ns ml0 mh0">
          {`hello, I'm Andrzej`}
        </h2>
        <h2 className="ma0 f4 f3-ns mb4-l mb3-m mb2">
          {`I make music, sounds & JavaScript.`}
        </h2>
      </header>
      <Block>
        <div>
          <Line
            text={`code I write is open source on `}
            href={`https://github.com/endziu`}
            link={`github`}
          >
            <GithubIcon />
          </Line>
          <Line
            text={`I post music online as `}
            href={`https://soundcloud.com/abstract-machines`}
            link={`@abstract-machines`}
          >
            <SoundcloudIcon />
          </Line>
          <Line
            text={`and I also keep some music over `}
            href={`/music`}
            link={`here`}
          />
          <Line
            text={`you can follow me on twitter `}
            href={`https://twitter.com/1000machines`}
            link={`@1000machines`}
          >
            <TwitterIcon />
          </Line>
        </div>
      </Block>

      <Block>
        <div>
          <Line text={`I support cryptocurrencies:`} />
          <Line
            text={`bitcoin: `}
            href={`/imgs/btc-qr-code.png`}
            link={`1qa4xA4DXR26oPhXXAvy9ivByDYXkmhpU`}
          />
          <Line
            text={`ethereum: `}
            href={`/imgs/eth-qr-code.png`}
            link={`0xc3adab50c47b3d9c3342d71202838ddb5f09a050`}
          />
        </div>
      </Block>

      <Block>
        <Line
          text={`feel free to send me an `}
          href={`mailto:koper.andzrzej@gmail.com`}
          link={`email`}
        />
      </Block>

    </div>
  </Layout>
)

export default Index
