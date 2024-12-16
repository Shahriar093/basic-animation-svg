import $ from "jquery";
import Image from "next/image";
import { useEffect } from "react";
const Preloader = ({ className }) => {
  useEffect(() => {
    $(".preloader").show();

    setTimeout(function () {
      $(".preloader").remove();
      $(".animate-from-top").addClass("show");
    }, 2000);
  }, []);
  return (
    <div className={`preloader ${className}`}>
      <div style={styles.container}>
        <Image
          src="/preloader.gif"
          alt="Loading..."
          style={styles.image}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};
const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  image: {
    width: "80px",
    height: "80px",
  },
};
export default Preloader;
