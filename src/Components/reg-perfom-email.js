const to = "RegulatoryPerformance@AirservicesAustralia.com";
const subject = "SCARD Assistance Requested";
const body = [
  "Hello Regulatory Performace,",
  "",
  "I am needing assistance with the completion of SCARD.",
  "The SCARD Number is: "
];

const emailHref2 = (SCARDNum = 0) => {
  const subjectConverted = encodeURI(subject);
  const bodyConverted = encodeURI(body.join("\n"));
  const bodyConverted2 = encodeURI(body.join("\n"));
  return (
    "mailto:" +
    to +
    "?Subject=" +
    subjectConverted +
    "&body=" +
    bodyConverted +
    SCARDNum +
    "\n" +
    bodyConverted2
  );
};
console.log(emailHref2());
export default emailHref2;
