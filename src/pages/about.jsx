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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                Lorem Ipsum is simply dummy text of the printing and types Lorem
                Ipsum is simply dummy text of the printing and typesetting Lorem
                Ipsum is simply dummy text of the printing and typesLorem Ipsum
                is simply dummy text of the printing and typesetting Lorem Ipsum
                is simply dummy text of the printing and types
              </p>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                Lorem Ipsum is simply dummy text of the printing and types Lorem
                Ipsum is simply dummy text of the printing and typesetting Lorem
                Ipsum is simply dummy text of the printing and typesLorem Ipsum
                is simply dummy text of the printing and typesetting Lorem Ipsum
                is simply dummy text of the printing and types
              </p>
              <p className="mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                Lorem Ipsum is simply dummy text of the printing and types Lorem
                Ipsum is simply dummy text of the printing and typesetting Lorem
                Ipsum is simply dummy text of the printing and typesLorem Ipsum
                is simply dummy text of the printing and typesetting Lorem Ipsum
                is simply dummy text of the printing and types
              </p>
            </MainText>
          </MainHeader>
        </div>
      </div>
    </Layout>
  );
}

