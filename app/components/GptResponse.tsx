import { Typewriter } from "react-simple-typewriter";

const GptResponse = ({ text, author }: { text: string; author: string }) => {
  return (
    <div className="pt-4">
      <p className="text-white">{`>${author}`}</p>
      <p className="text-gold">
        <Typewriter words={[text]} cursor={false} cursorColor="white" />
      </p>
    </div>
  );
};

export default GptResponse;
