import FormGuideline from "@/components/content/documentantion/forms/Forms";

interface pageProps {
  params: { nicename: string };
}

export default function DocumentationPage(props: pageProps) {
  return (
    <>
      <h1>{props?.params.nicename}</h1>
      <FormGuideline />
    </>
  );
}
