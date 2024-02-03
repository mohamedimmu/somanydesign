import { Colors } from "../../types";
import Container from "../Container";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";

const ExamplePreview = () => {
  const colors: Colors = {
    primary: "#00373E",
    secondary: "#067D8C",
    background: "#F8F6F5",
  };
  return (
    <section className="mt-8 md:mt-10">
      <Container>
        <div className="mt-10">
          <p className="mb-4 text-lg font-medium text-center text-textHighlight">
            Colour Palette
          </p>

          <div
            className="flex flex-col md:flex-row rounded-xl"
          >
            <LeftLayout colors={colors} />
            <RightLayout colors={colors} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExamplePreview;
