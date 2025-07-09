/*
PATH: app/page.tsx
@osakacrypto
Last modified: 2025-07-08
*/

import FontSizeToggle from "./Testing/FontSizeToggle";
import ReduceMotionToggle from "./Testing/ReduceMotionToggle";
import ThemeToggle from "./Testing/ThemeToggle";
import STRVNButton from "./ui-component/Button";
import STRVNCaption from "./ui-component/Caption";
import STRVNHeading from "./ui-component/Heading";
import STRVNParagraph from "./ui-component/Paragraph";
import STRVNSubtitle from "./ui-component/Subtitle";
import STRVNTitle from "./ui-component/Title";
import STRVNWrapper from "./ui-component/Wrapper";
import STRVNFeaturedImageAndText from "./ui-pattern/FeaturedImageAndText";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="boilerplate-heading">HEADER</h1>
      </header>
      <STRVNWrapper background="var(--STRVN-BACKGROUND)">
        <STRVNFeaturedImageAndText
          slides={[
            {
              src: "/images/carousel/1.png",
              title: "GOTHAM’S GUARDIAN",
              alt: "A still shot from the Batman TV show, The Penguin is making notes.",
            },
            {
              src: "/images/carousel/2.png",
              title: "KNIGHT OF VENGEANCE",
              alt: "A still shot from the Batman TV show, Batman is confronting a villain.",
            },
            {
              src: "/images/carousel/3.png",
              title: "LEGEND IN THE DARK",
              alt: "A still shot from the Batman TV show, Batman is being stealthy behind a villain.",
            },
          ]}
          reverseorder={true}
          headingPre="I emerge when the city"
          headingHighlight="darkens"
          headingPost="."
          bodyText="These nights all roll together in a rush, Behind the mask."
          primaryCtaLabel="Suit Up ⇢"
          secondaryCtaLabel="Mission Briefing"
        />

        <STRVNFeaturedImageAndText
          reverseorder={false}
          slides={[
            {
              src: "/images/batman-3.png",
              title: "حامل العدالة",
              alt: "لقطة ثابتة من مسلسل باتمان التلفزيوني، باتمان يناقش مع هارلي كوين والجوكر.",
            },
            {
              src: "/images/batman-5.png",
              title: "المُخلِّص في الظلال",
              alt: "لقطة ثابتة من مسلسل باتمان التلفزيوني، باتمان وألفريد يضعان استراتيجيات في مقصورة الوطواط.",
            },
            {
              src: "/images/batman-7.png",
              title: "شبح الليل",
              alt: "لقطة ثابتة من مسلسل باتمان التلفزيوني، مستر فرايز في مختبره يملأ الإطار.",
            },
          ]}
          headingPre="يعتقدون أنني أختبئ في "
          headingHighlight="الظلال"
          headingPost="."
          bodyText="هذه المدينة تأكل نفسها. ربما لا يمكن إنقاذها، لكن عليّ المحاولة."
          primaryCtaLabel="استدعِ سيارة باتمان ⇢"
          secondaryCtaLabel="موجز المهمة"
        />

        <STRVNFeaturedImageAndText
          reverseorder={true}
          slides={[
            {
              src: "/images/batman-3.png",
              title: "正義の使者",
              alt: "バットマンのテレビ番組の静止画。バットマンがハーレー・クインとジョーカーと議論している。",
            },
            {
              src: "/images/batman-5.png",
              title: "影の中の救済者",
              alt: "バットマンのテレビ番組の静止画。バットマンとアルフレッドがバットケイブで戦略を練っている。",
            },
            {
              src: "/images/batman-7.png",
              title: "夜の亡霊",
              alt: "バットマンのテレビ番組の静止画。ミスター・フリーズが研究所で画面いっぱいに映っている。",
            },
          ]}
          headingPre="彼らは私が"
          headingHighlight="闇に隠れている"
          headingPost="と思っている。"
          bodyText="この街は自壊しつつある。救えないかもしれないが、私は試さなければならない。"
          primaryCtaLabel="バットモービルを呼ぶ ⇢"
          secondaryCtaLabel="ミッションブリーフィング"
        />
      </STRVNWrapper>
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
