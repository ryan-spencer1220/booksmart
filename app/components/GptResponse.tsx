import { Typewriter } from "react-simple-typewriter";

const GptResponse = ({ text }: { text: string }) => {
  return (
    <div className="pt-4">
      <p className="text-white">{`>George Orwell`}</p>
      <p className="text-gold">
        <Typewriter words={[text]} cursor={false} cursorColor="white" />
      </p>
    </div>
  );
};

export default GptResponse;
