import Image from "next/image";

export const LogoPNGWhite = (props) => {
  const { width, height } = props;

  return (
    <Image
      src={require("../assets/images/logo-white.png")}
      alt="Piere Logo"
      width={width || 175}
      height={height || 57}
    />
  );
};
