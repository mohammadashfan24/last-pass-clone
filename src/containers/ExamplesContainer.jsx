import React, { useState } from "react";
import { useSelector } from "react-redux";
import AuthInput from "../components/AuthInput";
import LastPassInput from "../components/LastPassInput";
import LastPassButton from "../components/LastPassButton";
import LastPassSelect from "../components/LastPassSelect";
import LastPassCard from "../components/LastPassCard";
import LastPassAccordion from "../components/LastPassAccordion";
import LastPassTextArea from "../components/LastPassTextArea";
import LastPassAddNote from "../components/LastPassAddNote";
import { login } from "../utils/authentication";
import { options } from "../constants/SelectOptions";
import { addCategory } from "../utils/home";
import { NOTE } from "../constants/category";
import LastPassCategoryItem from "../components/LastPassCategoryItem";

const ExamplesContainer = () => {
  const [inputTextarea, setinputTextarea] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputSelect, setInputSelect] = useState(options[4]);
  const user = useSelector(state => state.user);

  return (
    <div className="examples">
      <h1 style={{ marginBottom: "50px" }}>Component Examples</h1>

      <div className="examples__author">Clarence</div>
      <div className="examples__row">
        <LastPassAddNote
          onSave={({ name, folder, note }) => {
            const payload = {
              type: NOTE,
              data: {
                userId: user.id,
                name,
                folder,
                note
              }
            };
            addCategory(payload).then(data => {});
          }}
        />
      </div>
      <div className="examples__author">Clarence</div>
      <div className="examples__row">
        <AuthInput
          error="Please enter a valid email address"
          label="Email address"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
      </div>

      <div className="examples__author">Dikshith</div>
      <div className="examples__row">
        <LastPassButton
          label="LOGIN"
          className="last-pass-button--round-corner"
          onClick={() => {
            login({
              email: "clarencemerchant1995@gmail.com",
              password: "password123*"
            }).then(data => {
              console.log("login data", data);
            });
          }}
        />
        <LastPassButton label="+" className="last-pass-button--round" />
        <LastPassButton label="Cancel" className="last-pass-button--white" />
        <LastPassButton label="Save" className="last-pass-button--red" />
      </div>

      <div className="examples__author">Pragathi</div>
      <div className="examples__row examples__row--vertical">
        <LastPassInput
          value={inputText}
          onChange={e => {
            setInputText(e.target.value);
          }}
          placeholder="Enter username"
        />
        <LastPassInput
          type="password"
          className="last-pass-input--full-width"
          value={inputPassword}
          onChange={e => {
            setInputPassword(e.target.value);
          }}
          placeholder="Enter password"
        />
      </div>

      <div className="examples__author">Ashfan</div>
      <div className="examples__row">
        <LastPassSelect
          value={inputSelect.value}
          options={options}
          onChange={value => {
            setInputSelect(value);
          }}
        />
      </div>

      <div className="examples__author">Dhanalakshmi</div>
      <div className="examples__row">
        <LastPassCard>
          <h1>I am a card</h1>
        </LastPassCard>
      </div>

      <div className="examples__author">Ranjith</div>
      <div className="examples__row examples__row--vertical">
        <LastPassAccordion label="Uncategorized">
          <p>I can any tag or component you wish to be the body of accordion</p>
        </LastPassAccordion>
        <LastPassAccordion label="Business">
          <p>I can any tag or component you wish to be the body of accordion</p>
          <button>hello button here</button>
        </LastPassAccordion>
      </div>

      <div className="examples__author">Kiran</div>
      <div className="examples__row">
        <LastPassTextArea
          value={inputTextarea}
          onChange={e => {
            setinputTextarea(e.target.value);
          }}
          placeholder="Enter feedback"
        ></LastPassTextArea>
      </div>
      <div className="examples__row">
      <LastPassCategoryItem 
      url="https://www.facebook.com/favicon.ico"
      label="Facebook"
      link="facebook.com"/>
       <LastPassCategoryItem 
      url="https://www.twitter.com/favicon.ico"
      label="Twitter"
      link="twitter.com"/>
      </div>
    </div>
  );
};
export default ExamplesContainer;
