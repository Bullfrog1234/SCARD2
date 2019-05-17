const to = "RegulatoryPerformance@AirservicesAustralia.com";
const subject = "SCARD Assistance Requested";
const body = [
  "Hello Regulatory Performace, ",
  "",
  "I am needing assistance with the completion of SCARD.",
  "The SCARD Number is: "
];
const body2 = ["I am requesting help with:"];

const emailHref2 = (SCARDNum = 12345) => {
  const subjectConverted = encodeURI(subject);
  const bodyConverted = encodeURI(body.join("\n"));
  const bodyConverted2 = encodeURI(body2.join("\n"));
  const lineBreak = encodeURI("\n");
  return (
    "mailto:" +
    to +
    "?Subject=" +
    subjectConverted +
    "&body=" +
    bodyConverted +
    SCARDNum +
    lineBreak +
    lineBreak +
    bodyConverted2
  );
};
console.log(emailHref2());
export default emailHref2;
