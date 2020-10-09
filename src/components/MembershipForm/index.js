import React from "react";
import MembershipForm from "./MembershipForm";

const HomePageForm = () => {
  return (
    <MembershipForm>
      <MembershipForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </MembershipForm.Text>
      <div className="form-wrapper">
        <MembershipForm.Input placeholder="Email address" />
        <MembershipForm.Button>GET STARTED</MembershipForm.Button>
      </div>
    </MembershipForm>
  );
};

export default HomePageForm;
