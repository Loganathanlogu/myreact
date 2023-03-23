import { Amplify } from "aws-amplify";
import Product from "./Poroduct";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./Table.css";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

export default function WithAuth() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <Product />
          <div className="sign-button">
            <button onClick={signOut}>Sign out</button>
          </div>
        </main>
      )}
    </Authenticator>
  );
}
