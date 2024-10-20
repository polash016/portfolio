import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Progress,
} from "@material-tailwind/react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v1jgoaj",
        "template_gja2yi3",
        form.current,
        "hpF6SyJq3vp0gokMC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Sent message successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="250" preserveAspectRatio="none" viewBox="0 0 1440 250">
  <g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
      <rect width="1440" height="250" x="0" y="0" fill="#0e2a47"></rect>
      <path d="M27 250L277 0L608.5 0L358.5 250z" fill="url(&quot;#SvgjsLinearGradient1001&quot;)"></path>
      <path d="M253.60000000000002 250L503.6 0L656.6 0L406.6 250z" fill="url(&quot;#SvgjsLinearGradient1001&quot;)"></path>
      <path d="M501.20000000000005 250L751.2 0L1082.7 0L832.7 250z" fill="url(&quot;#SvgjsLinearGradient1001&quot;)"></path>
      <path d="M751.8000000000001 250L1001.8000000000001 0L1151.8000000000002 0L901.8000000000001 250z" fill="url(&quot;#SvgjsLinearGradient1001&quot;)"></path>
      <path d="M1413 250L1163 0L1107.5 0L1357.5 250z" fill="url(&quot;#SvgjsLinearGradient1002&quot;)"></path>
      <path d="M1156.4 250L906.4000000000001 0L667.9000000000001 0L917.9000000000001 250z" fill="url(&quot;#SvgjsLinearGradient1002&quot;)"></path>
      <path d="M945.8 250L695.8 0L430.29999999999995 0L680.3 250z" fill="url(&quot;#SvgjsLinearGradient1002&quot;)"></path>
      <path d="M698.1999999999999 250L448.19999999999993 0L118.19999999999993 0L368.19999999999993 250z" fill="url(&quot;#SvgjsLinearGradient1002&quot;)"></path>
      <path d="M1196.1974002664597 250L1440 6.197400266459681L1440 250z" fill="url(&quot;#SvgjsLinearGradient1001&quot;)"></path>
      <path d="M0 250L243.80259973354032 250L 0 6.197400266459681z" fill="url(&quot;#SvgjsLinearGradient1002&quot;)"></path>
  </g>
  <defs>
      <mask id="SvgjsMask1000">
          <rect width="1440" height="250" fill="#ffffff"></rect>
      </mask>
      <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1001">
          <stop stop-color="rgba(15, 70, 185, 0.2)" offset="0"></stop>
          <stop stop-opacity="0" stop-color="rgba(15, 70, 185, 0.2)" offset="0.66"></stop>
      </linearGradient>
      <linearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="SvgjsLinearGradient1002">
          <stop stop-color="rgba(15, 70, 185, 0.2)" offset="0"></stop>
          <stop stop-opacity="0" stop-color="rgba(15, 70, 185, 0.2)" offset="0.66"></stop>
      </linearGradient>
  </defs>
</svg>`
  return (
      
      <div id="contact" className="bg-gray-100 text-center py-6"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgContent)}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      >
        <Typography className= 'font-bold' variant="h4" color="white">
        <div className="py-4">
        <h1 className="text-2xl font-bold"> Contact Me</h1>
        <Progress className="w-8 h-0.5 mx-auto" value={100} color="amber" />
        </div>
      </Typography>
      <Typography color="white" className="mt-1 font-normal">
        Feel free to Contact to connect with me and I will get back to you as soon as possible
      </Typography>
        <Card className="w-96 mx-auto" color="transparent" shadow={false}>
      <form ref={form} onSubmit={sendEmail} className="mt-8 mb-2 w-80 mx-auto max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input className="bg-white" type="text" name="user_name" size="lg" label="Name" />
          <Input className="bg-white" type="email" name="user_email" size="lg" label="Email" />
          <Textarea className="bg-white" name="message" size="lg" label="Message" />
        </div>
       
        <Button type="submit" className="mt-6" fullWidth>
          Send
        </Button>
        
      </form>
    </Card>
      </div>
  );
};

export default Contact;
