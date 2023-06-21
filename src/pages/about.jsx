import Layout from "@/components/layout";
import MainHeader, { MainText, MainTitle } from "@/components/main-header";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <div
        className="bg-cover"
        style={{ backgroundImage: "url('/assets/images/back-contact.png')" }}
      >
        <div className="py-40 bg-black bg-opacity-20 min-h-screen">
          <MainHeader>
            <MainTitle width="600px">About Us</MainTitle>
            <MainText width="800px">
              <p className="mb-4">
                SIndhudurg is known for &quot;Tal Konrad&quot;. Enriched with
                the gifts of nature, with an ancient temple complex, overlooking
                the impregnable fort standing tall on the sea, on the surface
                witnessing the history of brave Marathas we want to preserve the
                culture and nature of Konkan and give people an unforgettable
                experience which is full of diversity.
              </p>
              <p className="mb-4">
                We are Konkanut Cove and we promote Sindhudurg as an amazing
                holiday destination. Sindhudurg is famous for its serene and
                beautiful beaches, temples, historical forts, and its delicious
                cuisine{" "}
              </p>
              <p className="mb-5">
                In Sindhudurg, We can arrange an experiential tour where one can
                get the experience of camping at the riverside, lunch at a
                beautiful mango farm, getting into the glorious history of the
                Sindhudurg fort and one can also indulge and dive into the
                thrilling water sports activities and many more unseen places.
              </p>
              <p className="mb-5">
                As Sindhudurg is one of the upcoming travel destinations of
                Maharashtra. And, we the team of Konkanut Cove will do our best
                to make your next Sindhudurg trip one of the best holidays you
                ever had.{" "}
              </p>
              <p>We would like to hear back from you soon!</p>
            </MainText>
          </MainHeader>
        </div>
      </div>
    </Layout>
  );
}
