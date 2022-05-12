import React, { useContext } from "react";
import { UserContext, ThemeContext } from "../App";

export default function CompF() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div>
        CompF user: {user} theme:{theme}
      </div>
      {/* <UserContext.Consumer>
        {(user) => (
          <ThemeContext.Consumer>
            {(theme) => (
              <div>
                CompF user: {user} theme:{theme}
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer> */}
    </div>
  );
}
