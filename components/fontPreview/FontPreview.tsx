import Container from "../Container";
import { Button } from "../ui/button";

const FontPreview = () => {
  return (
    <section className="mt-8 md:mt-10">
      <Container>
        <p className="mb-4 text-lg font-medium text-center text-textHighlight">Fonts</p>
        <div className="rounded-3xl px-8 py-6 border-[1px] border-stroke bg-background">
          <div className="border-b-2 border-stroke pb-6 mb-6">
            <p className="text-xs uppercase mb-2 sm:mb-4 text-textSub">Heading</p>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-2xl sm:text-4xl text-textHighlight font-semibold">Inter</p>
              <Button
                variant="outline"
                className="border-cta px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-cta text-center"
              >
                Download
              </Button>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase mb-2 sm:mb-4 text-textSub">Body</p>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-base text-textSub font-medium min-w-14 flex-1">Inter</p>
              <Button
                variant="outline"
                className="border-cta px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-cta text-center"
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FontPreview;
