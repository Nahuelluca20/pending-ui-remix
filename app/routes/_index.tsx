import { Button } from "~/components/ui/button";
import { CodeBlock, atomOneDark } from "react-code-blocks";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  console.log(
    "This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header"
  );
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

export default function Index() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <h1>Welcome to Remix</h1>

      {/* <div className="w-[500px] font-fira font-bold">
        <CodeBlock
          text={`import { CodeBlock, nord} from 'react-code-blocks';
const MyCodeComponent = () => (
  <CodeBlock
    text="HELLO WORLD"
    theme={nord}
    language="text"
  />
)`}
          theme={atomOneDark}
          language={"jsx"}
          showLineNumbers={false}
          wrapLongLines={true}
          codeBlockStyle={true}
        />
      </div>
      <Button>Click me</Button>
      <Button>Click me</Button> */}
    </main>
  );
}
