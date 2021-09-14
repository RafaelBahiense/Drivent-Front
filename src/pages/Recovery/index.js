import { useContext, useState } from "react";

import AuthLayout from "../../layouts/Auth";
import { Row, Title } from "../../components/Auth";
import EventInfoContext from "../../contexts/EventInfoContext";

import SendCode from "../../components/Recovery/SendCode.js";
import VerifyCode from "../../components/Recovery/VerifyCode.js";
import NewPassword from "../../components/Recovery/NewPassword.js";

export default function Dashboard() {
  const { eventInfo } = useContext(EventInfoContext);

  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [code, setCode] = useState("");
  const [codeVerified, setCodeVerified] = useState(false);

  return (
    <AuthLayout background={eventInfo.backgroundImage}>
      <Row>
        <img src={eventInfo.logoImage} alt="Event Logo" />
        <Title>{eventInfo.eventTitle}</Title>
      </Row>
      {emailSent ? (
        codeVerified ? (
          <NewPassword email={email} code={code} />
        ) : (
          <VerifyCode
            codeState={{ code, setCode }}
            email={email}
            setCodeVerified={setCodeVerified}
          />
        )
      ) : (
        <SendCode
          emailState={{ email, setEmail }}
          setEmailSent={setEmailSent}
        />
      )}
    </AuthLayout>
  );
}
