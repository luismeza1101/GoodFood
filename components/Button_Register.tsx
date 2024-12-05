import Link from "next/link";

interface Props {
  href: string;
  text: "Sign Up" | "Log In";
}

const Button_Register: React.FC<Props> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className={`button-register ${text == "Log In" ? 'bg-white text-black border-2 border-black' : 'bg-main text-white'}`}
    >
      {text}
    </Link>
  );
};

export default Button_Register;
