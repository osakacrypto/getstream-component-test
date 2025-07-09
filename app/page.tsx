/*
PATH: app/page.tsx
@osakacrypto
Last modified: 2025-07-08
*/

import FontSizeToggle from "./Testing/FontSizeToggle";
import ReduceMotionToggle from "./Testing/ReduceMotionToggle";
import ThemeToggle from "./Testing/ThemeToggle";
import STRVNButton from "./ui-components/Button";
import STRVNCaption from "./ui-components/Caption";
import STRVNHeading from "./ui-components/Heading";
import STRVNParagraph from "./ui-components/Paragraph";
import STRVNSubtitle from "./ui-components/Subtitle";
import STRVNTitle from "./ui-components/Title";
import STRVNWrapper from "./ui-components/Wrapper";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="boilerplate-heading">HEADER</h1>
      </header>
      <STRVNWrapper>
        <h1>h1 test</h1>
        <h2>h2 test</h2>
        <h3>h3 test</h3>
        <h4>h4 test</h4>
        <h5>h5 test</h5>
        <h6>h6 test</h6>
        <p>p test</p>

        <STRVNHeading>Heading Component Test</STRVNHeading>
        <STRVNTitle>Title Component Test</STRVNTitle>
        <STRVNSubtitle>Subtitle Component Test</STRVNSubtitle>
        <STRVNCaption>Caption Component Test</STRVNCaption>
        <STRVNParagraph>Paragraph Component Test</STRVNParagraph>
      </STRVNWrapper>
      <STRVNWrapper>
        <STRVNButton variant="filled">Filled Test</STRVNButton>
        <STRVNButton variant="outlined">Outlined Test</STRVNButton>
        <STRVNButton variant="ghosted">Ghosted Test</STRVNButton>
        <STRVNButton variant="filled" disabled>
          Disabled Test
        </STRVNButton>
      </STRVNWrapper>
      <footer>
        <h1 className="boilerplate-heading">FOOTER</h1>
      </footer>

      <div className="test-toggles">
        <ReduceMotionToggle />
        <ThemeToggle />
        <FontSizeToggle />
      </div>
    </main>
  );
}
